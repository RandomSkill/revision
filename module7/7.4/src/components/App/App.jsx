/* eslint-disable react/no-unescaped-entities */

import Menu from 'components/Menu/Menu'

import Footer from 'components/Footer/Footer'
import Anecdote from 'components/Anecdote/Anecdote'
import About from 'components/About/About';
import AnecdoteList from 'components/Anecdote/AnecdoteList';
import CreateNew from 'components/CreateNew/CreateNew';
import {Context as anecdoteContext} from "contexts/AnecdoteContext"
import { useContext } from 'react';
import {
 
  Route,Routes
} from 'react-router-dom'

const App = () => {
  
  const {anecdotes} = useContext(anecdoteContext);
  return (
  
  <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path="anecdotes/:id" element={<Anecdote anecdotes={anecdotes}/>}/>
        <Route path="/" element={<AnecdoteList />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/create" element={<CreateNew/>}/>
        </Routes>
      <Footer />
     
     
      
     
    </div>
  )
}

export default App
