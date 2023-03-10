import React from "react";
import { cartAction } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartItem = (props) => {
  const totalprice = useSelector((state) => state.cart.totalItemPrice);
  const { title, total, price, quantity, id } = props.item;
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartAction.addCartItem({
        id,
        title,
        price,
      })
    );
  };

  const removeItem = () => {
    dispatch(cartAction.removeCartItem(id));
  };
  return (
    <li className="border-2 border-green-700 rounded-md list-none p-3 mt-3">
      <div className="flex justify-between py-3">
        <h3 className="text-2xl">{title}</h3>
        <p className="font-bold text-2xl tracking-widest">${total}</p>
      </div>
      <div className="flex justify-between ">
        <p>x{quantity}</p>
        <div>
          <button
            onClick={addItem}
            className="text-3xl bg-green-600 px-4 py-1 hover:bg-white  hover:border-green-600 hover:text-green-600 rounded-full text-center border-2 border-green-600 mx-3 transition-all"
          >
            +
          </button>
          <button
            onClick={removeItem}
            className="text-3xl bg-green-600 px-4 py-1 hover:bg-white  hover:border-green-600 hover:text-green-600 rounded-full text-center border-2 border-green-600 transition-all"
          >
            -
          </button>
        </div>
        {/* <p>{totalprice}</p> */}
      </div>
    </li>
  );
};

export default CartItem;
