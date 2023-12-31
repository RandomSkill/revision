import { useParams} from 'react-router-dom'

const Anecdote =({anecdotes})=>{
    const id = useParams().id
   
    const anecdote = anecdotes.find(a=> a.id===Number(id))
    return(
        <div>
            <p>{anecdote.id}</p>
            <p>{anecdote.content}</p>
            <p>{anecdote.author}</p>
            <p>{anecdote.info}</p>
            <p>{anecdote.vote}</p>
        </div>
    )
}
export default Anecdote