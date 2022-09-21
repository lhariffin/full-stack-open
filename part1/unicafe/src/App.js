import { useState } from 'react'

const Header = ({text}) => <h1> {text} </h1>

const Button = ({text, onClick}) => <button onClick={onClick}> {text} </button>

const StatisticLine = ({text, count, unit}) => {
  return (
  <tr> 
    <td> {text} </td>
    <td> {count} {unit} </td>
  </tr>
  )
} 

const Statistics = ({stats}) => {
  const {good, neutral, bad} = stats
  const average = () => (good-bad) / (good+neutral+bad)

  const total = () => good+neutral+bad

  const positivePercent = () => good / (good+neutral+bad)
  
  if(total() == 0)
  {
    return (
      <>
      <Header text ="Statistics" />
      <p>No feedback given.</p>
      </>
    )
  }
  else
  {
    return (
      <>
      <Header text ="Statistics" />
      <table>
        <tbody>
        <StatisticLine text="Good" count={good}/>
        <StatisticLine text="Neutral" count={neutral}/>
        <StatisticLine text="Bad" count={bad}/>
        <StatisticLine text="All" count={total()}/>
        <StatisticLine text="Average" count={average()}/>
        <StatisticLine text="Positive" count={positivePercent()} unit="%"/>
        </tbody>
      </table>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = {
    good: good,
    neutral: neutral, 
    bad: bad
  }

  const reset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  return (
    <div>
      <Header text="Give feedback" />
      <Button text="Good" onClick={() => setGood(good + 1)}/>
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text="Bad" onClick={() => setBad(bad + 1)}/>
      <Button text="Reset" onClick={reset} />

      <Statistics stats={stats} />
      
    </div>
  )
}

export default App