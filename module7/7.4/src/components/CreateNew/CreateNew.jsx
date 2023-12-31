import { useState } from "react"
import {Context as anecdoteContext} from "contexts/AnecdoteContext"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {Form,
Input, 
Button} from 'antd';

const CreateNew = () => {
    
    //const [notification, setNotification] = useState('')
    const navigate = useNavigate()
    const {anecdotes,setAnecdotes} = useContext(anecdoteContext);

    const addNew = (obj) => {
      const idNew= anecdotes.length+1;
      const newAnecdote={
       
        content:obj.content,
        author:obj.author,
        info:obj.info,
        votes:0,
        id:idNew
      }
      
      setAnecdotes(anecdotes.concat(newAnecdote))
    
      navigate(`/anecdotes/${idNew}`)
    }
  
 
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <Form onFinish={addNew}>
          
          
          
          <Form.Item label="content" name='content' rule={[{require:true,message:"content",}]}>
           
            <Input placeholder="content"/>
          </Form.Item>
          <Form.Item label="author" name='author' rule={[{require:true,message:"author",}]}>
           
            <Input placeholder="author"/>
          </Form.Item>
          <Form.Item label="info" name='info' rule={[{require:true,message:"url for more info",}]}>
           
            <Input placeholder="url for more info" prefix="http://" suffix=".com"/>
          </Form.Item>
      
        
          <Button type="primary" htmlType="submit">create</Button>
        </Form>
      </div>
    )
  
  }
  export default CreateNew