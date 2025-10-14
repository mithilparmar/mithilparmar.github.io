import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import projectData from '../../data/projects.json'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [activeCat, setActiveCat] = useState('All')

    const allCats = Array.from(new Set(['All', ...projectData.projects.map(p => p.category || 'Other')]))
    const filtered = activeCat === 'All'
        ? projectData.projects
        : projectData.projects.filter(p => p.category === activeCat)

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    // split "Python, Flask, React" -> ["Python","Flask","React"]
    const toChips = (techStr) =>
    String(techStr || '')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean);

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
                                    alt={proj.title}
                                />
                                <div className='content'>
                                    <p className='title'>{proj.title}</p>
                                    <h4 className='description'>{proj.description}</h4>
                                    {proj.metrics && proj.metrics.length > 0 && (
                                        <ul className='metrics'>
                                            {proj.metrics.slice(0, 3).map((m, i) => (
                                            <li key={i}>{m}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className='tech-stack'>
                                        <div className='tech-list'>
                                            {toChips(proj.tech).map((t, i) => (
                                            <div className='tech-chip' key={`${proj.title}-tech-${i}`}>{t}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='links'>
                                        {proj.url && (
                                            <button
                                            className='btn'
                                            onClick={() => window.open(proj.url, '_blank')}
                                            >
                                            GitHub
                                            </button>
                                        )}
                                        {proj.demo && (
                                            <button
                                            className='btn secondary'
                                            onClick={() => window.open(proj.demo, '_blank')}
                                            >
                                            Demo
                                            </button>
                                        )}
                                        {proj.notebook && (
                                            <button
                                            className='btn secondary'
                                            onClick={() => window.open(proj.notebook, '_blank')}
                                            >
                                            Notebook
                                            </button>
                                        )}
                                    </div>
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
            <div className='filters'>
                {allCats.map(c => (
                    <button
                        key={c}
                        className={`btn-filter ${c === activeCat ? 'active' : ''}`}
                        onClick={() => setActiveCat(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>
            <div>{renderProjects(filtered)}</div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Project