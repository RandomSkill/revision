import React,{useState} from "react";

const Context= React.createContext(null)

const ProviderWarper=(props)=>{
    const [good,setGood] =useState(0)
    const [neutral,setNeutral] =useState(0)
    const [bad,setBad] =useState(0)    
const handleGoodButton=()=>{
        setGood(good+1)
    }
    function handleNeutralButton(){
        setNeutral(neutral+1)
    }
    const  handleBadButton=()=>{
        setBad(bad+1)
    }


    const reset=()=>{
        setGood(0);
        setBad(0);
        setNeutral(0);
    }
    const exposedValue={
        good,
        handleGoodButton,
        neutral,
        handleNeutralButton,
        bad,
        handleBadButton,
        reset
    }
    return(
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    )
}
export{
    Context,
    ProviderWarper
}