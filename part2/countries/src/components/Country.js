import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


const Country = ({ filteredCountries }) => {
  const country = filteredCountries[0]

  const [weather, setWeather] = useState({})

  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.capital}`

    axios.get(url).then(res => { setWeather(res.data.current) })
  }, [country.capital])

  return (
    <div>
      <h2>{ country.name.official }</h2>
      <img src={ country.flags.png } alt={ country.name } height="15%" width="15%"/>
      <p>Capital: { country.capital }</p>
      <p>Population: { country.population }</p>
      <ul>
        {
          Object.keys(country.languages).forEach((lang, idx) => {
            return <li key={ idx }>{ country.languages[lang] }</li>
          })

        }
      </ul>
      <Weather capital={ country.capital } weather={ weather } />
    </div>
  )
}

export default Country
