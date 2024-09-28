import React from 'react'
import { Container } from 'react-bootstrap';
import discountImage from "../../images/discount.jpg"
import { Col, Row } from 'react-bootstrap';

const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
            <div className='discount-title'>
                Discount Up To 50% for Laptop
            </div>
        </Col>
        <Col sm="6">
            <img className='dicount-img' height= "130px" src={discountImage}/>
        </Col>

      </Row>
    </Container>
  )
}

export default DiscountSection;
