import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/Utility/SideFilter'
import CardProductComponents from '../../Components/Products/CardProductComponents'
import Pagination from '../../Components/Utility/Pagination'
const ShopProductPage = () => {
  return (
    <div style={{minHeight: "610px"}}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="Search Results Are 600..." />
        <Row className='d-flex flex-row'>
            <Col xs="2" sm="2" md="1" className='d-flex'>
                <SideFilter />
            </Col>
            
            <Col xs="10" sm="10" md="11">
                <CardProductComponents />
            </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  )
}

export default ShopProductPage
