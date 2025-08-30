import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import women from "/src/assets/wOne.png"
import men from "/src/assets/mONe.png"
import kids from "/src/assets/kOne.png"
import card from "/src/assets/eCard.png"




// =================

const Cetagory = () => {
  return (
   <>
   <div className="py-[100px]">

   <Container>
    <Flex>
        <div className="flex items-center justify-between">
            <div className="w-[49%]">
                <Image imgSrc={women} className={'w-full'}/>
            </div>
            <div className="w-[49%]">
                <Image imgSrc={men}/>
                <div className="w-[49%] flex items-center justify-between gap-x-6 mt-6">
                      <Image imgSrc={kids}/>
                      <Image imgSrc={card}/>
                    
                </div>
            </div>
        </div>
    </Flex>
   </Container>
   </div>
   </>
  )
}

export default Cetagory