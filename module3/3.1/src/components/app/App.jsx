import { useState } from 'react'
import FeedBackButton from 'components/feedBackForm/feedBackButton'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  
const buttonClicked=(funct,i)=>{
  const counterUpdate =() =>{
    setTotal(total+1);
    const x = i+1;
    funct(x);
  }
  return counterUpdate;
  
}
  return (
    <div className="feedbackform">
        <h2> Give feedback </h2>
        <FeedBackButton text="good" funct={buttonClicked(setGood,good)} />
        <FeedBackButton text="neutral"  funct={buttonClicked(setNeutral,neutral)}/>
        <FeedBackButton text="bad"  funct={buttonClicked(setBad,bad)} />
        <h2>good : {good} </h2>
        <h2>neutral : {neutral} </h2>
        <h2>bad : {bad} </h2>
        <h2>total : {total} </h2>
        <h2>avrg : {good-bad/total}</h2>
        <h2>positif : {good/total}%</h2>


    </div>
  )
}

export default App