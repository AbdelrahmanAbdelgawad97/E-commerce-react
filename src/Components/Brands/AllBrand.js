import React from 'react'
import { Container, Row } from 'react-bootstrap'

import dell1 from '../../images/brandDell.jpg'
import apple1 from '../../images/appleBrand.png'
import lg1 from '../../images/LGBrand.png'
import lenovo1 from '../../images/lenovo.png'
import canon1 from '../../images/canon.png'
import hp1 from '../../images/hp.png'

import BrandCard from './BrandCard'
import Pagination from '../Utility/Pagination'

const AllBrand = () => {
  return (
    <Container style={{minHeight: "600px"}}>
        <div className='admin-content-text mt-3'>All Brands</div>
        <Row className='d-flex justify-content-between' >
          <BrandCard brand={dell1} />
          <BrandCard brand={apple1} />
          <BrandCard brand={lg1} />
          <BrandCard brand={lenovo1} />
          <BrandCard brand={canon1} />
          <BrandCard brand={hp1} />
        </Row>
        <Row className='d-flex justify-content-between' >
          <BrandCard brand={dell1} />
          <BrandCard brand={apple1} />
          <BrandCard brand={lg1} />
          <BrandCard brand={lenovo1} />
          <BrandCard brand={canon1} />
          <BrandCard brand={hp1} />
        </Row>
        <Pagination />
    </Container>
  )
}

export default AllBrand
