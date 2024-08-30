import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className='upper-footer'>

        <div className='footer-address'>
         <span><FontAwesomeIcon icon="fas fa-map-marker-alt" /> P.E.F.A. Church Wesa,Kilifi</span>
         <span><FontAwesomeIcon icon="fas fa-phone" /> + 254 726 710 303</span>
         <span><FontAwesomeIcon icon="fas fa-envelope" /> pefawesa@academy.com</span>

        </div>

        <div class="footer-social-links">
        <FontAwesomeIcon icon="fab fa-linkedin" style={{fontSize:'35px',marginRight:'10px'}} />
        <FontAwesomeIcon icon="fab fa-facebook-square" style={{fontSize:'35px',marginRight:'10px'}} />
        <FontAwesomeIcon icon="fab fa-instagram-square" style={{fontSize:'35px',marginRight:'10px'}} />
             
        </div>

        </div>
        
        <div className='lower-footer'>

            <div className='sitemaps'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/staff" className='link'>Staff</Link>
            <Link to="/careers" className='link'>Careers</Link>
            </div>

            <div className='sitemaps'>
            <Link to="/#school-events" className='link'>Events</Link>
            <Link to="/#contact-form-container" className='link'>Contact Us</Link>
            <Link to="/#cards-curriculum-container" className='link'>Curriculum</Link>
            <Link to="/about#important-links-container" className='link'>Admission</Link>
            </div>

            <div className='sitemaps'>
            <Link to="/#school-awards" className='link'>Awards</Link>
            <Link to="/about#important-links-container" className='link'>Fee structure</Link>
            <Link to="/#main-gallery-container" className='link'>Gallery</Link>
            <Link to="/about#brief-history-container" className='link'>History</Link>
            </div>

        </div>


       
        
    </div>
  )
}

export default Footer