import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import schoolBuildingImg from '../assets/images/school-building.webp'
import underlineImg from '../assets/images/underline-graphics.png'
import ImageLoader from '../components/ImageLoader'
import StaffProfileCard from '../components/StaffProfileCard'
import staff1 from '../assets/images/staff_1.jpeg'
import staff2 from '../assets/images/staff_2.jpeg'
import staff3 from '../assets/images/staff_3.jpg'
import staff4 from '../assets/images/staff_4.jpg'
import largeGroupImg from '../assets/images/large_group3.jpg'
import CopyrightSection from '../components/CopyrightSection'

const Staff = () => {
  return (
    <>

<div className='top-page-header'>
         <h2 className="header-title">Staff</h2>
   </div>


   <div className='breadcumb-container'>
     <BreadCrumb currentPage='Staff' backgroundImage={largeGroupImg} />
   </div>
        

<div className='container-staff-page'>
<div className="mt-3" style={{position:'relative'}}>
<h2 style={{textAlign:'center'}}>Our Team</h2>

<span style={{position:'absolute',top:'70%',right:"-10%"}}>
<ImageLoader  src={underlineImg} width='130px' height='30px'/>
</span>
</div>

<div className='staff-items-container'>

    <StaffProfileCard src={staff1} name="James Mwangombe" title="Managing Director"/>
    <StaffProfileCard src={staff4} name="Rachel Charo" title="Head mistress"/>
    <StaffProfileCard src={staff3} name="Osborn Mangaro" title="Teacher"/>
    <StaffProfileCard src={staff2} name="Chris Muye" title="Teacher"/>

    <StaffProfileCard src={staff1} name="James Mwangombe" title="Teacher"/>
    <StaffProfileCard src={staff4} name="Rachel Charo" title="Head of department(Maths)"/>
    <StaffProfileCard src={staff3} name="Osborn Mangaro" title="Staff"/>
    <StaffProfileCard src={staff2} name="Chris Muye" title="Staff"/>
    

</div>

<div className='staff-items-container mb-3'>

   
    

</div>

{/* <div className='large-photo-container my-4 p-3'>
    <ImageLoader  src={largeGroupImg}   width="600px"/>
</div> */}



</div>




    </>
  )
}

export default Staff