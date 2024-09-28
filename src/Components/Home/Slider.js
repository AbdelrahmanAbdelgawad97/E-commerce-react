import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../images/slider-1.jpg"
import image2 from "../../images/slider-2.jpg"
import image3 from "../../images/slider3.jpg"

const Slider = () => {
  return (
    <div>
       <Carousel data-bs-theme="dark">

      <Carousel.Item>
        <img
          className="d-block w-100 dicount-img"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption className=''>
          <h5 className='slider-title'>There is a discount</h5>
          <p className='slider-text'>Discount reachs to 50%</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 dicount-img"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='slider-title'>There is a discount</h5>
          <p className='slider-text'>Discount reachs to 50%</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 dicount-img"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='slider-title'>There is a discount</h5>
          <p className='slider-text'>Discount reachs to 50%</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  )
}

export default Slider
