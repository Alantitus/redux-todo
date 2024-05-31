import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    
    <form className='p-4'  onSubmit={handleSubmit}>
      <input className='p-2 rounded border'
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button className='btn btn-success p-2 ms-2' type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
