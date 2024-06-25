import { useState } from 'react'

const StatisticLine = ({value, text}) => {
  return(
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Average = ({array}) => {
  const avg = array.reduce((a, b) => a + b, 0) / array.length
  return(
    <StatisticLine value={avg} text='average' />
  )
}
   
const Positive = (props) => {
  return (
    <StatisticLine value={(props.pos / props.array.length)+' %'} text='positive' />
  )
}

const Total = ({array}) => {
  return (
    <StatisticLine value={array.length} text='all' />
  )
}

const Nothing = (props) => {
  if (props.array.length === 0 ) {
    return (
    <p>No feedback given</p>
    )
  } return <Statistics pos={props.pos} array={props.array} neu={props.neu} neg={props.neg} />
}

const Statistics = (props) => {
  return (
    <table>
      <tbody>
    <StatisticLine value={props.pos} text='good' />
    <StatisticLine value={props.neu} text='neutral' />
    <StatisticLine value={props.neg} text='bad' />
    <Total array={props.array} />
    <Average array={props.array} />
    <Positive pos={props.pos} array={props.array}/>
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const increaseGood = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={increaseGood}
        text='good'
      />
      <Button
        onClick={increaseNeutral}
        text='neutral'
      />
      <Button
        onClick={increaseBad}
        text='bad'
      />
      <h1>statistics</h1>
      
      <Nothing pos={good} array={allClicks} neu={neutral} neg={bad} />
      
    </div>
  )
}

export default App
