import React from "react";

export default function AddBasketButton({ cartTotal, setCartTotal }) {
  /*   function incrementCartQuantity() {
    setCartTotal(cartTotal + 1);
  }
 */
  return (
    <button
      className="bg-purple-200 text-xl rounded-full p-4 hover:bg-purple-400 mt-2"
      type="submit"
    >
      Add to basket
    </button>
  );
}
