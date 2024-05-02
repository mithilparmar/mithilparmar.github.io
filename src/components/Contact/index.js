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
                    Embarking on a quest for the ideal job that resonates with my passions! 
                    Whether you have an opportunity, questions about my journey, or simply 
                    want to say hello, my inbox is open for your emails. 
                    Your guidance, opportunities, and conversations are eagerly awaited and highly valued!
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
                    1601 Birchmeadow Ct
                    <br />
                    San Jose, CA 95131
                    <br />
                    USA
                    <br />
                    <a href='mailto:mithilparmar09@gmail.com'><span>mithilparmar09@gmail.com</span></a>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[37.38770700752998, -121.89001679420471]} zoom={15}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[37.38770700752998, -121.89001679420471]}>
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