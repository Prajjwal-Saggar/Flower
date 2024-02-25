import React from "react";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Pinterest from "../assets/Pinterest.png";
import Twitter from "../assets/Twitter.png";
import Telegram from "../assets/Telegram.png";

function ContactUs() {

  return (
    <div className=" border-t-[1px] border-black w-full h-[354px] pt-[40px] pb-[40px] pr-[16px] pl-[16px] mb-[10px]">
      <div className=" flex flex-col gap-[16px]">
        <div>
          <h1 className="font-gilroy text-[20px] font-[500] text-[#808080]">
            Contact Us
          </h1>
        </div>
        <div  className="flex flex-col gap-[8px]">
          <h1 className="font-[400] text-[14px] font-gilroy text-[#808080]">
            Address
          </h1>
          <h1 className="text-[14px] font-[400] font-gilroy tracking-wide">
            15/4 Khreshchatyk Street, Kyiv{" "}
          </h1>
        </div>
        <div  className="flex flex-col gap-[8px]">
          <h1 className="font-[400] text-[14px] font-gilroy text-[#808080]">
            Phone
          </h1>
          <h1 className="text-[14px] font-[400] font-gilroy tracking-wide">
            +380980099777
          </h1>
        </div>
        <div  className="flex flex-col gap-[8px]">
          <h1 className="font-[400] text-[14px] font-gilroy text-[#808080]">
            General Enquiry:
          </h1>
          <h1 className="text-[14px] font-[400] font-gilroy tracking-wide">
            Kiev.Florist.Studio@gmail.com
          </h1>
        </div>
        <div  className="flex flex-col gap-[8px]">
          <h1 className="font-gilroy text-[20px] font-[500] text-[#808080]">
            Follow Us
          </h1>
          <div className="flex gap-[32px]">
            <div>
              <img src={Instagram} alt="" />
            </div>
            <div>
              <img src={Pinterest} alt="" />
            </div>
            <div>
              <img src={Facebook} alt="" />
            </div>
            <div>
              <img src={Twitter} alt="" />
            </div>
            <div>
              <img src={Telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
