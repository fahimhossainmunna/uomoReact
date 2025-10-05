import React, { useState, useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  // ======= Scroll logic =======
  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolling
            ? "bg-white shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="p-4 md:p-5">
          <Container>
            <Flex className="justify-between items-center">
              {/* ===== Logo ===== */}
              <div>
                <Image imgSrc={logo} className="w-[100px] md:w-[130px]" />
              </div>

              {/* ===== Nav Menu (Desktop) ===== */}
              <div className="hidden md:block">
                <ul className="flex items-center gap-x-8 relative">
                  <Link to="/">
                    <li className="text-[14px] text-[#222] font-medium hover:text-[#ff6600] duration-300">
                      HOME
                    </li>
                  </Link>

                  {/* ===== SHOP (Dropdown) ===== */}
                  <li
                    className="relative text-[14px] text-[#222] font-medium hover:text-[#ff6600] duration-300 cursor-pointer group"
                    onMouseEnter={() => setShopOpen(true)}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    SHOP ▾
                    <AnimatePresence>
                      {shopOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-[30px] left-0 bg-white text-[#222] shadow-lg rounded-md w-[180px] p-3 flex flex-col gap-2 z-50"
                        >
                          <Link to="/shop/new-arrivals">
                            <li className="hover:text-[#ff6600] duration-200">
                              New Arrivals
                            </li>
                          </Link>
                          <Link to="/shop/men">
                            <li className="hover:text-[#ff6600] duration-200">
                              Men
                            </li>
                          </Link>
                          <Link to="/shop/women">
                            <li className="hover:text-[#ff6600] duration-200">
                              Women
                            </li>
                          </Link>
                          <Link to="/shop/accessories">
                            <li className="hover:text-[#ff6600] duration-200">
                              Accessories
                            </li>
                          </Link>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <Link to="/collection">
                    <li className="text-[14px] text-[#222] font-medium hover:text-[#ff6600] duration-300">
                      COLLECTION
                    </li>
                  </Link>
                  <Link to="/journal">
                    <li className="text-[14px] text-[#222] font-medium hover:text-[#ff6600] duration-300">
                      JOURNAL
                    </li>
                  </Link>
                  <Link to="/lookbook">
                    <li className="text-[14px] text-[#222] font-medium hover:text-[#ff6600] duration-300">
                      LOOKBOOK
                    </li>
                  </Link>
                  <Link to="/page">
                    <li className="text-[14px] text-[#222] font-medium hover:text-[#ff6600] duration-300">
                      PAGES
                    </li>
                  </Link>
                </ul>
              </div>

              {/* ===== Icons & Menu Toggle ===== */}
              <div className="flex items-center gap-x-4 md:gap-x-5 text-2xl md:text-3xl">
                <CiSearch className="cursor-pointer hover:text-[#ff6600] duration-200" />
                <CiUser className="cursor-pointer hover:text-[#ff6600] duration-200" />
                <CiHeart className="cursor-pointer hover:text-[#ff6600] duration-200" />
                <RiShoppingBagLine className="cursor-pointer hover:text-[#ff6600] duration-200" />
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden text-3xl"
                >
                  <FaBarsStaggered />
                </button>
              </div>
            </Flex>
          </Container>
        </div>

        {/* ===== Mobile Menu ===== */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-[80px] w-full bg-[#3C2920] text-white shadow-lg rounded-b-lg p-6 z-50 md:hidden"
            >
              <ul className="flex flex-col gap-4 text-lg text-center">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <li>Home</li>
                </Link>

                {/* SHOP dropdown in mobile */}
                <li
                  onClick={() => setShopOpen(!shopOpen)}
                  className="cursor-pointer"
                >
                  Shop ▾
                  {shopOpen && (
                    <ul className="mt-2 bg-[#4d372f] rounded-md p-3 flex flex-col gap-2">
                      <Link to="/shop/new-arrivals">
                        <li>New Arrivals</li>
                      </Link>
                      <Link to="/shop/men">
                        <li>Men</li>
                      </Link>
                      <Link to="/shop/women">
                        <li>Women</li>
                      </Link>
                      <Link to="/shop/accessories">
                        <li>Accessories</li>
                      </Link>
                    </ul>
                  )}
                </li>

                <Link to="/collection" onClick={() => setMenuOpen(false)}>
                  <li>Collection</li>
                </Link>
                <Link to="/journal" onClick={() => setMenuOpen(false)}>
                  <li>Journal</li>
                </Link>
                <Link to="/lookbook" onClick={() => setMenuOpen(false)}>
                  <li>Lookbook</li>
                </Link>
                <Link to="/page" onClick={() => setMenuOpen(false)}>
                  <li>Pages</li>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Spacer */}
      <div className="h-[90px] md:h-[100px]"></div>
    </>
  );
};

export default Header;
