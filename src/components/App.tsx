import React from 'react';
import TodoList from './TodoList';
import { useState, useEffect, useRef } from "react";
import { addTodo } from './../store/todoSlice';
import { useAppDispatch } from '../hooks/hooks';

const App: React.FC= () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (value.trim().length) {
      dispatch(addTodo(value));
      setValue('');
    }
  }
  /*const handleActionKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(value));
      setValue('');
    }
  }*/

  /*const inputRef = useRef<HTMLInputElement>(null);*/


  /*useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);*/

  return (
    <div className="App">
      <div>
        <input
          /*ref={inputRef}*/
          placeholder='new todo'
          type="text"
          value={value}
          /*onKeyDown={handleKeyDown}*/
          onChange={(event) => setValue(event.target.value)} />
        <button onClick={handleAction}>Добавить</button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
