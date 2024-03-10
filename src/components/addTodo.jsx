import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {

  const [input,setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
         type="text"
         value={input} 
         onChange={(e)=>setInput(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddTodo
