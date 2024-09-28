import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phone from "../../images/phoens.jpg"
import facbook from "../../images/facebook.avif"
import instgram from "../../images/instgrame.jpg"
import twitter from "../../images/twiter.png"

const Footer = () => {
  return (
    <div className='footer-background footer mt-3 pt-2' style={{maxHeight: "50px"}}>
      <Container className=''>
        <Row className='d-flex justify-content-between align-items-center'>
            <Col sm="6" className='d-flex align-items-center'>
                <div className='footer-shroot'>Terms And Conditions</div>
                <div className='footer-shroot mx-2'> Privacy Policy </div>
                <div className='footer-shroot mx-2'> Contact Us </div>
            </Col>
            <Col sm="6" className='d-flex justify-content-end align-items-center'>
                <div className='d-flex pt-3 mx-2'>
                    <img width="20px" height="20px" src={phone}/>
                    <p className='footer-phone'>01120396633</p>
                </div>

                <div style={{cursor: "pointer"}} className=''>
                    <img width="20px" height="20px" src={facbook}/>
                </div>

                <div style={{cursor: "pointer"}} className=''>
                    <img width="40px" height="20px" src={instgram}/>
                </div>

                <div style={{cursor: "pointer"}} className=''>
                    <img width="20px" height="20px" src={twitter}/>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
