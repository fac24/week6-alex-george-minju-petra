export default function PriceSort({ setSortPrice }) {
  return (
    <fieldset>
      <label htmlFor="price">Sort by price:</label>
      <select
        name="price"
        id="price"
        className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md"
        onChange={(event) => setSortPrice(event.target.value)}
      >
        <option value="highest" className="text-right">
          Highest Price
        </option>
        <option value="lowest" className="text-right">
          Lowest Price
        </option>
      </select>
    </fieldset>
  );
}
