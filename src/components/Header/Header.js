import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <>
      <nav className=" text-gray-500 border-b-2 border-b-green-700 py-6 flex items-center justify-around   w-full mb-7">
        <h1 className="text-green-700 text-3xl font-bold">Online Store</h1>
        <ul className=" flex">
          <li className="mx-5 font-bold text-xl tracking-widest hover:text-green-800">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-5 font-bold text-xl tracking-widest hover:text-green-800">
            <NavLink to="/heels">Heels</NavLink>
          </li>
          <li className="mx-5 font-bold text-xl tracking-widest  hover:text-green-800  ">
            <NavLink to="/dresses">Dresses</NavLink>
          </li>

          <li className="mx-5 font-bold text-xl tracking-widest  hover:text-green-800 ">
            <NavLink to="/fashion">Fashion</NavLink>
          </li>

          <li className="mx-5 font-bold text-xl tracking-widest hover:text-green-800   ">
            <NavLink to="/shoes">Shoes</NavLink>
          </li>

          <li className="mx-5 font-bold text-xl tracking-widest  hover:text-green-800  ">
            <NavLink to="/shorts">Shorts</NavLink>
          </li>
        </ul>

        <CartButton />
      </nav>
    </>
  );
};

export default Header;
