import React from "react";
import Container from "../Container";
import Image from "../Image";
import Product from "../Product";
import ione from "/src/assets/iOne.png";
import itww from "/src/assets/iTwo.png";
import ithree from "/src/assets/ithree.png";
import ifore from "/src/assets/ifore.png";
import ifive from "/src/assets/ifive.png";
import isix from "/src/assets/isix.png";
import iseven from "/src/assets/iseven.png";
import ieight from "/src/assets/ieight.png";

// ===============
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// ===============

const Trendy = () => {
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
      <div className="py-[50px]">
        <Container>
          <h1 className="text-[35px] text-center">
            OUR TRENDY <span className="font-bold text-[35px]">PRODUCTS</span>
          </h1>
          <ul className="flex items-center justify-center gap-x-10 ] mt-5">
            <li
              className="text-[16px] font-medium text-[#767676] hover:font-semibold
        hover:text-[#222222] duration-500"
            >
              ALL
            </li>
            <li
              className="text-[16px] font-medium text-[#767676] hover:font-semibold
        hover:text-[#222222] duration-500"
            >
              NEWARRIVALS
            </li>
            <li
              className="text-[16px] font-medium text-[#767676] hover:font-semibold
        hover:text-[#222222] duration-500"
            >
              BEST SELLER
            </li>
            <li
              className="text-[16px] font-medium text-[#767676] hover:font-semibold
        hover:text-[#222222] duration-500"
            >
              TOP RATING
            </li>
          </ul>

          {/* =========== */}
          <div className="-mx-3 py-8">
            <Slider {...settings}>
              <div>
                <Product
                  productImg={ione}
                  title={"Cropped Faux Leather Jacket"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={itww}
                  title={"Calvin Shorts"}
                  price={"$62"}
                />
              </div>
              <div>
                <Product
                  productImg={ithree}
                  title={"Kirby T-Shirt"}
                  price={"$17"}
                />
              </div>
              <div>
                <Product
                  productImg={ifore}
                  title={"Cableknit Shawl"}
                  price={"$99"}
                />
              </div>
              <div>
                <Product
                  productImg={ione}
                  title={"Cropped Faux Leather Jacket"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={ithree}
                  title={"Kirby T-Shirt"}
                  price={"$17"}
                />
              </div>
            </Slider>
          </div>
          {/* =========== */}
          <div className="-mx-3 py-8">
            <Slider {...settings}>
              <div>
                <Product
                  productImg={ifive}
                  title={"Colorful Jacket"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={isix}
                  title={"Shirt In Botanical Cheetah Print"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={iseven}
                  title={"Cotton Jersey T-Shirt"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={ieight}
                  title={"Zessi Dresses"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={isix}
                  title={"Shirt In Botanical Cheetah Print"}
                  price={"$29"}
                />
              </div>
              <div>
                <Product
                  productImg={ieight}
                  title={"Zessi Dresses"}
                  price={"$29"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Trendy;
