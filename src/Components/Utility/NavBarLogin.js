import React from 'react'
import { FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import login from '../../images/login.webp'
import cart from '../../images/cart.jpg'
import logo from '../../images/logo.jpg'

const NavBarLogin = () => {
  return (
      <Navbar className='sticky-top' bg='dark' variant='dark' expend='sm'>
        <Container>
          <Navbar.Brand>
            <a href='/'><img src={logo} className='logo'/></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <FormControl
                  type='search'
                  placeholder='Search...'
                  className='me-2 w-100 text-center'
                  aria-label="Search"
            />
            <Nav className='me-auto'>
                <Nav.Link href='/login' className='nav-text d-flex mt-3 justify-content-center'>
                  <img src={login} className='login-img' alt='asd'/>
                  
                  <p style={{color: "white"}}>Login</p>
                </Nav.Link>

                <Nav.Link className='nav-text d-flex mt-3 justify-content-center'>
                  <img src={cart} className='login-img' alt='asd'/>
                  <p style={{color: "white"}}>Cart</p>
                </Nav.Link>
            </Nav>      
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBarLogin



