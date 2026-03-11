import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ todos }) {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>
      {
        // todos varsa ve boş değilse map ile dönüyoruz
        todos && todos.map((todo) => (
          // Her bir ToDo bileşenine benzersiz bir 'key' ve veriyi 'todo' olarak gönderiyoruz
          <ToDo key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}
