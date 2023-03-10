import React, { useState } from "react";
import data from "../data/product";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartAction } from "../components/store/cart-slice";

const Product = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(data);

  return (
    <>
      <h1 className="text-center py-5 text-4xl font-bold pt-10">
        Feature Products
      </h1>
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 2xl:px-20">
        {items.map((item) => {
          const { id, image, title, desc, category, type, price } = item;

          return (
            <div key={id} className="bg-gray-200 rounded-lg">
              <img src={image} alt="title" className="rounded-t-lg w-full" />
              <div className="p-5">
                <div className="flex justify-between pt-2">
                  <h2 className="font-bold  text-2xl ">{title}</h2>
                  <BsHeart
                    title="add to whishlist"
                    className="cursor-pointer "
                  />
                </div>
                <p className="py-2 text-lg">{desc}</p>
                <div className="flex gap-4 py-2">
                  <small className="border-green-700 border-2 py-2 px-4 rounded-lg tracking-widest ">
                    {category}
                  </small>
                  <small className="border-green-700 border-2 py-2 px-4 rounded-lg tracking-widest">
                    {type}
                  </small>
                </div>
                <p className="py-2 font-bold text-2xl tracking-widest">
                  ${price}
                </p>
                <button
                  onClick={() =>
                    dispatch(
                      cartAction.addCartItem({
                        id,
                        title,
                        price,
                      })
                    )
                  }
                  className="bg-green-400 py-4 px-6 rounded-lg font-bold text-2xl text-gray-800 "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Product;
