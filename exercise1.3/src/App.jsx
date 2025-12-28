const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <p>The parts in the courses are; {props.parts[0].name} with {props.parts[0].exercises} exercises,
    {props.parts[1].name} with {props.parts[1].exercises} exercises,
    and {props.parts[2].name} with {props.parts[2].exercises} exercises.
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
   {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
    </div>
  )
}


export default App
