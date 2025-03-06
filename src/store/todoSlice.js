import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:nanoid(), text: "Complete React course", createdtime:new Date().toLocaleString()}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload,
                createdtime: new Date().toLocaleString(),
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
        },
        
        editTodo : (state,action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id===action.payload.id)
                    return {...todo,text:action.payload.text}
                else
                return todo
                })

            },
        setTodo : (state,action) =>{
            state.todos = action.payload;
        }

    }
})

export const {addTodo, removeTodo, editTodo, setTodo} = todoSlice.actions;
export default todoSlice.reducer