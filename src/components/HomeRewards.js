import React from 'react'
import awardIcon from '../assets/images/awards-icon.png'
import ImageLoader from './ImageLoader'
import trophy1 from '../assets/images/trophy-removebg-preview.png'
import trophy2 from '../assets/images/trophy2.jpg'
import trophy3 from  '../assets/images/trophy3.jpg'

const HomeRewards = () => {
  return (
    <>
    <div className='school-awards' id='school-awards' style={{position:'relative'}}>

        <h2 className='my-3'>Awards</h2>

        <p className='subtitle mb-4 text-center'>"Acknowledging the Determination and Passion That Turns Dreams into Reality"</p>
        <img src={awardIcon} style={{width:"100%",maxWidth:'280px'}}/>

        {/* <img src={trophy1} width="100px" />
        <img src={trophy2} width="100px"  />
        <img src={trophy3} width="100px"/> */}
      
       
       
        <p className="achievement-title mt-3 text-center">Best performing primary school in the Kilifi county year 2024 </p>

    </div>
    </>
  )
}

export default HomeRewards