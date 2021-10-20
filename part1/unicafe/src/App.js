import React, { useState } from 'react'

const Title = ({ title }) => {
  return (
    <div>
        <h2>{ title }</h2>
    </div>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
        { props.text }
    </button>
  )
}


const   Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = String(good / all * 100) + " %"
  return(
  	<div>
      <table>
        <tbody>
          <StatisticLine text="good" value={ good } />
          <StatisticLine text="neutral" value={ neutral } />
          <StatisticLine text="bad" value={ bad } />
          <StatisticLine text="all" value={ all } />
          <StatisticLine text="average" value={ average } />
          <StatisticLine text="positive" value={ positive } />
        </tbody>

      </table>
	   </div>
)
}


const StatisticLine = (props) => {
  return(
    <tr>
      <td>{ props.text }</td>
      <td>{ props.value }</td>
    </tr>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1 )
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
	<h2>Give Feedback</h2>
        <Button text="good" handleClick={handleGood} />
        <Button text="neutral" handleClick={handleNeutral} />
        <Button text="bad" handleClick={handleBad} />
        <h2>Statistics</h2>



        {
          (good > 0 || bad > 0 || neutral > 0) ? <Statistics good={ good } neutral={ neutral } bad={ bad } /> : <p>No feedback given</p>
        }
    </div>
  )

}

export default App;
