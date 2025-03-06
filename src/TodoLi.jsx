import { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { editTodo, removeTodo , setTodo } from './store/todoSlice';

export default function Todos() {
const todos = useSelector(state=>state.todos)
const dispatch = useDispatch()
const [isEditingId, setIsEditingId] = useState(null);
const [newText, setNewText] = useState('');

useEffect(()=>{
    const storedTodo = JSON.parse(localStorage.getItem('todos'));
    if(storedTodo){
    dispatch(setTodo(storedTodo));
    }
},[dispatch])

useEffect(()=>{
   const todoItems = JSON.stringify(todos);
   localStorage.setItem('todos', todoItems);
},[todos])

    const handleEdit = (todo) =>{
        setIsEditingId(todo.id);
        setNewText(todo.text);
    }

    const handleSave = (id) =>{
        dispatch(editTodo({id:id, text: newText}));
        setIsEditingId(false);
    }

    const handleChange = (e) => {
        setNewText(e.target.value);
      };
return (
    <ul className="bg-gray-600 p-2 rounded-lg divide-y divide-gray-500 flex flex-col justify-start">
    {
    todos.length === 0 ? 
    (<p className="text-gray-300">No todos yet. Add one!</p>) : 
    (todos.map((todo) => 

    <li key={todo.id} className="py-1 flex items-center">
       
    {/*<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input> */}
    {isEditingId ===todo.id ? (<input
          type="text"
          value={newText}
          onChange={handleChange}
          className="text-md text-white bg-gray-700 p-2 rounded-lg"
        />
      ) : (<div className='flex-1'>
    <p className="text-sm text-[18px] text-gray-900 truncate dark:text-white">{todo.text}</p>
     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               Created on: {todo.createdtime}{/*new Date().toLocaleDateString()*/}
    </p>
    </div>)}
    <div className="flex space-x-2 ml-auto">
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    onClick={isEditingId ===todo.id ? () => handleSave(todo.id) : () => handleEdit(todo)}>{isEditingId ===todo.id ? 'Save' : 'Edit'}</button>
    <button type="button" className="focus:outline-none text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
    </div>
</li>
   )) }
</ul>
)
}