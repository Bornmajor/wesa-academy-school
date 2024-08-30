import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import MyContext from '../context/context';
import appLogo from '../assets/images/wesa-pefa-brown.png';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

const TopBar = () => {
  const { toggleNavbar, navBarIsOpen } = useContext(MyContext);
  const location = useLocation();

  // Update active navigation when you are on the current page
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'navlink active-nav-link' : 'navlink';
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" id='navbar' sticky="top">
        <Container fluid>
          <Navbar.Brand to='/' as={Link} className='navlink'>
            <img src={appLogo} alt='App logo' width={60} />
            <span className='navbar-app-title'>Wesa Academy</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleNavbar} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            className="offcanvas-fullwidth"
            placement="end"
            show={navBarIsOpen}
            onHide={toggleNavbar}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link to="/home" id="nav-home-link" className={getNavLinkClass('/home')} as={Link}>Home</Nav.Link>
                <Nav.Link to="/about" className={getNavLinkClass('/about')} as={Link}>About</Nav.Link>
                <Nav.Link to="/staff" className={getNavLinkClass('/staff')} as={Link}>Staff</Nav.Link>
                <Nav.Link to="/#school-events" className={getNavLinkClass('/events')} as={Link}>Events</Nav.Link>
                <Nav.Link to="/careers" className={getNavLinkClass('/careers')} as={Link}>Careers</Nav.Link>
                <Nav.Link to="/#contact-form-container" className={getNavLinkClass('/inquires')} as={Link}>Inquires</Nav.Link>
             
              </Nav>
              <Nav className=' justify-content-end flex-grow-1 pe-3'>
              
                <Link to="/about#important-links-container" className='btn btn-primary btn-top-admission'>Admission</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
