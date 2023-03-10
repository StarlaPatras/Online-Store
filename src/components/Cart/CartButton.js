import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button
      className="flex bg-white justify-between py-2 px-6 rounded-full border-2 border-green-700"
      onClick={addToCart}
    >
      <AiOutlineShoppingCart className="text-3xl cursor-pointer text-green-900" />
      <span className="bg-green-600 text-white rounded-full px-4  text-xl">
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartButton;
