import { useContext, useState } from "react"
import  {Context as OpinionContext} from "contexts/OpinionContext"

const OpinionAdd = ()=>{
    const [opinionInput,setOpinionInput]= useState("");
    const {addOpinion} = useContext(OpinionContext);
   
    const handleInput =(e)=>{
       
        setOpinionInput(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        addOpinion(opinionInput);
        setOpinionInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} value={opinionInput}></input>
                <button type="submit"> add Opinion</button>
            </form>
        </div>
    )
}


export default OpinionAdd