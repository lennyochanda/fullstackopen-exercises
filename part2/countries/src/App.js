import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'


const App = () => {
  const [keyword, setKeyword] = useState('')
  const [countries, setCountries] = useState([])


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })

  }, [])


  const handleSearchInput = (e) => {
    setKeyword(e.target.value)
  }


  const filteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(keyword.toLowerCase()))

  const clearInput = (e) => {
    setKeyword('')
  }

  return(
    <div>
      <h2>Countries Info</h2>
      <Search keyword={ keyword } handleSearchInput={ handleSearchInput } clearInput={ clearInput } />
      <Countries setKeyword={ setKeyword } filteredCountries={ filteredCountries } />
    </div>
  )
}

export default App;
