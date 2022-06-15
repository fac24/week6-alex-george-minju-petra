import React from "react";

export default function Filter({ allCategories, setCategory, setText, setSortPrice }) {
  return (
    <form>
      <fieldset>
        <label htmlFor="search">Search by name:</label>
        <input type="search" id="search" onChange={(event) => setText(event.target.value)} />
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
        <select name="price" id="price" onChange={(event) => setSortPrice(event.target.value)}>
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
        </select>
      </fieldset>
    </form>
  );
}
