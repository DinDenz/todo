import { toggleTodo, removeTodo } from './../store/todoSlice';
import { useAppDispatch } from './../hooks/hooks';


interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
  }

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <input type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}/>
            <span>{title}</span>
            <button onClick={() => dispatch(removeTodo(id))}>x</button>
        </div >
    )
}

export default TodoItem;
