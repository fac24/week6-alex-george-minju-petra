export default function Variants(props) {
  const { variants, variantType } = JSON.parse(props.variants);

  return (
    <>
      <label htmlFor="variants">Select {variantType}: </label>
      <select name="variants" id="variants">
        {variants.map((variant) => {
          return (
            <option value={variant} key={variant}>
              {variant}
            </option>
          );
        })}
      </select>
    </>
  );
}
