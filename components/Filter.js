import React from "react";
import { getAllCategories } from "../database/model.js";

console.log(getAllCategories)

// {getAllCategories.map((category) => { <option value={category.category}>{category.category}</option> })}

export default function Filter({ getAllCategories }) {
  return (
    <form>
      <fieldset>
        <label htmlFor="search">Search by name:</label>
        <input type="search" id="search" />
      </fieldset>
      <fieldset>
        <label htmlFor="category">Choose a category:</label>
        <select name="category" id="category">
          <option value='Phone'>Phone</option>
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

// function CategoryFilter(props) {
//   return (
//       <fieldset>
//           {array.map((item) => (
//               <label htmlFor="item" key={item}>
//                   {item}
//                   <input
//                       type="radio"
//                       name="categories"
//                       id={item}
//                       value={item}
//                       checked={props.startCategory === item}
//                       onChange={(event) => props.changeCategory(event.target.value)}
//                   />
//               </label>
//           ))}


//       </fieldset>
//   )
