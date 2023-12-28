import { useContext, useState } from "react"
import OpinionContext from "src/contexts/opinionContext";

const OpinionAdd = ()=>{
    const {opinionInput,setOpinionInput}= useState('');
    const {addOpinion} = useContext(OpinionContext)
    const handleInput =(e)=>{
        const ninput = 
        setOpinionInput(opinionInput)
    }

    return (
        <div>
            <form onSubmit={addOpinion(opinionInput)}>
                <input onChange={handleInput}>{opinionInput}</input>
                <button type="submit"> add Opinion</button>
            </form>
        </div>
    )
}


export default OpinionAdd