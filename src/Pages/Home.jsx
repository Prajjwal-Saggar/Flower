import React, { useState } from "react";
import Menu from "../assets/Menu.svg";
import Shopping from "../assets/Shopping.svg";
import { Link, NavLink } from "react-router-dom";
import UpperF from "../assets/UpperF.png";
import LowerF from "../assets/LowerF.png";
import Category from "./Category";
import HamMenu from "../Components/HamMenu";
import First from "../Components/First";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import ContactUs from "../Components/ContactUs";

function Home() {
  const [menu, setMenu] = useState(false);
  function hamburgerHandler() {
    setMenu((prev) => !prev);
    
  }
  return (
    <div id="wrapper">
      <nav className="w-[100%] h-[48.5px] border-black border-[1px]  flex justify-between">
        <div
          onClick={hamburgerHandler}
          className="w-[48px] h-[48px] p-[12px] border-e-[1px] border-black flex justify-center items-center "
        >
          {menu == true ? (
            <IoMdClose className="text-[32px]"></IoMdClose>
          ) : (
            <img className="text-black" src={Menu} />
          )}
        </div>
      <Link to="./Pages/Cart"> <div  className="w-[48px] h-[48px] p-[12px] border-s-[1px] border-black ">
          <img src={Shopping} alt="" />
        </div>
        </Link>
      </nav>
      {menu == true ? <HamMenu setMenu={setMenu}></HamMenu> : <First></First>}

      {/* yahan se component cut liya hai  */}
      <div className="w-[100%] h-[400px] border-black border-[1px]">
        <div className="w-full h-[200px] flex">
          <div className="w-[50%] h-full  border-t-[1px] border-black border-b-[1px] flex justify-center items-center p-[12px] flex-col ">
            <h1 className="font-gilroy font-[500] text-[26px] leading-[31.2px] mb-[51px]">
              Fresh Flowers
            </h1>
            <Link to="/Pages/Category">
              <button className="font-gilroy font-[600] text-[14px] flex items-center justify-center tracking-[2.5%] leading-[16.8px]">
                Shop Now{" "}
                <GoArrowRight className="w-[24px] h-[24px]"></GoArrowRight>
              </button>
            </Link>
          </div>
          <div className="w-[50%] h-full border-t-[1px] border-black ">
            <div>
              <img className="w-full h-[200px]" src={UpperF} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] flex ">
          <div className="w-[50%] h-[200px] border-black border-t-[1px] border-b-[1px]">
            <img className="w-[100%] h-[200px]" src={LowerF} alt="" />
          </div>
          <div className="w-[50%] h-[200px]  border-black border-s-[1px]  flex justify-center items-center p-[12px] flex-col ">
            <h1 className="font-gilroy font-[500] text-[26px] leading-[31.2px] mb-[51px]">
              Dried Flowers
            </h1>
            <Link  to="/Pages/Category">
            <button className="font-gilroy font-[600] text-[14px] tracking-[2.5%] leading-[16.8px] flex justify-center items-center ">
              <GoArrowLeft className="w-[24px] h-[24px]"></GoArrowLeft>Shop Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section  */}
      <div>
        <div className="w-[100%] border-black border-[1px] h-[121px]  pt-[40px] pb-[40px] pl-[16px] pr-[16px]">
          <h1 className="font-gilroy font-[600] text-[34px] leading-[40.8px]">
            About Us
          </h1>
        </div>
        <div className="w-[100%] h-[607px] pt-[40px] pb-[40px] pl-[16px] pr-[16px] ">
          <div className="h-[415px]  mb-[64px]">
            <div className="mb-[24px] ">
              <h1 className="font-gilroy text-[14px] font-[500]">OUR STORY</h1>
            </div>
            <div className="w-[100%] h-[100%] ">
              <div className="font-[500] mb-[16px] font-gilroy text-[26px]">
                <h1>Kyiv LuxeBouquets</h1>
              </div>
              <div>
                <p className="font-gilroy font-[400] text-[18px] leading-[22.4px]">
                  We are a modern local floral studio, which specializes in the
                  design and delivery of unique bouquets. We have the best
                  florists who carefully select each look, our studio cooperates
                  directly with farms for growing different flowers, so we
                  always have fresh flowers, which are collected by our florists
                  in exquisite bouquets. We have a collection of fresh bouquets,
                  collections of dried bouquets, house plants, as well as
                  fragrant candles from luxury brands to create the perfect
                  atmosphere. Make someone's day amazing by sending flowers,
                  plants and gifts the same or next day. Ordering flowers online
                  has never been easier.
                </p>
              </div>
            </div>
          </div>
          <button className="h-[48px] w-full border-black border-[1px] text-[14px] font-[500] font-gilroy tracking-widest">
            LEARN MORE
          </button>
        </div>
      </div>
      {/* Contact us Section  */}
      <div id="contact" ><ContactUs></ContactUs></div>
    </div>
  );
}

export default Home;
