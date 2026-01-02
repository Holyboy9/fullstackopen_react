import {useState} from 'react'

const Feedback = ({message}) => <h2>{message}</h2>
    
const Statistics  = ({message}) => <h2>{message}</h2>

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ totalGood, setTotalGood ] = useState(0)
  const [ totalNeutral, setTotalNeutral ] = useState(0)
  const [ totalBad, setTotalBad ] = useState(0)
  

  const increaseGood = () => {
    setGood(good + 1)
    setTotalGood(good)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotalNeutral(neutral)
    
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setTotalBad(bad)
  }


  return(
    <div>
      <Feedback message='get Feeback' />
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>
      <Statistics message='Statistics' />
      <p>
        good {totalGood} <br />
        neutral {totalNeutral} <br />
        bad {totalBad}
        </p>

    </div>
  )
}

export default App
