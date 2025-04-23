import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import { SKILLS } from '../../data/skills';
import SkillCard from './SkillsCard';
import SkillsInfoCard from './SkillsInfoCard';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
        window.scrollTo(0, 0);
    };
    
    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1 className='skills-title'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={'Skills'.split('')}
                            idx={15}
                        />
                    </h1>
                    <section className='skills-container'>
                        <div className='skills-content'>
                            <div className='skills'>
                                {SKILLS.map((item) => (
                                    <SkillCard
                                        key={item.title}
                                        iconUrl={item.icon}
                                        title={item.title}
                                        isActive={selectedSkill.title === item.title}
                                        onClick={() => {
                                            handleSelectedSkill(item);
                                        }}
                                    />
                                ))}
                            </div>
                            <div className='skills-info'>
                                <SkillsInfoCard 
                                    heading={selectedSkill.title}
                                    skills={selectedSkill.skills}
                                />
                            </div>
                        </div>
                    </section>
                    <br />
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills