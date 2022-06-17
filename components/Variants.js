export default function Variants(props) {
  const { variants, variantType } = !props.variants
    ? { variants: [] }
    : JSON.parse(props.variants);

  return (
    <>
      <label htmlFor="variants" className="text-lg py-4">
        Select {variantType}:{" "}
      </label>
      <select name="variants" id="variants" className="indent-4 md:indent-0">
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
