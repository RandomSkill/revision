
import Header from './Components/Header/header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
     <Content title={part1} exo={exercises1}/>
     <Content title={part2} exo={exercises2}/>
     <Content title={part3} exo={exercises3}/>
     <Footer total = {exercises1 + exercises2 + exercises3}/>
  
    </div>
  )
}

export default App