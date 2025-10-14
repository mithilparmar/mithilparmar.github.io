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
                            <p>I'm a software engineer who loves working where data, machine learning, and system design meet. For the past two years, I've been building APIs, data pipelines, and ML-powered tools that make teams faster and products smarter.</p>
                        </li>
                        <li>
                            <p>My background in Artificial Intelligence (M.S., San José State University) gave me a deep understanding of how models work—and my time at Infonikka taught me how to ship them in production.</p>
                        </li>
                        <li>
                            <p>I've worked across Python, Flask, TensorFlow, and AWS to process over 100K records a day, automate reports, and integrate LLMs into production workflows.</p>
                        </li>
                        <li>
                            <p>I'm currently exploring how large language models and edge AI can be used to build real-time, data-aware systems that scale.</p>
                        </li>
                    </ul>
                    <Link onClick={handleDownload} className='flat-button'>VIEW MY FULL RESUME</Link>
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