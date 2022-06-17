import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BasketItem({
  product,
  basket,
  setBasket,
  basketIndex,
  totalPrice,
  setTotalPrice,
  cartTotal,
  setCartTotal,
  sale,
}) {
  const [quantity, setQuantity] = useState(product.quantity);

  const productData = product.pid;
  const maxQuantity = productData.stock;
  const { variantType } = JSON.parse(productData.variants);
  const quantities = [];
  for (let i = 1; i <= maxQuantity; i++) {
    quantities.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  function changeQuantity(event) {
    const oldPrice = basket[basketIndex].totalPrice;
    const newPrice = basket[basketIndex].pid.price * event.target.value;
    const oldQuant = basket[basketIndex].quantity;
    const newQuant = event.target.value;

    basket[basketIndex].quantity = newQuant;
    basket[basketIndex].totalPrice = newPrice.toFixed(2);

    setBasket(basket);
    setQuantity(newQuant);
    setCartTotal(cartTotal - +oldQuant + +newQuant);
    setTotalPrice((totalPrice - oldPrice + newPrice).toFixed(2));
  }

  function deleteItem(event) {
    event.preventDefault();
    const indexToRemove = basket.findIndex(
      (item) =>
        (item.pid.id === +event.target.attributes.pid.value) &
        (item.quantity === quantity)
    );
    setCartTotal(cartTotal - quantity);
    setBasket(basket.filter((_, index) => index !== indexToRemove));
  }

  const href = `/products/${productData.id}`;
  return (
    <div
      className="shadow-md rounded-xl flex flex-col gap-4 md:flex-row h-25 p-5 w-full m-auto justify-around items-center"
      key={productData.id}
    >
      <Link href={href}>
        <Image
          src={productData.photo_url}
          alt={productData.name}
          width={200}
          height={200}
          className="rounded-lg object-contain"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <h2>{productData.name}</h2>
        <span>£{productData.price}</span>
        <span>Colour: {product.colours}</span>
        <span>
          {variantType}: {product.variants}
        </span>
        <span>
          <label htmlFor={product.pid.id}>Quantity: </label>
          <select
            name="quantity"
            id={product.pid.id}
            value={quantity}
            onChange={(event) => changeQuantity(event)}
          >
            {quantities}
          </select>
        </span>
        <span>Subtotal: £{product.totalPrice}</span>
        {sale === product.pid.id ? (
          <span className="text-red-400 font-extrabold">
            Total With Savings: £{(product.totalPrice * 0.8).toFixed(2)}
          </span>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-red-200 rounded-full h-12 md:h-20 px-16 hover:bg-red-400"
        pid={productData.id}
        onClick={(event) => deleteItem(event)}
      >
        🗑 Delete
      </button>
    </div>
  );
}
