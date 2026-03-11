import { useState } from 'react'
import './App.css'
import ToDoCreate from './Components/ToDoCreate'
import ToDoList from './Components/ToDoList'

function App() { 
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const UpdateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo
      }
      return newTodo
    })
    setTodos([...updatedTodos])
  }

  const removeTodo = (todoId) => {
    const newTodoList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodoList);
  }

 
  return (
    <div className='App'>
      <div className='Main'> 
        <ToDoCreate onCreateTodo={createTodo}/>
        <ToDoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={UpdateTodo}/>
      </div>
    </div>
  )
}

export default App
