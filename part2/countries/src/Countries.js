import Country from "./Country"

const Countries = (props) => {
    const {countries, selectCountry} = props

    if(countries.length > 10) {
        return (
            <div>
                Too many countries, narrow filter.
            </div>
        )
    }
    else if(countries.length === 0) {
        return (
            <div>
                No countries available
            </div>
        ) 
    }
    else if(countries.length === 1) {
        return (
            <div>
                <Country country={countries[0]}/>
            </div>
        ) 
    }
    else {
        return (
            <table>
                <tbody>
                {countries.map(country => 
                    <tr key={country.ccn3}>
                        <td> {country.name.common} </td>
                        <td> <button onClick={() => selectCountry(country.name.official)}> show </button> </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

}

export default Countries