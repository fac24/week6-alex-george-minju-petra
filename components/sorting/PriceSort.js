export default function PriceSort({ setSortPrice }) {
  return (
    <fieldset className="flex flex-col md:flex-row justify-center items-center gap-2">
      <label htmlFor="price">Sort by price:</label>
      <select
        name="price"
        id="price"
        className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md p-2"
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
