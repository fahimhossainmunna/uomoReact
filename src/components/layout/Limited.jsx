import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import band from '/src/assets/band.png'
import cap from '/src/assets/cap.png'
import bag from '/src/assets/bagg.png'
import balt from '/src/assets/belt.png'

const Limited = () => {
  return (
   <>
   <div className="pb-[60px]">
    <div className="flex items-center justify-center">
        <h3 className='text-[35px] text-[#222222]'>LIMITED  <span className='font-bold text-[35px] text-[#222222]'>EDITION</span></h3>
    </div>
    <Container>
        <Flex>
            <div className="flex items-center gap-x-5 mt-[50px]">
                <Product productImg={band} title={"Hub Accent Mirror"} price={"$29"}/>
                <Product productImg={cap} title={"Hosking Blue Area Rug"} price={"$62"}/>
                <Product productImg={bag} title={"Hanneman Pouf"} price={"$17"}/>
                <Product productImg={balt} title={"Cushion Futon Slipcover"} price={"$99"}/>
            </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Limited