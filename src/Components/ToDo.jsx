import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { RiEditFill } from "react-icons/ri";
import '../App.css'

// 1. DÜZELTME: Buradaki ismi 'todo' (küçük harf) yapıyoruz.
export default function ToDo({ todo }) { 
  return (
    <div className='todo-row'>
      <div>
        {/* 2. DÜZELTME: Veriyi de 'todo' içinden çekiyoruz. */}
        {todo && todo.content} 
      </div>
      <div className='todo-icons'>
        <IoIosRemoveCircle />
        <RiEditFill />
      </div>
    </div>
  )
}
