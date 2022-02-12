export function Search() {

    return (
        <div>

            <h1>Search Filters</h1>

            <select >
                <option disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <select >
                <option disabled selected>Size</option>
                <option value="small">Small 0-25 lb</option>
                <option value="medium">Medium 26-60 lb</option>
                <option value="large">Large 61-100 lb</option>
                <option value="extra-large">Extra-Large 101+ lb</option>
            </select>

            <select >
                <option disabled selected>Age</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
            </select>

            <select >
                <option disabled selected>Spay/Neutered</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <h2>Results</h2>


        </div>
    )
}