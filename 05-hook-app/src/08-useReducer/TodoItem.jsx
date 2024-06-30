

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span 
                onClick={() => onToggleTodo(todo.id)}
                className={`fs-5 ${todo.done ? 'text-decoration-line-through' : ''}`}
                aria-label="span"
            >
                {todo.done ? '✅' : '🟩'} {todo.description}
            </span>
            <button 
                onClick={() => onDeleteTodo(todo.id)}
                className="btn btn-danger">
                    🗑️
            </button>
        </li>
    )
}
