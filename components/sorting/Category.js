
export default function Category({ allCategories, setCategory }) {
    return (
        <fieldset>
            <label htmlFor="category">choose a category:</label>
            <select
                name="category"
                id="category"
                onChange={(event) => setCategory(event.target.value)}
            >
                <option key="all" value="all">
                    all
                </option>
                {allCategories.map((category) => (
                    <option key={category.category} value={category.category}>
                        {category.category}
                    </option>
                ))}
            </select>
        </fieldset>
    )
}