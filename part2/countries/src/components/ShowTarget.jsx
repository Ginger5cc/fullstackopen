import {useState, useEffect} from 'react'
import axios from 'axios'

const ShowTarget = ({target}) => {
    const [weather, setWeather] = useState(null)
    const [geoinfo, setGeoinfo] = useState(null)
    const api_key = import.meta.env.VITE_SOME_KEY
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?lat='
    const geoURL ='http://api.openweathermap.org/geo/1.0/direct?q='
  
    useEffect(() => {
      if (target) {
        const name = target[0].name.common
        const capital = target[0].capital
        console.log(`fetching geoinfo, target is ${name}, ${capital}, ${api_key}`)
      
        axios
        .get(`${geoURL}${capital},${name}&limit=1&appid=${api_key}`)
        .then(response => {
          setGeoinfo(response.data)
          console.log('geo promise fulfilled')})
      }
    }, [target])
  
    useEffect(() => {
      if (geoinfo) {
        axios
        .get(`${baseURL}${geoinfo[0].lat}&lon=${geoinfo[0].lon}&appid=${api_key}`)
        .then(response => {
          console.log('weather promise fulfilled')
          setWeather(response.data)})
      }
    }, [geoinfo])
  
    if (!target || !geoinfo || !weather) {
      return null
    }
    const lang = target[0].languages
    console.log('running02')
    const name = target[0].name.common
    const capital = target[0].capital
    return (
      <div>
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {target[0].area}</p>
        <h3>Languages:</h3>
        <ul>
         {Object.keys(lang).map((key, index) => <li key={index}>{lang[key]}</li>)}
        </ul>
        <img src={target[0].flags.png} width={200} alt='flag' />
        <h3>Weather in {capital}</h3>
        <p>temperature {Math.round((weather.main.temp - 273.15) * 100) / 100} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    )
  }

  export default ShowTarget