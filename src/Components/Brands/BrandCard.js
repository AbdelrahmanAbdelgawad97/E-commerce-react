import React from 'react'
import { Card, Col } from 'react-bootstrap'

const BrandCard = ({brand}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-2 d-flex justify-content-center">
      <Card className="my-1" style={{width: "100%", height: "151px", borderRadius: "8px", border: "none", backgroundColor: "#fffff"}}>
        <img style={{width: "100%", height: "151px"}} src={brand}/>
      </Card>
    </Col>
  )
}

export default BrandCard
