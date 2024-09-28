import React from 'react'
import NavBarLogin from '../../Components/Utility/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductComponents from '../../Components/Products/CardProductComponents'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeature from '../../Components/Brands/BrandFeature'
import Footer from '../../Components/Utility/Footer'
const HomePage = () => {
  return (
    <div className='font' style={{minHeight: '670px'}}>
      
      <Slider />
      <HomeCategory />
      <CardProductComponents title="Best Seller" btntitle="Show More"/>
      <CardProductComponents title="Higher Rate" btntitle="Show More"/>
      <DiscountSection />
      <CardProductComponents title="Latest Fashion" btntitle="Show More"/>
      
      <BrandFeature  title="Brands" btntitle="Show More"/>
      
    </div>
  )
}

export default HomePage;