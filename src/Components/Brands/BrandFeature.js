import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Subtitle from '../Utility/Subtitle'

import dell1 from '../../images/brandDell.jpg'
import apple1 from '../../images/appleBrand.png'
import lg1 from '../../images/LGBrand.png'
import lenovo1 from '../../images/lenovo.png'
import canon1 from '../../images/canon.png'
import hp1 from '../../images/hp.png'

import BrandCard from './BrandCard'

const BrandFeature = ({title, btntitle}) => {
  return (
    <Container>
        <Subtitle title={title} btntitle={btntitle} pathText="/allbrand"/>
        <Row className='d-flex justify-content-between' >
          <BrandCard brand={dell1} />
          <BrandCard brand={apple1} />
          <BrandCard brand={lg1} />
          <BrandCard brand={lenovo1} />
          <BrandCard brand={canon1} />
          <BrandCard brand={hp1} />
        </Row>
    </Container>
  )
}

export default BrandFeature;
