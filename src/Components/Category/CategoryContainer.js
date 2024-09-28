import React from 'react'
import Subtitle from '../Utility/Subtitle'
import { Container, Row } from 'react-bootstrap'
import CategoryCart from '../Category/CategoryCart'
import photo from '../../images/HomeAppliances.webp' 
import photo2 from '../../images/Computer-Hardware.jpg' 
import photo3 from '../../images/clothes.jpg' 
import photo4 from '../../images/phones.jpg'  
import photo5 from '../../images/glaces.webp'  


const CategoryContainer = () => {
  return (
    <Container style={{minHeight: ''}}>
    <div className='admin-content-text mt-3'>Category</div>
    <Row className='d-flex justify-content-between' >
      <CategoryCart title={"Home Appliances"} background="#F4dbaa" img={photo}/>
      <CategoryCart title={"Computer-Hardware"} background="#0034ff" img={photo2}/>
      <CategoryCart title={"Clothes"} background="#F4dbaa" img={photo3}/>
      <CategoryCart title={"Phones"} background="#ff6262" img={photo4}/>
      <CategoryCart title={"Glases"} background="#F4dbaa" img={photo5}/>
    </Row>
    <Row className='d-flex justify-content-between' >
      <CategoryCart title={"Home Appliances"} background="#F4dbaa" img={photo}/>
      <CategoryCart title={"Computer-Hardware"} background="#0034ff" img={photo2}/>
      <CategoryCart title={"Clothes"} background="#F4dbaa" img={photo3}/>
      <CategoryCart title={"Phones"} background="#ff6262" img={photo4}/>
      <CategoryCart title={"Glases"} background="#F4dbaa" img={photo5}/>
    </Row>
    </Container>
  )
}

export default CategoryContainer
