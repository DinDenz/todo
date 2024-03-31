import React from 'react';
import TodoList from './TodoList';
import { useState, useEffect, useRef } from "react";
import { addTodo } from './../store/todoSlice';
import { useAppDispatch } from '../hooks/hooks';
import Form from './Form/Form';

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
  /*--------------------------------------------------------------------------------------------------------------*/
  //react hook form

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
      <hr />
      <h2>react hook form</h2>
      <Form/>
    </div>
  );
}

export default App;
