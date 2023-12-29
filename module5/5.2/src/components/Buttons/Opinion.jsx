import { useContext } from "react"
import  {Context as OpinionContext}  from "contexts/OpinionContext.jsx";


const Opinion = ()=>{
    const {opinions,vote} = useContext(OpinionContext);


    return(
        <div className="opinion">
        {opinions.map(o=><li key={o.id}>{o.text} : {o.vote} <button onClick={()=>vote(o.id)} >VOTER</button></li>)}
        </div>

   )
}


export default Opinion