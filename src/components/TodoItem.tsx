import { useAppDispatch } from '../hooks';
import { toggleTodo, removeTodo } from '../store/todoSlice';

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;
