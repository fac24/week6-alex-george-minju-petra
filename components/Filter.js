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
    <form className=" container flex flex-col gap-4 md:flex-row md:mt-5 md:mb-4 md:h-100 mx-auto p-5 md:justify-around md:text-lg text-gray-600">
      <SearchText setText={setText} />
      <Category allCategories={allCategories} setCategory={setCategory} />
      <PriceSort setSortPrice={setSortPrice} />
    </form>
  );
}
