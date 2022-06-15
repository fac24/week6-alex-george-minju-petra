export default function Colours(props) {
  const colours = JSON.parse(props.colours).colours;
  console.log(colours);
  return (
    <>
      <label htmlFor="colours">Select colour:</label>
      <select name="colours" id="colours">
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
