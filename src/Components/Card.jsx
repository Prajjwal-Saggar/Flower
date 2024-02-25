import React from "react";
import "../Components/Card.css"


function Card(props) {

  return (
    <div id="cards"  className="w-full min-h-[450px] border-b-[2px] border-[#808080]">
      <img loading="lazy" src={props.image} alt="" />
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[25px] font-gilroy font-[600] tracking-wide">{props.name}</h1>
        <h1 className="text-[20px] font-[500] font-gilroy text-[#808080] mb-[2px]">Price {props.price}$</h1>
      </div>
    </div>
  );
}

export default Card;
