const StatLine= (props)=>{
    if(props.text =="positif") return (<p>{props.text} : {props.cpt}%</p>)
    return(
        <p>{props.text} : {props.cpt}</p>
    )
}
export default StatLine