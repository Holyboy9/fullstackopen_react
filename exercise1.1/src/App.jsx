const Header = (props) => {
 return(
  <div>
    <p>The name of the course is {props.course}</p>
  </div>
  
 ) 
}

const Content = (props) => {
  return(
    <div>
      <p>This course consists of three parts; part1 is {props.part1} with {props.exercises1} exercises,
         part2 is {props.part2} with {props.exercises2} exercises, 
         and part3 is {props.part3} with {props.exercises3} exercises</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        The total number of exercises in the course is {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return ( 
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={total} />
    </div>
  )
}


export default App
