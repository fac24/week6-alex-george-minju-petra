import { useState } from "react";
import Image from "next/image";

export default function BasketItem({
  product,
  basket,
  setBasket,
  basketIndex,
  totalPrice,
  setTotalPrice,
  cartTotal,
  setCartTotal,
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

    basket[basketIndex].quantity = event.target.value;
    basket[basketIndex].totalPrice = newPrice.toFixed(2);

    setBasket(basket);
    setQuantity(event.target.value);
    setCartTotal(event.target.value);
    setTotalPrice((totalPrice - oldPrice + newPrice).toFixed(2));
  }

  function deleteItem(event) {
    event.preventDefault();
    const indexToRemove = basket.findIndex(
      (item) => item.pid.id === +event.target.attributes.pid.value
    );
    setCartTotal(cartTotal - quantity);
    setBasket(basket.filter((_, index) => index !== indexToRemove));
  }
  return (
    <div
      className="shadow-md rounded-xl flex flex-row h-25 p-5 w-full m-auto justify-around items-center"
      key={productData.id}
    >
      <Image
        src={productData.photo_url}
        alt={productData.name}
        width={200}
        height={200}
        className="rounded-lg object-contain"
      />
      <div className="flex flex-col">
        <h2>{productData.name}</h2>
        <span>
          £{productData.price} : Total: £{product.totalPrice}
        </span>
        <span>Colour: {product.colours}</span>
        <span>
          {variantType}: {product.variants}
        </span>
        <span>
          <label htmlFor={product.pid.id}>Quantity: </label>
          <select
            name="quantity"
            id={product.pid.id}
            className="indent-4 md:indent-0"
            value={quantity}
            onChange={(event) => changeQuantity(event)}
          >
            {quantities}
          </select>
        </span>
      </div>
      <button
        type="submit"
        className="bg-red-200 rounded-full h-10  px-10 hover:bg-red-400"
        pid={productData.id}
        onClick={(event) => deleteItem(event)}
      >
        🗑 Delete
      </button>
    </div>
  );
}
