const Filter = ({ filteredCountries, setKeyword }) => {
  return (
    filteredCountries.map(country => {
      return (
        <div key={ country.name.official }>
        { country.name.official }
        <button value={ country.name.official } onClick={ () => setKeyword(country.name.official) }>show</button>
        </div>
      )
    })
  )
}


export default Filter
