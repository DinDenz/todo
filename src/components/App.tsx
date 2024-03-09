import React from 'react';
import { ITodo } from "../types/data";
import TodoList from './TodoList';
import { useState, useEffect, useRef } from "react";

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
      setValue("");
    }
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    }))
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="App">
      <div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange} />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
