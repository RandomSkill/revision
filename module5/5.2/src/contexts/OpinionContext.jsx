import {  useState } from "react"
import { v4 as uuidv4 } from 'uuid';
const OpinionContext = ()=>{
    const {opinions,setOpinions} = useState([]);


    const addOpinion =(nOpinion)=>{
        const obj = {
            text:nOpinion,
            vote:1,
            id: uuidv4()
        }
        setOpinions(opinions.concat(obj));
      const  x =opinions.sort((a,b)=>a.vote-b.vote);
      setOpinions(x);
    }
    
    
const exposedValue= {
    addOpinion,
    opinions,

}
return (
    <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
)
    
}


export default OpinionContext