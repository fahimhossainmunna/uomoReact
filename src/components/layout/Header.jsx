import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";


// ==============


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
             <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaBarsStaggered />
            </button>
              
            </div>
          </Flex>
            <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}   // suru te transparent + upore
            animate={{ opacity: 1, y: 0 }}     // open hobe niche namte namte
            exit={{ opacity: 0, y: -20 }}      // close korle abar upore uthe jabe
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-5 mt-3 w-48 bg-[#3C2920] text-white shadow-lg rounded-lg p-4 z-50"
          >
            <ul className="flex flex-col gap-3 text-lg">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="collection">Collection</Link>
              </li>
              <li>
                <Link to="/journal">Jornal</Link>
              </li>
              <li>
                <Link to="/lookbook">Lookbook</Link>
              </li>
              <li>
                <Link to="/page">Pages</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
        </Container>
        
      </div>
    </>
  );
};

export default Header;
