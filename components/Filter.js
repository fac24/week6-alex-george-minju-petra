import React from "react";

export default function Filter({ allCategories, setCategory }) {
  return (
    <form>
      <fieldset>
        <label htmlFor="search">Search by name:</label>
        <input type="search" id="search" />
      </fieldset>
      <fieldset>
        <label htmlFor="category">Choose a category:</label>
        <select name="category" id="category">
          <option key="all" value="all">all</option>
          {allCategories.map((category) => <option key={category.category} value={category.category} onChange={(event) => setCategory(event.target.value)}>{category.category}</option>
          )}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="price">Sort by price:</label>
        <select name="price" id="price">
          <option value="highest">Highest Price</option>
          <option value="phone">Lowest Price</option>
        </select>
      </fieldset>
    </form>
  );
}
