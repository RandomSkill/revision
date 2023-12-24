import { useState } from 'react'
import FeedBackButton from 'components/feedBackForm/feedBackButton'
import Stats from 'components/stats/Stats'
import Loading from 'components/loading/Loading'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [loading,setLoading]= useState(true)

const buttonClicked=(funct,i)=>{
  const counterUpdate =() =>{
    setTotal(total+1);
    const x = i+1;
    funct(x);
  }
  return counterUpdate;
  
}

if(loading)return (
  <Loading funct = {setLoading}></Loading>
)

  return (
    <div className="feedbackform">
        <h2> Give feedback </h2>
        <FeedBackButton text="good" funct={buttonClicked(setGood,good)} />
        <FeedBackButton text="neutral"  funct={buttonClicked(setNeutral,neutral)}/>
        <FeedBackButton text="bad"  funct={buttonClicked(setBad,bad)} />
        

        <Stats good={good} neutral={neutral} bad={bad} total={total}></Stats>
        
    </div>
  )
}

export default App