import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import schoolBuildingImg from '../assets/images/school-building.webp'
import careerImg from '../assets/images/two-people-office.jpg'
import NoItemPlaceholder from '../components/NoItemPlaceholder'
import questionBroImg from '../assets/images/question-bro.png'
import CopyrightSection from '../components/CopyrightSection'
import underlineImg from '../assets/images/underline-graphics.png'
import ImageLoader from '../components/ImageLoader'

const Careers = () => {
  return (
   <>
   <div className='top-page-header'>
         <h2 className="header-title">Careers</h2>
   </div>


   <div className='breadcumb-container'>
   <BreadCrumb currentPage='Careers' backgroundImage={careerImg} />
   </div>
  

   <div className='career-container'>

<div className="mt-3" style={{position:'relative'}}>
<h2 style={{textAlign:'center'}}>Careers</h2>

<span style={{position:'absolute',top:'66%',right:"-14%"}}>
<ImageLoader  src={underlineImg} width='120px' height='30px'/>
</span>
</div>

    <NoItemPlaceholder src={questionBroImg} title="No careers"  />


   </div>

   





   </>
  )
}

export default Careers