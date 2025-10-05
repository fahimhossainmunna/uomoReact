import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";

import fone from '/src/assets/fasionOne.jpg'
import fonei from '/src/assets/fashionTwo.jpg'
import foneii from '/src/assets/fashionThree.jpg'
import foneiii from '/src/assets/fashionFour.jpg'
import foneiv from '/src/assets/fashionFive.jpg'
import fonev from '/src/assets/fashionSix.jpg'
import fonevi from '/src/assets/fasionseven.jpg'
import fonevii from '/src/assets/fasionEight.jpg'
import foneviii from '/src/assets/fasionNine.jpg'
import foneix from '/src/assets/fasionTen.jpg'
import fonex from '/src/assets/fashionEleven.jpg'
import fonexi from '/src/assets/fasionTwelev.jpg'

const Uomof = () => {
  return (
    <div className="py-[70px]">
      <div className="flex items-center justify-center mb-10">
        <h3 className="text-[35px] text-[#222]">@UOMO</h3>
      </div>

      <Container>
        <Flex className="flex-col items-center justify-center">
          {/* 1st Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {[fone, fonei, foneii, foneiii, foneiv, fonev].map((img, i) => (
              <div
                key={i}
                className="w-[200px] h-[200px] overflow-hidden rounded-md group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  imgSrc={img}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* 2nd Row */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[fonevi, fonevii, foneviii, foneix, fonex, fonexi].map((img, i) => (
              <div
                key={i}
                className="w-[200px] h-[200px] overflow-hidden rounded-md group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  imgSrc={img}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </Flex>
      </Container>

      {/* ================= Service Section ================= */}
      <div className="py-[80px] bg-white">
        <Container>
          <Flex className="justify-between flex-wrap gap-6 text-center">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center flex-1 min-w-[250px] transition-all duration-300 hover:scale-105 group cursor-pointer shadow-md hover:shadow-xl rounded-xl p-4">
              <FaTruckFast className="text-[45px] text-[#222] mb-3 transition-all duration-300 group-hover:text-[#ff6600]" />
              <h4 className="text-[16px] font-semibold text-[#111] mb-1 transition-colors duration-300 group-hover:text-[#ff6600]">
                FAST AND FREE DELIVERY
              </h4>
              <p className="text-gray-500 text-[14px]">
                Free delivery for all orders over $140
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center flex-1 min-w-[250px] transition-all duration-300 hover:scale-105 group cursor-pointer shadow-md hover:shadow-xl rounded-xl p-4">
              <BiSupport className="text-[45px] text-[#222] mb-3 transition-all duration-300 group-hover:text-[#ff6600]" />
              <h4 className="text-[16px] font-semibold text-[#111] mb-1 transition-colors duration-300 group-hover:text-[#ff6600]">
                24/7 CUSTOMER SUPPORT
              </h4>
              <p className="text-gray-500 text-[14px]">
                Friendly 24/7 customer support
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center flex-1 min-w-[250px] transition-all duration-300 hover:scale-105 group cursor-pointer shadow-md hover:shadow-xl rounded-xl p-4">
              <RiRefund2Line className="text-[45px] text-[#222] mb-3 transition-all duration-300 group-hover:text-[#ff6600]" />
              <h4 className="text-[16px] font-semibold text-[#111] mb-1 transition-colors duration-300 group-hover:text-[#ff6600]">
                MONEY BACK GUARANTEE
              </h4>
              <p className="text-gray-500 text-[14px]">
                We return money within 30 days
              </p>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  )
}

export default Uomof
