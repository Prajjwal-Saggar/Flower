import React from "react";
import "../Components/Card.css"


// function Card(props) {

//   return (
//     <div id="cards"  className="w-full min-h-[450px] border-b-[2px] border-[#808080]">
//       <img className="w-full h-full object-cover" loading="lazy" src={props.image} alt="" />
//       <div className="flex justify-center flex-col items-center">
//         <h1 className="text-[25px] font-gilroy font-[600] tracking-wide">{props.name}</h1>
//         <h1 className="text-[20px] font-[500] font-gilroy text-[#808080] mb-[2px]">Price {props.price}$</h1>
//       </div>
//     </div>
//   );
// }

// export default Card;


function Card(props) {
  return (
    <div className="w-[180px] h-[300px] border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="h-[200px] overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={props.image} 
          alt={props.name} 
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h2 className="text-sm font-medium text-gray-900 truncate">{props.name}</h2>
        <p className="mt-1 text-lg font-semibold text-gray-900">${props.price}</p>
      </div>
    </div>
  );
}

export default Card;

