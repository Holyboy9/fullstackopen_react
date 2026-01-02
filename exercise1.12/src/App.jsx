import { useState } from 'react'

const AnecdotesMessage = ({message}) => <h2>{message}</h2> 
const MaxAnecdotesVote = ({message}) => <h2>{message}</h2>

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
  const [ vote, setVote ] = useState(Array(anecdotes.length).fill(0))

  const Button = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
}
  const Votes = () => {
    const newVotes = [...vote]
    newVotes[selected] += 1
    setVote(newVotes);
    
  }
  const maxIndex = vote.indexOf(Math.max(...vote));



  return (
    <div>
      <AnecdotesMessage message="Anecdote of the day" />
      {anecdotes[selected]} <br />
      <p>has {vote[selected]} vote{vote[selected] !== 1 && 's'}</p>
      <button onClick={Votes}>vote</button>
      <button onClick={Button}>next anecdotes</button>
      <MaxAnecdotesVote message="Anecdote with most votes" />
      <p>{anecdotes[maxIndex]}</p>
      <p>has {vote[maxIndex]} votes</p>
      
      
    </div>
  )
}

export default App