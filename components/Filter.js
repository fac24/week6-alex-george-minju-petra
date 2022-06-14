import React from "react";

export default function Filter() {
  return (
    <form>
      <label htmlFor="search">Search by name:</label>
      <input type="search" id="search" />

      <label htmlFor="category">Choose a category:</label>
      <select name="category" id="category">
        <option value="phone">Phone</option>
      </select>
      <label htmlFor="price">Sort by price:</label>
      <select name="price" id="price">
        <option value="highest">Highest Price</option>
        <option value="phone">Lowest Price</option>
      </select>
    </form>
  );
}
