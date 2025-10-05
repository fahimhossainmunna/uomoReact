import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Container from "../Container";
import Flex from "../Flex";
import flogo from "/src/assets/logo.png";
import Image from "../Image";
import pOne from "/src/assets/payOne.png";
import pTwo from "/src/assets/payTwo.png";
import pThree from "/src/assets/payThree.png";
import pFore from "/src/assets/payFour.png";
import pfive from "/src/assets/payFive.png";

const Footertom = () => {
  return (
    <div className="bg-[#f2f2f2] text-[#222] pt-14 pb-6">
      <Container>
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Image imgSrc={flogo} className="w-[110px] mb-6" />
            <p className="text-[15px] text-gray-600 leading-6">
              1418 River Drive, Suite 35 Cottonhall, CA 96222
              <br />
              United States
            </p>
            <p className="mt-3 text-[15px]">
              <span className="font-medium">sale@uomo.com</span>
              <br />
              <span className="font-medium">+1 246-345-0695</span>
            </p>
            <div className="flex items-center gap-5 mt-6 text-[18px] text-gray-600">
              <FaFacebookF className="hover:text-[#4267B2] cursor-pointer transition-colors duration-300" />
              <FaTwitter className="hover:text-[#1DA1F2] cursor-pointer transition-colors duration-300" />
              <FaInstagram className="hover:text-[#E4405F] cursor-pointer transition-colors duration-300" />
              <FaYoutube className="hover:text-[#FF0000] cursor-pointer transition-colors duration-300" />
              <FaPinterestP className="hover:text-[#E60023] cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-3 text-[16px]">COMPANY</h4>
            <ul className="space-y-2 text-gray-600 text-[15px]">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Affiliates</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="font-semibold mb-3 text-[16px]">SHOP</h4>
            <ul className="space-y-2 text-gray-600 text-[15px]">
              <li className="hover:text-black cursor-pointer">New Arrivals</li>
              <li className="hover:text-black cursor-pointer">Accessories</li>
              <li className="hover:text-black cursor-pointer">Men</li>
              <li className="hover:text-black cursor-pointer">Women</li>
              <li className="hover:text-black cursor-pointer">Shop All</li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h4 className="font-semibold mb-3 text-[16px]">SUBSCRIBE</h4>
            <p className="text-[15px] text-gray-600 leading-6 mb-4">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="flex items-stretch">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
              />
              <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition-all">
                JOIN
              </button>
            </div>
            <p className="mt-5 text-[18px] font-semibold">Secure payments</p>
            <div className="flex gap-3 mt-2">
              <Image imgSrc={pOne} className="w-[60px]" />
              <Image imgSrc={pTwo} className="w-[60px]" />
              <Image imgSrc={pThree} className="w-[40px]" />
              <Image imgSrc={pFore} className="w-[40px]" />
              <Image imgSrc={pfive} className="w-[40px]" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-[14px] text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>©2020 Uomo</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span className="text-gray-400">Language:</span>
            <span>United Kingdom | English</span>
            <span className="text-gray-400">| Currency:</span>
            <span>$ USD</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footertom;
