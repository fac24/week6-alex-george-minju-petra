export default function Variants(props) {
  const { variants, variantType } = JSON.parse(props.variants);

  return (
    <>
      <label htmlFor="variants" className="text-lg py-4">
        Select {variantType}:{" "}
      </label>
      <select
        name="variants"
        id="variants"
        className="border-solid border-2 border-blue-200 w-44 ml-2 rounded-md "
      >
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
