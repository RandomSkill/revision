import StatLine from "./StatLine"

const Stats =(props)=>{
    if (props.total==0){return <div>no review submitted yet.</div>}
    return(
        <div className="stats">
       
        <StatLine text="good" cpt ={props.good}/>
        <StatLine text="neutral" cpt ={props.neutral}/>
        <StatLine text="bad" cpt ={props.bad}/>
        <StatLine text="total" cpt ={props.total}/>
        <StatLine text="avg" cpt ={(props.good-props.bad)/props.total}/>
        <StatLine text= "positif" cpt={props.good/props.total*100}/>
      
        <h2>positif : </h2>


        </div>
    )
}
export default Stats