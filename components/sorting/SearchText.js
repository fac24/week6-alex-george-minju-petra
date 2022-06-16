export default function SearchText({ setText }) {
    return (
        <fieldset>
            <label htmlFor="search">Search by name:</label>
            <input type="search" id="search" onChange={(event) => setText(event.target.value)} />
        </fieldset>
    )
}