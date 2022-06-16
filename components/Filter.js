import React from "react";

import SearchText from "./sorting/SearchText.js";
import Category from "./sorting/Category.js";
import PriceSort from "./sorting/PriceSort.js";

export default function Filter({
  allCategories,
  setCategory,
  setText,
  setSortPrice,
}) {
  return (
    <form className=" container flex flex-row mt-5 mb-4 h-100 mx-auto p-5 justify-between text-lg text-gray-600">
      <SearchText setText={setText} />
      <Category allCategories={allCategories} setCategory={setCategory} />
      <PriceSort setSortPrice={setSortPrice} />
    </form>
  );
}
