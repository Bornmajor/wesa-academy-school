import React from 'react'
import EventCard from './EventCard'
import sportdayimg from '../assets/images/sports-day.jpeg'
import prizeGivingImg from '../assets/images/prize-giving-day.jpg'
import culturalImg from '../assets/images/cultural-img.jpg'
import prayerImg from '../assets/images/students-in-prayer.jpg'
import placeholder from '../assets/images/placeholder2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomeEvents = () => {
  return (
    <div className='school-events' id='school-events'>

    <div className='d-flex justify-content-between align-items-center'>
     <h2>Upcoming events</h2>  
     <FontAwesomeIcon icon="fas fa-caret-right" size='lg' style={{fontSize:'30px'}}/>
    </div>
        
          <div className="events-card-container">
    
         <EventCard title="Sports day" date="19/04/24" src={sportdayimg}/>
         <EventCard title="Prize-Giving Day" date="19/06/24" src={prizeGivingImg}/>
         <EventCard title="Cultural day" date="19/07/24"  src={culturalImg}/>
          <EventCard title="Candidates Prayer day" date="19/08/24" src={prayerImg}/>

    
    
          </div>
    
    </div>
  )
}

export default HomeEvents