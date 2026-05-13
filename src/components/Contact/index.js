import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_toik8al',
                'template_8mmxjw7',
                refForm.current,
                'lPv2QO0JzwN8IUbTH'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={'Contact Me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                    I'm always open to exciting opportunities, collaboration, or simply a friendly hello. Whether you're reaching out about a role, project, or just curious about my journey — I'd love to connect. Your messages are always welcome and appreciated!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        className='placeText'
                                        type='text' 
                                        name='name' 
                                        placeholder='Full Name' 
                                        required 
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        className='placeText'
                                        type='email' 
                                        name='email' 
                                        placeholder='Email' 
                                        required 
                                    />
                                </li>
                                <li>
                                    <input 
                                        className='placeText'
                                        placeholder='Subject'
                                        type='text'
                                        name='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        className='placeText'
                                        placeholder='Message'
                                        name='message'
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type='submit'
                                        className='flat-button'
                                        value='SEND'
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Mithil Parmar
                    <br />
                    52/A, Shreenagar Society
                    <br />
                    Vadodara,GJ 390020
                    <br />
                    INDIA
                    <br />
                    <a href='mailto:me@mithilparmar.com'><span>me@mithilparmar.com</span></a>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[22.3003172, 73.1735675]} zoom={15}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[22.3003172, 73.1735675]}>
                        <Popup>Mithil lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact