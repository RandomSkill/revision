import  './index.css';
import pp from "/src/img/pp.jpg"
import Footer from '/src/Components/Footer/Footer'
import Course from '/src/Components/Course/Course';
const App = () => {
  const course =[ 
    {
    id: 1,
    name: 'Half Stack application development',
    pp:pp,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  


  return (
    <div>
    {course.map(c =>
         <Course key={c.id} course={c.name} pp={c.pp} parts={c.parts}/>
         )
    }
    </div>
  )
}

export default App