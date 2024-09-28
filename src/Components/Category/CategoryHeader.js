import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className='cat-header'>
      <Container>
        <Row>
            <Col className='d-flex justify-content-start py-2 flex-wrap'>
                <div className='cat-text-header'>All</div>
                <div className='cat-text-header'>Electronics</div>
                <div className='cat-text-header'>Clothes</div>
                <div className='cat-text-header'>Electric</div>
                <div className='cat-text-header'>Discounts</div>
                <div className='cat-text-header'>Laptops</div>
                <div className='cat-text-header'>Glaces</div>
                <div className='cat-text-header'>Medical</div>
                <div className='cat-text-header'>More... </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CategoryHeader
