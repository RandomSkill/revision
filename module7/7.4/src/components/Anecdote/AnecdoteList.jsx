import {Context as anecdoteContext} from "contexts/AnecdoteContext"
import { useContext } from 'react';
import { Link } from "react-router-dom";



const AnecdoteList = () => {

  const {anecdotes,setAnecdotes} = useContext(anecdoteContext);

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return(
   <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => <li key={anecdote.id} >
        <Link to={`anecdotes/${anecdote.id}`}> {anecdote.content} </Link>
         </li>)}
      </ul>
      
 
    </div>
   
   )
  }

  export default AnecdoteList