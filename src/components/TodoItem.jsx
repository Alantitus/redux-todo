import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const arr=[]

  return (
   <>
      <li className='mt-3'>
        <span className='text-xl me-5 mt-5 h-screen'
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' 
          }}
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          {todo.text}
        </span>
        <button className='btn btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </li>
      
   </>
  );
};

export default TodoItem;
