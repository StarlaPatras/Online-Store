import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);
  return (
    <div className="max-w-sm  md:max-w-md	 mx-auto  my-9 rounded-md p-4 shadow-[0_3px_15px_rgba(0,0,0,0.2)]">
      <h1 className="text-center text-2xl pb-4">Your shopping Cart</h1>
      {cartItem.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
          }}
        />
      ))}
    </div>
  );
};

export default Cart;
