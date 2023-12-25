import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInput=(e)=>{
   setNewName( e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const obt={
        name:newName
    }
    setPersons(persons.concat(obt));
    setNewName('');
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInput}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>debug: {persons.map(p=>p.name )}</div>
    </div>
  )
}

export default App