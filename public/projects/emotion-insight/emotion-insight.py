from pathlib import Path
from typing import Tuple, Optional
import numpy as np
from PIL import Image, ImageOps
import matplotlib.pyplot as plt

EMOTION_LABELS = ["angry", "disgust", "fear", "happy", "sad", "surprise", "neutral"]
label_to_text = {i: name for i, name in enumerate(EMOTION_LABELS)}

MODEL_PATH: Optional[str] = None  # e.g., '/mnt/data/fer_model.h5'
IMG_SIZE: Tuple[int, int] = (48, 48)

class HeuristicModel:
    def predict(self, batch: np.ndarray) -> np.ndarray:
        N = batch.shape[0]
        preds = np.zeros((N, len(EMOTION_LABELS)), dtype=np.float32)
        for i in range(N):
            img = batch[i, ..., 0]
            mean_val = float(img.mean())
            std_val = float(img.std())
            scores = np.zeros(len(EMOTION_LABELS), dtype=np.float32)
            scores[EMOTION_LABELS.index("happy")] = mean_val
            scores[EMOTION_LABELS.index("surprise")] = std_val
            scores[EMOTION_LABELS.index("neutral")] = 0.4
            if scores.sum() == 0:
                scores[:] = 1.0 / len(scores)
            else:
                scores = scores / scores.sum()
            preds[i] = scores
        return preds

def load_model_safely(model_path: Optional[str]):
    if model_path is None:
        print("MODEL_PATH not set — using HeuristicModel fallback.")
        return HeuristicModel()
    try:
        import tensorflow as tf  # optional
        if Path(model_path).is_dir():
            model = tf.keras.models.load_model(model_path)
        else:
            model = tf.keras.models.load_model(str(model_path))
        print(f"Loaded TensorFlow model from: {model_path}")
        return model
    except Exception as e:
        print(f"Failed to load TensorFlow model from '{model_path}' ({e}).\n"
              "Falling back to HeuristicModel.")
        return HeuristicModel()

model = load_model_safely(MODEL_PATH)

def load_image(path: str) -> Image.Image:
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"Image not found: {p}")
    img = Image.open(p).convert('L')
    return img

def preprocess(img: Image.Image, target_size=IMG_SIZE) -> np.ndarray:
    img = ImageOps.exif_transpose(img)
    img = ImageOps.pad(img, target_size, method=Image.BILINEAR, color=0, centering=(0.5,0.5))
    arr = np.asarray(img, dtype=np.float32) / 255.0
    arr = arr.reshape((1,) + target_size + (1,))
    return arr

def predict_emotion(image_path: str):
    img = load_image(image_path)
    batch = preprocess(img, target_size=IMG_SIZE)
    probs = model.predict(batch)
    if probs.ndim != 2 or probs.shape[1] != len(EMOTION_LABELS):
        if probs.ndim == 1 and probs.size == len(EMOTION_LABELS):
            probs = probs.reshape(1, -1)
        else:
            probs = np.ones((1, len(EMOTION_LABELS)), dtype=np.float32) / len(EMOTION_LABELS)
    idx = int(np.argmax(probs, axis=1)[0])
    return label_to_text[idx], probs[0]

def show_image_with_label(image_path: str, label: str, probs: np.ndarray):
    img = load_image(image_path)
    plt.figure()
    plt.imshow(img, cmap='gray')
    plt.axis('off')
    plt.title(f"Predicted: {label}")
    plt.show()

    plt.figure()
    y = probs
    x = np.arange(len(EMOTION_LABELS))
    plt.bar(x, y)
    plt.xticks(x, EMOTION_LABELS, rotation=30)
    plt.ylabel("Probability")
    plt.title("Emotion probabilities")
    plt.show()

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        path = sys.argv[1]
    else:
        path = input("Enter the path of a face image (or leave blank to exit): ").strip()
    if path:
        try:
            label, probs = predict_emotion(path)
            print("Emotion detected:", label)
            show_image_with_label(path, probs=probs, label=label)
        except Exception as e:
            print("Failed to run prediction:", e)
    else:
        print("No image path provided.")
