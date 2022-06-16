

export default function PriceSort({ setSortPrice }) {
    return (
        <fieldset>
            <label htmlFor="price">Sort by price:</label>
            <select name="price" id="price" onChange={(event) => setSortPrice(event.target.value)}>
                <option value="highest">Highest Price</option>
                <option value="lowest">Lowest Price</option>
            </select>
        </fieldset>
    )
}