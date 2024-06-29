import { useState } from "react"


export const TodoAdd = ({onNewTodo}) => {

    const [description, setDescription] = useState('');

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="¿Qué deseas hacer?"
                className="form-control"
                value={description}
                onChange={handleInputChange}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-2 w-100"
            >
                Agregar
            </button>
        </form>
    )
}
