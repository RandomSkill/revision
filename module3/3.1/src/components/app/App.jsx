import { useState } from 'react'
import FeedBackButton from 'components/feedBackForm/feedBackButton'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div className="feedbackform">
        <h2> Give feedback </h2>
        <FeedBackButton text="good" funct={setGood} cpt={good}/>
        <FeedBackButton text="neutral"  funct={setNeutral} cpt={neutral}/>
        <FeedBackButton text="bad"  funct={setBad} cpt={bad} />
        <h2>good : {good} </h2>
        <h2>neutral : {neutral} </h2>
        <h2>bad : {bad} </h2>
    </div>
  )
}

export default App