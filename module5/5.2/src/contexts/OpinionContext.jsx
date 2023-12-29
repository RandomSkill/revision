import React,{  useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = ({children})=>{
    const [opinions,setOpinions] = useState([]);


    const addOpinion =(nOpinion)=>{
        console.log("enter Add opinion")
        const obj = {
            text:nOpinion,
            vote:1,
            id: uuidv4()
        }
        console.log(obj)
        const newList = opinions.concat(obj);
        newList.join(obj);       
        newList.sort((a,b)=>b.vote-a.vote);
      setOpinions(newList);
    }
    
    const vote = (id)=>{
    const nOpinion = [...opinions];
    let opinionUpdate= nOpinion.find((o)=>o.id ===id);
    if(opinionUpdate!=undefined) {
        opinionUpdate.vote +=1;
        nOpinion.sort((a,b)=>b.vote-a.vote);
        setOpinions(nOpinion);
    }else{return undefined}
    
    }
    
const exposedValue= {
    addOpinion,
    opinions,
    vote
}
return (
    <Context.Provider value={exposedValue}>
            {children}
        </Context.Provider>
)
    
}


export  {Context, ProviderWrapper}