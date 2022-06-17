import Layout from "../components/Layout";

import { useState, useEffect } from "react";
import BasketItem from "../components/BasketItem.js";

export default function Basket({
  basket,
  setBasket,
  cartTotal,
  setCartTotal,
  sale,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      basket.reduce((acc, product) => {
        if (product.pid.id === sale) {
          return acc + parseFloat(product.totalPrice) * 0.8;
        }
        return acc + parseFloat(product.totalPrice);
      }, 0)
    );
  }, [basket, sale]);

  try {
    return (
      <div className="container flex flex-col m-auto mt-6 p-10 pb-2 gap-10">
        {basket.map((product, index) => {
          return (
            <BasketItem
              product={product}
              basket={basket}
              setBasket={setBasket}
              basketIndex={index}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              key={index}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              sale={sale}
            />
          );
        })}
        <div className="container m-auto p-10 flex flex-col justify-center items-center gap-4">
          <span className="text-4xl">Total price: £{totalPrice}</span>
          <button
            type="submit"
            className="text-2xl bg-purple-200 rounded-full mx-6 p-4 h-15 w-full hover:bg-purple-400"
          >
            💸 Checkout
          </button>
        </div>
      </div>
    );
  } catch {
    return (
      <Layout>
        <h1>Something went wrong with loading this page.</h1>
      </Layout>
    );
  }
}

//image, quantity, variant, colour, price, name

// total price, checkout

// {colours: #colour_of_item, variants: #variant_of_item, quantity: #number_ordered, pid: {name, id, cat_id, stock,}}
