import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setpoints] = useState(new Uint8Array(anecdotes.length))
  

  const onSmash = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const onPoint = () => {
    const copy = [...points]
    copy[selected] += 1   
    setpoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} vote</p>
      <br></br>
      <button onClick={onPoint}>vote</button>
      <button onClick={onSmash}>next anecdote</button>
      <h1>Anecdote withe most votes</h1>
      
      {anecdotes[points.indexOf(Math.max(...points))]}
      <p>has {Math.max(...points)} vote</p>
    </div>
  )
}

export default App