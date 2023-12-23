import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleClickOnButton(){
    
  }
  return (
    <div className="feedbackform">
        <h2> Give feedback </h2>
        <FeedBackButton text="good" func={setGood}/>
        <FeedBackButton text="neutral"  func={setNeutral}/>
        <FeedBackButton text="bad"  func={setBad}/>
    </div>
  )
}

export default App