import { useState } from "react"
import {Context as anecdoteContext} from "contexts/AnecdoteContext"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const CreateNew = () => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')
    //const [notification, setNotification] = useState('')
    const navigate = useNavigate()
    const {anecdotes,setAnecdotes} = useContext(anecdoteContext);

    const addNew = (obj) => {
   
      setAnecdotes(anecdotes.concat(obj))
      setInfo('')
      setAuthor('')
      setContent('')
      
    }
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
     const idNew= anecdotes.length+1;
      addNew({
        content,
        author,
        info,
        votes: 0,
        id:idNew
      })
     navigate(`/anecdotes/${idNew}`)
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            author
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
  }
  export default CreateNew