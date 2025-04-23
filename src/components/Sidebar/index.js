import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faGear, faHome, faLightbulb, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    
    const [showNav, setShowNav] = useState(false)
    
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoM} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='mithil' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    onClick={() => setShowNav(false)} 
                    exact='true' 
                    activeclassname='active' 
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#153B44' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='about-link' 
                    to='/about'
                >
                    <FontAwesomeIcon icon={faUser} color='#153B44' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='skills-link' 
                    to='/skills'
                >
                    <FontAwesomeIcon icon={faGear} color='#153B44' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='journey-link' 
                    to='/journey'
                >
                    <FontAwesomeIcon icon={faSuitcase} color='#153B44' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='project-link' 
                    to='/project'
                >
                    <FontAwesomeIcon icon={faLightbulb} color='#153B44' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='contact-link' 
                    to='/contact'
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#153B44' />
                </NavLink>
                {/* Highlighted: Close button rendering conditionally */}
                {showNav && (
                    <FontAwesomeIcon 
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color='#153B44'
                        size='3x'
                        className='close-icon'
                    />
                )}
            </nav>
            <ul className={showNav ? 'mobile-show' : ''}>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/mithilparmar/'
                    >
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faLinkedin} color='#153B44' />
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://github.com/mithilparmar'
                    >
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faGithub} color='#153B44' />
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://instagram.com/mithilparmar__'
                    >
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faInstagram} color='#153B44' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='153B44'
                size='3x'
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar