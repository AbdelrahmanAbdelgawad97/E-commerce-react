import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import starRate from '../../images/starRat.webp'
import favorite from '../../images/fav.webp'

const ProductCard = ({photo, cardTitle, price, currency, rate}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='d-flex'>
          <Card style={{ width: '18rem' }}>
              <Card.Body>
                  
                  <Row className='d-flex justify-content-between '>
                    <img className='' height='250px' src={photo} />
                  </Row>
                  <img src={favorite} height='16px' width='16px'/>
                  <Card.Title className='text-center'>{cardTitle}</Card.Title>
                  <Card.Text>
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <div className='card-rate mx-2'>{rate}</div>
                            <img src={starRate} height='16px' width='16px'/>
                        </div>
                        <div className='d-flex'>
                            <div className='card-price'>{price}</div>
                            <div className='card-currency mx-1'>{currency}</div>
                        </div>
                      </div>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
    </Col>
  )
}

export default ProductCard
