import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
      <Container style={{minHeight: "610px"}}>
        <Row className='py-5 d-flex justify-content-center'>
          <Col sm="12" className='d-flex flex-column'>
            <label className='mx-auto title-login'>Login</label>
            <input placeholder='Email...' type='text' className='user-input my-3 text-center mx-auto'/>
            <input placeholder='Password...' type='password' className='user-input my-3 text-center mx-auto'/>
            <button className='btn-login mx-auto mt-4'>Login Now</button>
            <label className='mx-auto my-4'>
              Don't Have An Account?{" "}
              <Link to="/register" style={{textDecoration: "none"}}>
                <span style={{cursor: "pointer"}} className='text-danger'>Click here</span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
  )
}

export default LoginPage
