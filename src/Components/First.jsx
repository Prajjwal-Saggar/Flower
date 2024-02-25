import React from 'react'
import Girl from "../assets/Girl.png";

function First() {
  return (
   <>
    <div className="w-[100%] border-black border-[1px] h-[472px] z-10 pt-[40px] pb-[40px] pl-[16px] pr-[16px]  ">
        <div className="w-[343px] h-[196px] pb-[24px] border-black border-b-[0.83px] font-gilroy">
          <h1 className="text-[40px] font-[600] leading-[48px] mb-[16px]">
            Kyiv LuxeBouquets<sup>®</sup>
          </h1>
          <h1
            className="text-[#121212E5] font-[400] leading-[19.6px] text-[14px];
]"
          >
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our <i>Online Flower Delivery Service</i>
          </h1>
        </div>
        <div className="w-[100%]  flex h-[196px] pt-[16px] pr-[16px]">
          <div>
            <img src={Girl} alt="" />
          </div>
          <div className="w-[171.5px] pl-[16px]  h-[180px] ">
            <div className="h-full w-[171.5px] relative  border-[#121212] border-s-[2px] -">
              <h1 className="absolute font-gilroy font-[400] text-[11px] pl-[5px]  leading-[13.2px] bottom-0 right-0">
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </h1>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default First