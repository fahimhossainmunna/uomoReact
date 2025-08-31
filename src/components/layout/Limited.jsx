import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import band from '/src/assets/band.png'
import cap from '/src/assets/cap.png'
import bag from '/src/assets/bagg.png'
import balt from '/src/assets/belt.png'


// ==============
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// ==============

const Limited = () => {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
   <>
   <div className="pb-[60px]">
    <div className="flex items-center justify-center">
        <h3 className='text-[35px] text-[#222222]'>LIMITED  <span className='font-bold text-[35px] text-[#222222]'>EDITION</span></h3>
    </div>
    <Container>
        <div className="mt-[50px]">
            <Slider {...settings}>
      <div>
      <Product productImg={band} title={"Hub Accent Mirror"} price={"$29"}/>
      </div>
      <div>
        <Product productImg={cap} title={"Hosking Blue Area Rug"} price={"$62"}/>
      </div>
      <div>
           <Product productImg={bag} title={"Hanneman Pouf"} price={"$17"}/>
      </div>
      <div>
         <Product productImg={balt} title={"Cushion Futon Slipcover"} price={"$99"}/>
      </div>
      <div>
         <Product productImg={band} title={"Hub Accent Mirror"} price={"$29"}/>
      </div>
      <div>
          <Product productImg={bag} title={"Hanneman Pouf"} price={"$17"}/>
      </div>
    </Slider>
        </div>
        
       
    </Container>
   </div>
   </>
  )
}

export default Limited