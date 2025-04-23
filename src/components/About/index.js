import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import ProfilePic from '../../assets/images/profile_pic.png'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const handleDownload = () => {
        const resumeUrl = 'https://mithilparmar-portfolio.s3.us-west-1.amazonaws.com/assets/files/Mithil_Parmar_Resume.pdf';
        window.open(resumeUrl, '_blank');
    };
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={'About Me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <ul>
                        <li>
                            <p>AI-focused Software Engineer with an M.S. in Artificial Intelligence and 2+ years of full-stack experience building ML-integrated web apps.</p>
                        </li>
                        <li>
                            <p>Built a strong foundation in ML, DL, and software engineering through hands-on academic and industry projects.</p>
                        </li>
                        <li>
                            <p>Have a strong foundation in programming languages such as Java and Python.</p>
                        </li>
                        <li>
                            <p>Expertise in tools and technologies like React, Node.js, AWS, Docker, Tensorflow, Scikit-Learning, MySQL, Firebase, and more.</p>
                        </li>
                        <li>
                            <p>Led the development of a collaborative SR-GAN-based video compression API, outperforming traditional OpenCV methods.</p>
                        </li>
                        <li>
                            <p>Developed strong problem-solving and collaboration skills while working in a fast-paced environment because of my work as a Software Developer at a Infonikka.</p>
                        </li>
                        <li>
                            <p>Passionate about experimenting with emerging tech like LLMs, edge ML, and real-time AI experiences.</p>
                        </li>
                    </ul>
                    <Link onClick={handleDownload} className='flat-button'>VIEW MY RESUME</Link>
                </div>

                <div class="profile-container">
                    <img src={ProfilePic} alt="Mithil" class="img-fluid my-3 profile-pic" />
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About