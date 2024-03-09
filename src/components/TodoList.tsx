import React from 'react';
import { ITodo } from '../types/data';
import TodoItem from './TodoItem';

interface TodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, toggleTodo, removeTodo }) => {

    return (
        <div>
            {items.map(item =>
                <TodoItem key={item.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    {...item} />
            )}
        </div>
    )
}

export default TodoList;

