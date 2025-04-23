import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import projectData from '../../data/projects.json'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const renderProjects = (project) => {
        return (
            <div className='images-container'>
                {
                    project.map((proj, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img 
                                    src={proj.cover} 
                                    className='project-image'
                                    alt='project'
                                />
                                <div className='content'>
                                    <p className='title'>{proj.title}</p>
                                    <h4 className='description'>{proj.description}</h4>
                                    <h4 className='tech'><b>Tech Stack:</b> {proj.tech}</h4>
                                    <button
                                        className='btn'
                                        onClick={() => window.open(proj.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
        <div className='container project-page'>
            <h1 className='page-title'>
            <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={'Projects'.split('')}
                        idx={15}
                    />  
            </h1>
            <div>{renderProjects(projectData.projects)}</div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Project