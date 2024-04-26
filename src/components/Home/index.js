import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-m.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Typewriter from 'typewriter-effect';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'ithil.'.split('')
    const jobArray = 'A Software Developer.'.split('')

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _10`}>i</span>
                    <span className={`${letterClass} _11`}>,</span>
                    <br />
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _13`}>’</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} 
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={21} 
                    />
                    </h1>
                    <h2>
                        <Typewriter
                            options={{
                                strings: ['Back End Developer', 'Machine Learning Engineer', 'Front End Developer', 'Data Engineer', 'AI Enthusiast'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 25,
                                pauseFor: 1500,
                                cursorClassName: 'typewriter-cursor',
                                startDelay: 10000,
                            }}
                        />
                    </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home