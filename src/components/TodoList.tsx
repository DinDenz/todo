import React from 'react';
import { ITodo } from '../types/data';
import TodoItem from './TodoItem';

interface TodoListProps {
    items: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {

    return (
        <div>
            {items.map(item =>
                <TodoItem key={item.id} {...item} />
            )}
        </div>
    )
}

export default TodoList;

