export default function Colours(props) {
  const colours = !props.colours ? [] : JSON.parse(props.colours).colours;

  return (
    <>
      <label htmlFor="colours" className="text-lg py-4">
        Select colour:
      </label>
      <select name="colours" id="colours" className="indent-4 md:indent-0">
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
