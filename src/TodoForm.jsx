import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
export default function TodoForm() {

    const [Todoitem, setTodoitem] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = ((e)=>{
        e.preventDefault();
        console.log("Submitted",Todoitem);
        dispatch(addTodo(Todoitem));
       setTodoitem('');
    }) 

    

  return (

<form onSubmit={handleSubmit} className="mb-5">
<div className="mb-4">
    <label htmlFor="todo" className="block text-md text-center mb-2 font-medium text-white">
        Your Todo Task
    </label>
    <input type="text" id="todo" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={Todoitem} 
        onChange={(e) => setTodoitem(e.target.value)} 
        placeholder="todo task..." 
        required 
    />
</div>
<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    Submit
</button>
</form>
  )
}