import React from 'react'
import Card from 'react-bootstrap/Card';  
import GalleryCard from '../components/GalleryCard';
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.jpg'
import underlineImg from '../assets/images/underline-graphics.png'
import HomeRewards from '../components/HomeRewards';
import HomeContactUs from '../components/HomeContactUs';
import CopyrightSection from '../components/CopyrightSection';
import ImageLoader from '../components/ImageLoader';
import HomeEvents from '../components/HomeEvents';
import HomeHeroSection from '../components/HomeHeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <>
    <HomeHeroSection />


    <div className='curriculum-section'>

<div className="mb-3"style={{position:'relative'}}>
 <h2 style={{textAlign:'center'}}>Curriculum</h2>

 <span style={{position:'absolute',top:'70%'}}>
   <ImageLoader  src={underlineImg} width='180px' height='30px'/>
 </span>


</div>


      <div className='cards-curriculum-container' id="cards-curriculum-container">

     
       
      <Card className='curriculum-card'>
      <Card.Body>
       <h3>CBC </h3>
       <h5>2-6-3-3</h5>
       <p className='desc'>Newest educational framework, focusing on the development of 
        practical skills and competencies rather than rote learning</p>
        </Card.Body>
      </Card>

      <Card className='curriculum-card'>
      <Card.Body>
       <h3>IGSE</h3> 
       <h5> 4-4-2</h5>
       <p className='desc'>internationally recognized curriculum developed by the University of Cambridge.Offered in private and international schools in Kenya</p>
        </Card.Body>
      </Card>

      <Card className='curriculum-card'>
      <Card.Body>
       <h3>8-4-4 system</h3> 
       <h5>8-4-4</h5>
       <p className='desc'>The system was structured to include 8 years of primary education, 4 years of secondary education, and 4 years of university education .</p>
        </Card.Body>
      </Card>

      </div>

     
     
     

    </div>

{/*school events*/}
<HomeEvents />

{/*school life*/}

<div className='school-life-section'>

<div className="mb-4"style={{position:'relative'}}>
<h2 className='mb-3'> <span style={{color:"#a66034"}}>School</span> life</h2>

 <span style={{position:'absolute',top:'58%'}}>
   <ImageLoader  src={underlineImg} width='180px' height='30px'/>
 </span>


</div>



<div className="main-gallery-container" id="main-gallery-container">

 <div className="inner-gallery-container">
<GalleryCard src={gallery1}/>
<GalleryCard src={gallery2}/>
<GalleryCard src={gallery3}/>
</div> 

<div className="inner-gallery-container">
<GalleryCard src={gallery4}/>
<GalleryCard src={gallery5}/>
<GalleryCard src={gallery6}/> 
</div>


 
</div>

<div className="small-main-gallery-container" id="main-gallery-container">

{/* <div>
<FontAwesomeIcon icon="fas fa-caret-right" size='lg' style={{fontSize:'30px'}}/>  
</div> */}


<GalleryCard src={gallery1}/>
<GalleryCard src={gallery2}/>
<GalleryCard src={gallery3}/>


<GalleryCard src={gallery4}/>
<GalleryCard src={gallery5}/>
<GalleryCard src={gallery6}/> 



 
</div>



</div>

{/*rewards*/}
<HomeRewards />
<HomeContactUs />



    
    </>
    
  )
}

export default Home