const Weather = ({ capital, weather }) => {
  return (
    <div>
      <h3>Weather in { capital }</h3>
      <p>Temperature: { weather.temperature }&#176; C</p>
      <p>Wind Speed and Direction: { weather.wind_speed } { weather.wind_dir }</p>
      <p>UV Index: { weather.uv_index }</p>
    </div>
  )
}


export default Weather
