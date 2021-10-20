import React, { useState } from 'react';


const Button = ({ text, handleClick }) => {
  return(
    <div>
      <button onClick={ handleClick }>
        { text }
      </button>
    </div>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the developement time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore if you write the code as cleverly as possible you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))


  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }


  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }


  const highestVotes = () => {
    let highest = 0
    let highestIndex = 0

    votes.forEach((item, index) => {
      if (item > highest) {
        highestIndex = index
        highest = item
      }
    });

    return highestIndex
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      { anecdotes[selected] }
      <p>has { votes[selected] } votes</p>true

      <Button text="vote" handleClick={ handleVoteClick } />
      <Button text="next anecdote" handleClick={ handleNextClick } />

      <h2>Anecdote with the most votes</h2>
      { anecdotes[highestVotes()] }
      <p>has { votes[highestVotes()] } votes</p>
    </div>
  )
}

export default App;
