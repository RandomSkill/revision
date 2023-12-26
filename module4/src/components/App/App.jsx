import { useState,useEffect } from 'react'
import personsService from '../../services/Persons/Persons'

const App = () => {
 
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newTel, setNewTel] = useState('')
 


  useEffect(() => {
    personsService.getAll().then(init=>setPersons(init))},[])


  const handleNameInput=(e)=>{
   setNewName( e.target.value)
  }
  const handleTelInput=(e)=>{
    setNewTel( e.target.value)
   }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(verifName(newName)){
    const obt={
        name:newName,
        number:newTel,
        id:persons.length+1
    }
    personsService.create(obt).then(nPerson=>persons.concat(nPerson))
   personsService.getAll().then(init=>setPersons(init))
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