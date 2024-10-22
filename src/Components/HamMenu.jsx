import React from 'react'
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Pinterest from "../assets/Pinterest.png";
import Twitter from "../assets/Twitter.png";
import Telegram from "../assets/Telegram.png";
import {Link} from "react-router-dom";


function Menu(props) {
  return (
   <> <div className="  bg-white border-2 absolute z-20 w-full ">
   <Link to="/"><div  onClick={()=>{props.setMenu(false)}} className="w-full h-[70px] border-black border-b-[1px]  text-[25px] text-black   font-gilroy font-[500] p-[24px] leading-[21.6px]">
     Home
   </div>
   </Link>
   <Link to="../Pages/Category/">
   <div className="w-full h-[70px] border-black border-b-[1px]   text-[25px] text-black   font-gilroy font-[500] p-[24px] leading-[21.6px]">
     Shop
   </div>
   </Link>
   <div className="w-full h-[70px] border-black border-b-[1px]   text-[25px] text-black   font-gilroy font-[500] p-[24px] leading-[21.6px]">
     Service
   </div>
   <a href='#contact'  >
   <div onClick={()=>{props.setMenu(false)}} className="w-full h-[70px] border-black border-b-[1px]      text-[25px] text-black   font-gilroy font-[500] p-[24px] leading-[21.6px]">
     Contact
   </div>
   </a>
   
   <a href='#about'>
   <div onClick={()=>{props.setMenu(false)}} className="w-full h-[70px] border-black border-b-[1px]  text-[25px] text-black   font-gilroy font-[500] p-[24px] leading-[21.6px]">
     About Us
   </div>
   </a>

   <Link to="/Auth/Admin">
   <div className="w-full h-[70px] border-black border-b-[1px]  text-[25px] text-black   font-gilroy font-[500] p-[24px] leading-[21.6px]">
     Admin
   </div>
   </Link>

   <div className="w-full h-[131px] p-[24px] border-black border-b-[1px] text-[16.5px] flex flex-col justify-around font-[500] font-gilroy ">
     <div>Shipping & returns</div>
     <div>Terms & conditions</div>
     <div>Privacy policy</div>
   </div>
   <div className="w-full p-[24px] h-[70px]   flex justify-around border-black border-b-[1px] ">
     <div>
       <img  src={Instagram} alt="" />
     </div>
     <div><img src={Pinterest} alt="" /></div>
     <div><img src={Facebook} alt="" /></div>
     <div><img src={Twitter} alt="" /></div>
     <div><img src={Telegram} alt="" /></div>
   </div>
 </div></>
  )
}

export default Menu
