/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import axios from 'axios'
import './index.css'
import ShowTarget from "./components/ShowTarget"
import Filter from "./components/Filter"

const App = () => {
  const [find, setFind] = useState('search country')
  const [data, setData] = useState([])
  const [target, setTarget] = useState(null)
  

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, [])



  const handleClick = (event) => {
    event.preventDefault()
    const id = event.target.id
    const targetCountry = data.filter(n=> n.name.common.toLowerCase() === id.toLowerCase() )
    setTarget(targetCountry)
  }


  return (
    <div>
      find countries <input onChange={(e) => setFind(e.target.value)}/>
      <Filter findP={find} data={data} setTarget={setTarget} handleClick={handleClick}/>
      <ShowTarget target={target}/>
    </div>
  )
  
}

export default App