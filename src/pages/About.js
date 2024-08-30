import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import schoolBuildingImg from '../assets/images/school-building2.jpg'
import ImageLoader from '../components/ImageLoader';
import oldSchoolImg from '../assets/images/history-school.png'
import underlineImg from '../assets/images/underline-graphics.png'
import CopyrightSection from '../components/CopyrightSection';
import MyContext from '../context/context';
import { message } from "antd";

const About = () => {
   

   const [messageApi, contextHolder] = message.useMessage();

   const displayLinkError = ()=>{
      //error message
   messageApi.open({
     type: 'error',
     content: 'Link unavailable !!Try again later',
   });


   }


  return (
    <>
   {contextHolder}
   
   <div className='top-page-header'>
         <h2 className="header-title">About</h2>
   </div>


   <div className='breadcumb-container'>
     <BreadCrumb currentPage='About' backgroundImage={schoolBuildingImg} /> 
   </div>
      

      <div className='school-motto-container'>

      <div className='school-motto-item'>
      <FontAwesomeIcon style={{fontSize:"30px"}} icon="fas fa-rocket" />
      <p className="title">Mission</p>
      <p className='content'>Empower and educate our children to overcome adversity and become future leaders.</p>
      </div>

      <div className='school-motto-item'>
      <FontAwesomeIcon style={{fontSize:"30px"}} icon="fas fa-eye" />
      <p className="title">Vision</p>
      <p className='content'>To be a beacon of hope, guiding every child to reach their full potential.</p>
      </div>

      <div className='school-motto-item'>
      <FontAwesomeIcon style={{fontSize:"30px"}} icon="fas fa-book-reader" />
      <p className="title">Motto</p>
      <p className='content'>Striving for excellence, embracing diversity: A community of learners, united by knowledge.</p>
      </div>


      </div>
     
     {/*history*/}
     <div className='brief-history-container' id="brief-history-container">
      <div className="historical-img">
        <ImageLoader src={oldSchoolImg}  height="400px" />   
      </div>
    

      <div className='content' >
      <p className='title'>Brief history</p>


      <p>
      Founded in 2005 in Kilifi by local church and community leaders,
      Wesa Academy began as a small initiative to provide quality education and spiritual guidance. Over the years, it has grown into a respected institution, known for nurturing resilient, 
      well-rounded students rooted in Christian values and committed to overcoming adversity.
      </p>

      <div className='population-figures-container mt-3 pt-2' >
        
        <div className='item'>
         <span className='title'>Students</span>
         <span className='figures'>2K+</span>
        </div>

        <div className='item'>
         <span className='title'>Staff</span>
         <span className='figures'>300</span>
        </div>

        <div className='item'>
         <span className='title'>Year of operation</span>
         <span className='figures'>18</span>
        </div>

      </div>

      </div>
   


     </div>

     <div className='important-links-container' id="important-links-container">

<div className="mb-3"style={{position:'relative'}}>
<h2 style={{textAlign:'center'}}>Important links</h2>

<span style={{position:'absolute',top:'80%',left:"10%"}}>
<ImageLoader  src={underlineImg} width='150px' height='30px'/>
</span>
</div>
     
     <div className='links-container my-3'>

        

     <a className='btn btn-primary card-link'  onClick={displayLinkError}>
        Admission form
     </a>

     <a className='btn btn-primary card-link' onClick={displayLinkError}>
        School fees
     </a>

     <a className='btn btn-primary card-link' onClick={displayLinkError}>
        Transport fees
     </a>

     <a className='btn btn-primary card-link' onClick={displayLinkError}>
        Meals fees
     </a>

     <a className='btn btn-primary card-link' onClick={displayLinkError}>
        Results
     </a>

     <a className='btn btn-primary card-link' onClick={displayLinkError}>
        School policies
     </a>




     </div>
     

     </div>





    </>
  )
}

export default About