import React from 'react'
import {useSelector,useDispatch} from 'react-redux'  // dispatch is used to call reducers
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {

   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()
  return (
    <>
      <div>Todo
        {
          todos.map((todo)=>(
            <li key={todo.id}>
              {todo.text}
              <button onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
          ))
        }
      </div>
    </>
  )
}

export default Todos
