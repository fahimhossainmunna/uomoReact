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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Left - Women */}
              <div className="w-full lg:w-[49%]">
                <Image imgSrc={women} className="w-full" />
              </div>

              {/* Right - Men + Kids + Card */}
              <div className="w-full lg:w-[49%] flex flex-col gap-6">
                <Image imgSrc={men} className="w-full" />
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Image imgSrc={kids} className="w-full sm:w-[49%]" />
                  <Image imgSrc={card} className="w-full sm:w-[49%]" />
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
