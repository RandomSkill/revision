import "./Content.css"
const Content =(props)=>{
    return(
        <p className="content">
            {props.title} {props.exo}
        </p>
    )
}

export default Content;