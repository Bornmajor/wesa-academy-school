import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyContext from '../context/context';

const EventCard = ({title,src,date}) => {
    const [isSave,setIsSave] = useState(false);
    const {promptMessage,contextHolder} = useContext(MyContext);

    const toggleSaveStatus = () =>{
        setIsSave(!isSave);
        console.log('Clicked');
      if(isSave){
        promptMessage('success','Event removed')
      }else{
        promptMessage('success','Event saved')
      }
    }

 


  return (
    <>
     {contextHolder}
    <Card className='school-event-card'>
      <Card.Img  className="img"variant="top" src={src} style={{height:'12rem'}} />
      <Card.Body className="event-body" >
        <div>
          <Card.Subtitle style={{fontSize:'12px',marginBottom:'5px'}}>{date}</Card.Subtitle>
        <Card.Title className='text-truncate' style={{maxWidth:'15rem'}}>{title}</Card.Title>  
        </div>
        <FontAwesomeIcon style={{fontSize:'20px'}} icon={isSave ? 'fas fa-bookmark': 'far fa-bookmark'} onClick={toggleSaveStatus} />
        
        {/* {isSave ?
         <span className="saved-state" onClick={toggleSaveStatus}>
         <FontAwesomeIcon icon="fas fa-bookmark" />
        </span>
        :
        <span className="unsaved-state" onClick={toggleSaveStatus}>
        <FontAwesomeIcon icon="far fa-bookmark" />
       </span>
         } */}
       
       

      </Card.Body>
      </Card>
    </>
    
  )
}

export default EventCard