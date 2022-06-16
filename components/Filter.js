import React from "react";

export default function Filter({ allCategories, category, setCategory }) {
  return (
    <form className=" container flex flex-row mt-5 mb-4 h-100 mx-auto p-5 justify-between text-lg text-gray-600">
      <fieldset>
        <label htmlFor="search">Search by name:</label>
        <input
          type="search"
          id="search"
          className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md h-7"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="category">Choose a category:</label>
        <select
          className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md"
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option key="all" value="all" className="text-right">
            All
          </option>
          {allCategories.map((category) => (
            <option
              key={category.category}
              value={category.category}
              className="text-right"
            >
              {category.category}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="price">Sort by price:</label>
        <select
          name="price"
          id="price"
          className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md"
        >
          <option value="highest" className="text-right">
            Highest Price
          </option>
          <option value="phone" className="text-right">
            Lowest Price
          </option>
        </select>
      </fieldset>
    </form>
  );
}
