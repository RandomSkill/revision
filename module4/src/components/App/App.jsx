import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newTel, setNewTel] = useState('')

  const handleInput=(e)=>{
   setNewName( e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(verifName(newName)){
    const obt={
        name:newName,
        tel:
    }
    setPersons(persons.concat(obt));
    setNewName('');
    document.querySelector("input").value="";
  }
  else {
    alert(`${newName} is already in the phonebook`);
  }
    
  }
  function verifName(nName){
    let isNew = true;
    persons.map(n=>{ if(n.name === nName) isNew=false})
    return isNew;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInput} id='inputName'/>
          <div>number: <input id='inputNum' onChange={handleInput}/></div>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>debug:
       {persons.map(p=><li key ={p.name}> {p.name} </li>)}</div>
    </div>
  )
}

export default App