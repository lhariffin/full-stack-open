import { useState } from 'react'

const Header = ({text}) => <h1> {text} </h1>

const Button = ({text, onClick}) => <button onClick={onClick}> {text} </button>

const Anecdote = ({text, votes}) => {
  return (
    <p>
      {text}
      <br/>
      has {votes} votes
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const vote = () => {
    const cp = [...votes]
    cp[selected] += 1
    setVotes(cp)
  }

  const nextAnecdote = () => {
    let index
    do {
      index = Math.floor(Math.random() * anecdotes.length)
    } while(index === selected)
    setSelected(index)
  }

  const getTopIndex = () => {
    let max = Math.max(...votes)
    return votes.indexOf(max)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}/>
      <br/>
      <Button text="Vote" onClick={vote}/>
      <Button text="Next anecdote" onClick={nextAnecdote}/>
      <Header text="Anecdote with most votes"/>
      <Anecdote text={anecdotes[getTopIndex()]} votes={votes[getTopIndex()]}/>
    </div>
  )
}

export default App