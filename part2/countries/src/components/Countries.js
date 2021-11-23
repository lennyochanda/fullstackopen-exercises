import Country from './Country'
import Filter from './Filter'


const Countries = ({ filteredCountries, setKeyword }) => {
  if (filteredCountries.length === 0) {
    return null
  }


  if (filteredCountries.length > 10) {
    return "Too many matches, specify another filter"
  }


  if (filteredCountries.length === 1) {
    return <Country filteredCountries={ filteredCountries } />
  }


  return <Filter filteredCountries={ filteredCountries } setKeyword={ setKeyword } />
}


export default Countries
