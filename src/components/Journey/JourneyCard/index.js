import React from 'react'
import './index.scss'

const JourneyCard = ({ journey }) => {
    return (
        <div className='card'>
            <div className='top'>
                <div className='image'>
                    <img src={journey.img} alt='' />
                </div>
                <div className='body'>
                    <div className='Role'>{journey.role}</div>
                    <div className='company'>{journey.company}</div>
                    <div className='date'>{journey.date}</div>
                </div>
            </div>
            <div className='description'>
                {journey?.desc &&
                    <span>{journey?.desc}</span>

                }
                {journey?.skills &&
                    <>
                        <br />
                        <div className='skills'>
                            <b>Skills:</b>
                            <div className='item-wrapper'>
                                {journey?.skills?.map((skill, index) => (
                                    <div className='skill'>• {skill}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
                {journey?.grades &&
                    <>
                        <br />
                        <div className='grades'>
                            <b>Grade:</b>
                            <div className='item-wrapper'>
                                {journey?.grades?.map((grade, index) => (
                                    <div className='grade'>{grade}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
            {journey.doc &&
                <a href={journey.doc} target="new">
                    <div className='document'>
                        <img src={journey.doc} alt='' />
                    </div>
                </a>
            }
        </div>
    )
}

export default JourneyCard