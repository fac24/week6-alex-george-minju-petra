export default function Colours(props) {
  const colours = JSON.parse(props.colours).colours;

  return (
    <>
      <label htmlFor="colours" className="text-lg py-4">
        Select colour:
      </label>
      <select
        name="colours"
        id="colours"
        className=" border-solid border-2 border-blue-200 w-44 ml-2 rounded-md p-2"
      >
        {colours.map((colour) => {
          return (
            <option value={colour} key={colour}>
              {colour}
            </option>
          );
        })}
      </select>
    </>
  );
}
