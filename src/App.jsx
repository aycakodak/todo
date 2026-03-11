import { useState } from 'react'
import './App.css'
import ToDoCreate from './Components/ToDoCreate'
import ToDoList from './Components/ToDoList'

function App() { 
 
  const [todos, setTodos] = useState([])

  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo])
  }
 
  console.log(todos)
 
 
  return(
  
  
  <div className='App'>
      <div className='Main'> 
        <ToDoCreate onCreateTodo={createTodo}/>
        <ToDoList todos={todos}/>
        
      </div>

    
  </div>
 )
}

export default App
