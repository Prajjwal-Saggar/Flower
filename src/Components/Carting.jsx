import React from "react";

function Carting(props) {
  return (
    <div className="mb-[15px]">
      <div className="border-b-[1px] ">
        <div className="w-[160px] min-h-[160px] mb-[16px]">
        <img src={props.image} alt="" /></div>
        <div className="flex justify-between mb-[8px]"><h1 className="font-gilroy font-[600] text-[18px]">{props.name}</h1>
        <h1 className="font-gilroy font-[600] text-[18px]">${props.price}</h1></div>
        <h1 className="font-[500] text-[14px] mb-[24px] font-gilroy tracking-wide">Quantity({props.quantity})</h1>
      </div>
    </div>
  );
}

export default Carting;
