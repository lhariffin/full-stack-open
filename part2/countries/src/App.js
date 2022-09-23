import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'

const App = () => {
  // States
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(
      response => {
        setCountries(response.data)
      }
      )
    }, [])
    
    // Event handlers
    
  const countriesToShow = countryFilter == null ? countries : countries.filter(country => 
    country.name.common.toLowerCase().includes((countryFilter.toLowerCase()))
  )

  const selectCountry = (official) => {
    const country = countries.filter(country => country.name.official === official)[0]
    setCountryFilter(country.name.common)
  }

  return (
    <div>
      <strong>Search here: </strong>
      <input value={countryFilter} onChange={(event) => setCountryFilter(event.target.value)}/>
      <Countries countries={countriesToShow} selectCountry={selectCountry}/>
    </div>
  )
}

export default App