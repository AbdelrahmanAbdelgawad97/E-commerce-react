import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
      <Container style={{ minHeight: "610px" }}>
        <Row className='py-5 d-flex justify-content-center'>
          <Col sm="12" className='d-flex flex-column'>
            <label className='mx-auto title-login'>Register New Account</label>
            <input placeholder='User Name...' type='text' className='user-input my-3 text-center mx-auto' />
            <input placeholder='Email...' type='text' className='user-input my-3 text-center mx-auto' />
            <input placeholder='Password...' type='password' className='user-input my-3 text-center mx-auto' />
            <button className='btn-login mx-auto mt-4'>Register Now</button>
            <label className='mx-auto my-4'>
              You already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className='text-danger'>Click here</span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
  )
}

export default RegisterPage
