import React from "react";

export default function AddBasketButton({ cartTotal, setCartTotal }) {
  return (
    <button
      className="bg-purple-200 text-xl rounded-full p-4 hover:bg-purple-400 mt-2 md:text-md"
      type="submit"
    >
      Add to basket
    </button>
  );
}
