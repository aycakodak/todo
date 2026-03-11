import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { RiEditFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import '../App.css'

export default function ToDo({ todo, onRemoveTodo, onUpdateTodo }) { 
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    // BURAYI DÜZELTTİK: Fonksiyon ismini netleştirdik
    const handleUpdateChange = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request); // App.js'deki UpdateTodo'yu tetikler
        setEditable(false);    // Düzenleme modunu kapatır
    }

    return (
        <div className='todo-row'>
            <div>
                {editable ? 
                    <input 
                        value={newTodo} 
                        onChange={(e) => setNewTodo(e.target.value)} 
                        className='todo-input' 
                        type='text'
                    /> :
                    content 
                } 
            </div>
            <div className='todo-icons'>
                <IoIosRemoveCircle onClick={removeTodo} />
                {
                    editable ? 
                    // handleUpdateChange fonksiyonunu çağırıyoruz
                    <FaCheck onClick={handleUpdateChange} /> 
                    : 
                    <RiEditFill onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}