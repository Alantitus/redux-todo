import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='flex  h-screen justify-center flex-col items-center bg-gradient-to-r from-zinc-50 to-emerald-200'>
      <div className=' bg-white rounded-xl  flex justify-center flex-col items-center' style={{height:'400px',width:'600px'}}>
        <h1 className='text-4xl uppercase font-bold m-4 text-emerald-500 '>Todo App</h1>
        <AddTodoForm />
        <TodoList />
         </div>
    </div>
  );
};

export default App;
