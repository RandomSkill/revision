import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newTel, setNewTel] = useState('')
 
  const handleNameInput=(e)=>{
   setNewName( e.target.value)
  }
  const handleTelInput=(e)=>{
    setNewTel( e.target.value)
   }
   const handlefilterInput=(e)=>{
    setFilter( e.target.value)
   }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(verifName(newName)){
    const obt={
        name:newName,
        number:newTel,
        id:persons.length+1
    }
    setPersons(persons.concat(obt));
    setNewName('');
    setNewTel('');
    document.querySelector("input").value="";
  }
  else {alert(`${newName} is already in the phonebook`);} 
  }
  function verifName(nName){
    let isNew = true;
    persons.map(n=>{ if(n.name === nName) isNew=false})
    return isNew;
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with<input onChange={handlefilterInput} ></input> </div>
      <form>
        <div>
          name: <input onChange={handleNameInput} id='inputName'/>
          <div>number: <input id='inputNum' onChange={handleTelInput}/></div>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug name: {newName}</div>
      <div>debug number: {newTel}</div>
      <div>debug:
       {persons.map(p=><li key ={p.id}> {p.name}   {p.number} </li>)}</div>
    </div>
  )
}

export default App