import TodoForm from './TodoForm';
import TodoLi from './TodoLi';
export default function Todos() {
  return (
    <>
    <div className="bg-white min-h-screen flex items-center justify-center">
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-[70%] h-[70vh] flex flex-col ">
       <TodoForm />
       <TodoLi />
    </div>
</div>
    </>
  )
}



