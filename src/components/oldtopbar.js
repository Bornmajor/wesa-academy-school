import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import MyContext from '../context/context';
import { useLocation } from 'react-router-dom';
import appLogo from '../assets/images/wesa-pefa-brown.png'
import Button from 'react-bootstrap/Button'


const TopBar = () => {
  const {toggleNavbar,navBarIsOpen,setIsAppLoading} = useContext(MyContext);
  const location = useLocation();


//update active navigation when you are on current page
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'navlink active-nav-link' : 'navlink';
  };

 

  return (
    <>
     <Navbar expand="lg"  className="bg-body-tertiary" id='navbar'  sticky="top">
     
         {/* <Container> */}



      <Navbar.Brand to='/' as={Link} className='navlink'> <img src={appLogo} alt='App logo' width={70} />
      <span className='navbar-app-title'>Wesa Academy</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}/>
      
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' in={navBarIsOpen}>

        <Nav className='d-flex align-items-center' >
        
          <Nav.Link to="/about" className={getNavLinkClass('/about')}   as={Link}>About</Nav.Link>
          <Nav.Link to="/staff" className={getNavLinkClass('/staff')}  as={Link}>Staff</Nav.Link>
          <Nav.Link to="/#school-events" className={getNavLinkClass('/events')}  as={Link}>Events</Nav.Link>
          <Nav.Link to="/careers" className={getNavLinkClass('/careers')}  as={Link}>Careers</Nav.Link>
          <Nav.Link to="/#contact-form-container" className={getNavLinkClass('/inquires')} as={Link}>Inquires</Nav.Link>
          {/* <Nav.Link to="/project/1" className='navlink'  as={Link}>Project</Nav.Link> */}
         
          

    
          
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          
        </Nav>

  
      </Navbar.Collapse>

      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' in={navBarIsOpen}>

<Nav className='justify-content-end mx-2'>

   <Link to="/about#important-links-container"  className='btn btn-primary'>Admission</Link>
  {/* <Button variant="primary" ></Button> */}

</Nav>



</Navbar.Collapse>
{/* </Container> */}
  </Navbar>
    </>
   
  )
}

export default TopBar