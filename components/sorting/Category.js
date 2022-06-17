export default function Category({ allCategories, setCategory }) {
  return (
    <fieldset className="flex flex-col md:flex-row justify-center items-center gap-2">
      <label htmlFor="category">Choose a category:</label>
      <select
        className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md p-2"
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
  );
}
