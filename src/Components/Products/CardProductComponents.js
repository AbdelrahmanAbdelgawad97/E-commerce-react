import React from 'react'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import Subtitle from '../Utility/Subtitle'

import photoTitle from '../../images/airboots.jpg'
import headPhone from '../../images/headPhone.png'
import airBads from '../../images/airBads.jpg'
import dell from '../../images/dell.jpeg'

const CardProductComponents = ({title, btntitle}) => {
  return (
    <Container>
        <Subtitle title={title} btntitle={btntitle} pathText="/shopproduct"/>
          <Row className='d-flex justify-content-between' >
            <ProductCard photo={photoTitle} cardTitle="Air Boots" price="850" currency="$" rate="4.5"/>
            <ProductCard photo={headPhone} cardTitle="Head Phone" price="60" currency="$" rate="5.5"/>
            <ProductCard photo={airBads} cardTitle="Air Bads" price="150" currency="$" rate="3.5"/>
            <ProductCard photo={dell} cardTitle="Dell" price="1000" currency="$" rate="6"/>
          </Row>
    </Container>
  )
}

export default CardProductComponents
