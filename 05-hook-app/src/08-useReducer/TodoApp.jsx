import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {

    // useTodo
    // todos, handleDeleteTodo, handleToggleTodo, handleNewTodo

    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

    return (
        <>
            <h1>ToDo: {todos.length} 📋</h1>
            <h2 className="fs-5">
                pendientes: {todos.filter(todo => !todo.done).length}
                {todos.filter(todo => !todo.done).length === 0 ? ' 😁' : ' 👀'}
            </h2>
            <hr />

            <div className="row">
                <div className="col-12 col-sm-6 col-md-7">

                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-12 col-sm-6 mt-5 col-md-5 mt-sm-0">
                    <h4>Agrega ToDo 👇</h4>
                    <hr />
                    
                    <TodoAdd 
                        onNewTodo={handleNewTodo} 
                    />
                </div>
            </div>

        </>
    )
}
