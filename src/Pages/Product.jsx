import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from "../assets/Menu.svg";
import HamMenu from "../Components/HamMenu";
import Shopping from "../assets/Shopping.svg";
import ProductThird from "../Components/ProductThird";
import data from "../assets/data";
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import ContactUs from "../Components/ContactUs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ product, quantity , setQuantity , item ,price ,order , setPrice }) {
  const [menu, setMenu] = useState(false);
  function hamburgerHandler() {
    setMenu((prev) => !prev);
  }
  let [count, setCount] = useState(0);
  function subHandler() {
    if (count > 0) {
      setCount((count = count - 1));
    }
  }
  function addHandler() {
    setCount((count = count + 1));
  }
  return (
    <div>
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
        <Link to="/Pages/Cart">
          {" "}
          <div className="w-[48px] h-[48px] p-[12px] border-s-[1px] border-black ">
            <img src={Shopping} alt="" />
          </div>
        </Link>
      </nav>
      {menu == true ? (
        <HamMenu setMenu={setMenu}></HamMenu>
      ) : (
        <ProductThird image={data[product].image}></ProductThird>
      )}
      <div className="pt-[40px]  pl-[16px] pr-[16px] pb-[16px]">
        <h1 className="text-[19px] font-[500] font-gilroy mb-[24px]">
          Bouquets Fresh Flowers / Quick Order
        </h1>
        <h1 className="font-[600] font-gilroy text-[28px] mb-[16px]">
          {data[product].name} - $ {data[product].price}
        </h1>
        <p className="font-[400] font-gilroy text-[18px]  mb-[24px]">
          Large exceptional bouquet composed of a selection of David Austin
          roses, known for their beauty and subtle fragrance. The bouquet is
          accompanied by seasonal foliage which will enhance these sublime
          flowers even
        </p>
        <div className="h-[85px] flex flex-col gap-[16px]">
          <h1 className="font-[600] font-gilroy text-[20px]">Quantity</h1>
          <div className="flex border-black border-[2px] h-[44px]  justify-between">
            <div
              onClick={subHandler}
              className="h-full w-[44px] border-e-[2px] border-black font-gilroy flex justify-center items-center text-[40px]"
            >
              <RiSubtractLine />
            </div>
            <div className="h-full text-[30px] font-gilroy flex justify-center items-center">
              {count}
            </div>
            <div
              onClick={addHandler}
              className="h-full border-s-[2px] border-black w-[44px] font-gilroy flex justify-center items-center text-[40px]"
            >
              <IoMdAdd />
            </div>
          </div>
        </div>
        <div onClick={()=>{
            if(count!=0){
              item.push(data[product]);
              price.push((data[product].price)*count);
              order.push({
                product: data[product].name,
                quantity: count,
                totalPrice: (data[product].price) * count,
                image:data[product].image
              });
              setQuantity(count);
            }
             
             toast.success("Item Added To Cart");
            
            
          }} className="bg-black h-[44px] mt-[16px] flex justify-center items-center ">
          <div  className=" text-white text-[14px] font-gilroy tracking-widest ">
            ADD TO BASKET
          </div>
        </div>
      </div>
      <ContactUs></ContactUs>
      <ToastContainer />
    </div>

  );
}

export default Product;
