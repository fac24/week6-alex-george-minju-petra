import React from "react";

import SearchText from "./sorting/SearchText.js";
import Category from "./sorting/Category.js";
import PriceSort from "./sorting/PriceSort.js";

export default function Filter({ allCategories, setCategory, setText, setSortPrice }) {
  return (
    <form>
      <SearchText setText={setText} />
      <Category allCategories={allCategories} setCategory={setCategory} />
      <PriceSort setSortPrice={setSortPrice} />
    </form>
  );
}
