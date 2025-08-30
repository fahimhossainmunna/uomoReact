import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";


// ==============
const Header = () => {
  return (
    <>
      <div className="p-5">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image imgSrc={logo} />
            </div>
            <div className="">
              <ul className="flex items-center gap-x-8">
                <Link to={"/"}>
                  <li className="text-[14px] text-[#222222] font-medium leading-[24px] border-b-white hover:border-b hover:border-black duration-300 ">
                    HOME
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="text-[14px] text-[#222222] font-medium leading-[24px] border-b-white hover:border-b hover:border-black duration-300 ">
                    SHOP
                  </li>
                </Link>
                <Link to={"collection"}>
                  <li className="text-[14px] text-[#222222] font-medium leading-[24px] border-b-white hover:border-b hover:border-black duration-300 ">
                    COLLECTION
                  </li>
                </Link>
                <Link to={"journal"}>
                  <li className="text-[14px] text-[#222222] font-medium leading-[24px] border-b-white hover:border-b hover:border-black duration-300 ">
                    JOURNAL
                  </li>
                </Link>
                <Link to={"lookbook"}>
                  <li className="text-[14px] text-[#222222] font-medium leading-[24px] border-b-white hover:border-b hover:border-black duration-300 ">
                    LOOKBOOK
                  </li>
                </Link>

                <Link to={"page"}>
                  <li className="text-[14px] text-[#222222] font-medium leading-[24px] border-b-white hover:border-b hover:border-black duration-300 ">
                    PAGES
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center gap-x-5 text-3xl">
              <CiSearch />
              <CiUser />
              <CiHeart />
              <RiShoppingBagLine />
              <FaBarsStaggered />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
