import React from "react";

export default function Filter({ allCategories, category, setCategory }) {
  return (
    <form>
      <fieldset>
        <label htmlFor="search">Search by name:</label>
        <input type="search" id="search" />
      </fieldset>
      <fieldset>
        <label htmlFor="category">choose a category:</label>
        <select
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option key="all" value="all">
            all
          </option>
          {allCategories.map((category) => (
            <option key={category.category} value={category.category}>
              {category.category}
            </option>
          ))}
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
