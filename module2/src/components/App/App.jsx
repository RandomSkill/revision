import { useState } from 'react';
import Button from 'components/button/Button';
import Display from 'components/dispay/Display';

const App = () => {
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))
  
    console.log('rendering with counter value', counter)
  
  const changeCount =(delta)=>{
    const i= counter+delta;
    setCounter(i);
    localStorage.setItem("counter", JSON.stringify(i))
  }


    return (
      <div>
        <Display counter={counter} />
        <Button funct={changeCount} text="+80" delta={80}/>
        <Button funct={changeCount} text="zero" delta= {-counter}/>
        <Button funct={changeCount} text="-45" delta={-45}/>
      </div>
    )
  } 
  export default App;