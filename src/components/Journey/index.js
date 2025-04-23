import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses } from '@mui/lab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { journey } from '../../data/journey';
import JourneyCard from './JourneyCard';


const Journey = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [visibleElements, setVisibleElements] = useState([]);
  const timelineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#C6DE41',
      },
    },
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (!visibleElements.includes(id)) {
            setVisibleElements((prevVisibleElements) => [...prevVisibleElements, id]);
          }
        }
      });
    }, options);

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleElements]);

  useEffect(() => {
      // Store the timeout ID
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>
    <div className='container journey-page'>
        <h1 className='page-title'>
        <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={'Journey'.split('')}
                    idx={15}
                />  
        </h1>
        <div className='timeline' ref={timelineRef}>
          <Timeline 
            position={isMobile ? '' : 'alternate'} 
            sx={isMobile ? {
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            } : ''}
          >
              {journey.map((journey, index) => (
                  <TimelineItem key={index} id={`journey-${index}`} className={`timeline-item ${visibleElements.includes(`journey-${index}`) ? 'is-visible' : ''}`}>
                      <TimelineSeparator>
                        <ThemeProvider theme={theme}>
                          <TimelineDot variant="outlined" color="secondary" />
                          {index !== journey.length - 1 && <TimelineConnector style={{ background: '#C6DE41' }} />}
                        </ThemeProvider>
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <JourneyCard journey={journey}/>
                      </TimelineContent>
                  </TimelineItem>
              ))}
          </Timeline>
        </div>
    </div>
    <Loader type='pacman' />
  </>
  )
}

export default Journey