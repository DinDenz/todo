import React from 'react';
import { ITodo } from "../types/data"
import { useState, useEffect, useRef } from "react";

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

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

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTodo}>Добавить</button>
      </div>
    </div>
  );
}

export default App;
