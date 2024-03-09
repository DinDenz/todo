import React from 'react';
import { ITodo } from '../types/data';

interface TodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItem> = (props) => {
    const { id, title, complete, toggleTodo, removeTodo } = props;

    return (
        <div>
            <input type="checkbox" 
            checked={complete}
            onChange = {() => toggleTodo(id) }/>
            {title}
            <button onClick={() => removeTodo(id)} >x</button>
        </div>
    )
}

export default TodoItem;
