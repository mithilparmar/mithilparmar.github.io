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
                            <p>Dedicated and passionate professional with a Master of Science degree in Artificial Intelligence.</p>
                        </li>
                        <li>
                            <p>Gained extensive knowledge in machine learning, deep learning, web development, and software development fundamentals through my academic journey.</p>
                        </li>
                        <li>
                            <p>Have a strong foundation in programming languages such as Java and Python.</p>
                        </li>
                        <li>
                            <p>Expertise in tools and technologies like React, Node.js, AWS, Docker, Tensorflow, Scikit-Learning, MySQL, Firebase, and more.</p>
                        </li>
                        <li>
                            <p>Notable among my accomplishments is the development of a collaborative video compression platform, leveraging ML models such as SR-GANs to surpass conventional OpenCV methods.</p>
                        </li>
                        <li>
                            <p>Developed strong problem-solving and collaboration skills while working in a fast-paced environment because of my work as a Software Developer at a Infonikka.</p>
                        </li>
                        <li>
                            <p>Continuously exploring cutting-edge technologies and methodologies to remain at the forefront of innovation.</p>
                        </li>
                    </ul>
                    <Link onClick={handleDownload} className='flat-button'>MY RESUME</Link>
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