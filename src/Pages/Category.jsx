import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Menu.svg";
import Shopping from "../assets/Shopping.svg";
import HamMenu from "../Components/HamMenu";
import First from "../Components/First";
import { IoMdClose } from "react-icons/io";
import Card from "../Components/Card";
import Second from "../Components/Second";
import data from "../assets/data";
import ContactUs from "../Components/ContactUs";

function Category({ setProduct }) {
  // console.log(data);

  const [menu, setMenu] = useState(false);
  function hamburgerHandler() {
    setMenu((prev) => !prev);
  }
  return (
    <div className="w-full min-h-screen ">
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
          <div className="w-[48px] h-[48px] p-[12px] border-s-[1px] border-black ">
            <img src={Shopping} alt="" />
          </div>
        </Link>
      </nav>
      {menu == true ? <HamMenu setMenu={setMenu}></HamMenu> : <Second></Second>}
      <div>
        {data.map((items) => {
          return (
            <Link
              onClick={() => {
                console.log(items.id);
                setProduct(items.id);
              }}
              key={items.id}
              to="../Pages/Product"
            >
              <Card
                image={items.image}
                name={items.name}
                price={items.price}
                id={items.id}
              ></Card>
            </Link>
          );
        })}
      </div>
      <div id="contact">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
}

export default Category;
