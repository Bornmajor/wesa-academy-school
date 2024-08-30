import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breadCrumbImg from '../assets/images/hero-section-1.jpg'

const BreadCrumb = ({currentPage,backgroundImage}) => {
  return (
    <div className='hero-container-component' style={{backgroundImage:`url(${backgroundImage})`}}>
        <div className='header'>
            <p className='mx-4'>Home</p>
             <FontAwesomeIcon style={{fontSize:'20px',alignSelf:'center'}} icon="fas fa-chevron-right" />
              <p className='mx-4'>{currentPage}</p>
        </div>
    </div>
  )
}

export default BreadCrumb