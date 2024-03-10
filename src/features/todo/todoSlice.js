import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos : [{id : 1, text : "Hello World"}]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : ( state, action )=>            // state ===> means how many product now maybe 4,9,2
        {                                          // Action ===> give Id to access removeTodo
            const todo = {
                id : nanoid(), 
                text : action.payload
            }
            state.todos.push(todo)
        },             
        removeTodo : ( state, action )=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },                      
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer