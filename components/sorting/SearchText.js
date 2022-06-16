export default function SearchText({ setText }) {
  return (
    <fieldset>
      <label htmlFor="search">Search by name:</label>
      <input
        type="search"
        id="search"
        className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md h-7"
        onChange={(event) => setText(event.target.value)}
      />
    </fieldset>
  );
}
