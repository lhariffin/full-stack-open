import {useState} from 'react'

const Country = (props) => {
    const {country} = props

    return (
        <>
        <div>
        <h1> {country.name.common} </h1>
        <strong> {country.name.official} </strong>
        </div>
        <table>
            <tbody>
                <tr>
                    <td> Country Code </td>
                    <td> {country.cioc} </td>
                </tr>
                <tr>
                    <td> Capital </td>
                    <td> {country.capital} </td>
                </tr>
                <tr>
                    <td> Area </td>
                    <td> {country.area} </td>
                </tr>
            </tbody>
        </table>
        <br />
        <table>
            <tbody>
                <tr>
                    <td> <strong>Languages</strong> </td>
                </tr>
                
                {Object.values(country.languages).map(language => {
                    return (
                    <tr key={language}>
                    <td> {language} </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        <br />
        <img src={country.flags.png} />
        </>
    )
}

export default Country