import React from 'react'
import './index.scss'


const JourneyCard = ({ journey }) => {

    const bullets = Array.isArray(journey?.desc) ? journey.desc : [];
    const renderBullets = bullets.length ? bullets : [String(journey?.desc ?? '')];

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
                {journey?.desc && (
                    <div className='desc-list'>
                        {renderBullets.map((line, idx) => (
                        <div
                            key={`${journey.id}-desc-${idx}`}
                            style={{
                            color: '#fff',
                            margin: '0 0 6px',
                            lineHeight: 1.45,
                            display: 'block',
                            }}
                        >
                            • {line}
                        </div>
                        ))}
                    </div>
                )}

                
                {journey?.skills &&
                    <>
                        <br />
                        <div className='skills'>
                            <b>Skills:</b>
                            <div className='item-wrapper'>
                                {journey?.skills?.map((skill, index) => (
                                    <div className='skill'>{skill}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
                {journey?.techstack &&
                    <>
                        <br />
                        <div className='techstack'>
                            <b>Tech:</b>
                            <div className='item-wrapper'>
                                {journey?.techstack?.map((tech, index) => (
                                    <div className='tech'>{tech}</div>
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