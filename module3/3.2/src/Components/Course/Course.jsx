import Header from '../Header/Header'
import Content from '../Content/Content'

const Course =(props)=>{
   const part= props.parts
    
    return(
        <div className="course">
      <Header key={props.id} course={props.course} pp={props.pp} />
        {part.map(p =>
                    <Content  key={p.id} title={p.name} exo={p.exercises} />
                )
          
        }
       
        </div>
    )
}

export default Course