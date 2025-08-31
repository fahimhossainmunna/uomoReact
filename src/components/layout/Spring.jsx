import React from 'react'
import Container from '../Container'
import Image from '../Image'
import dateandtime from '/src/assets/datesnd.jpg'
import womenOnee from '/src/assets/woOne.png'
import menOne from '/src/assets/mennTwo.png'


const Spring = () => {
  return (
   <>
   <div className="py-[100px]">
   <Image imgSrc={dateandtime}/>
   <Container>
    <div className="flex w-[50%] items-center mt-[70px] gap-x-5">
        <Image imgSrc={womenOnee}/>
        <Image imgSrc={menOne}/>
    </div>
   </Container>
   </div>
   </>
  )
}

export default Spring