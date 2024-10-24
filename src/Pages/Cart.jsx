import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Menu from "../assets/Menu.svg";
import HamMenu from "../Components/HamMenu";
import Shopping from "../assets/Shopping.svg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Carting from "../Components/Carting";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart({ item ,setItem , setPrice, setQuantity, quantity  , price  , order}) {

  const handleOrder = () => {
    if (item.length > 0) {
      setItem([]);
      setPrice([]);
      setQuantity(0);
      toast.success("Order Placed 😊");
    } else {
      toast.error("Your cart is empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  function totalCost(){
   let total = 0
   for(let i = 0 ; i<price.length ; i++){
    total += price[i];
   }
     
   return total;
  }

 let final  = totalCost();

  const [menu, setMenu] = useState(false);
  function hamburgerHandler() {
    setMenu((prev) => !prev);
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
        <div className="pt-[24px] pb-[24px] pr-[16px] pl-[16px]">
          <div className="flex gap-[8px]  items-center">
            <FaCartPlus />
            <h1 className="text-[16px] font-gilroy font-[500]">
              Order Summary
            </h1>
          </div>
          <div>
            {item.map((item , index ) => {
              return (
                <Carting
                key  = {index}
                  quantity={quantity}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                ></Carting>
              );
            })}
          </div>
          <div>
            <div className="h-[92px] mb-[16px]  font-gilroy text-[16px] font-[500] border-b-[1px]">
              <div className="flex justify-between mb-[24px]">
                <div>Subtotal</div>
                <div>${final}</div>
              </div>
              <div className="flex justify-between mb-[24px]">
                <div>Shipping</div>
                <div className="text-[#808080]">Calculated at next step</div>
              </div>
            </div>

            <div className="h-[25px]  font-gilroy text-[16px] font-[500] ">
              <div className="flex justify-between ">
                <div>Total</div>
                <div>${final}</div>
              </div>
            </div>
          </div>
          {
            item.length > 0 && (  <button onClick={handleOrder} className="w-full mt-6 py-2 bg-black text-white font-gilroy font-[500] hover:bg-white hover:text-black border border-black transition-colors duration-300">
              Place Order
            </button>)
             
            
          }
        </div>
      )}
      <ToastContainer/>
    </div>
  );
}

export default Cart;
