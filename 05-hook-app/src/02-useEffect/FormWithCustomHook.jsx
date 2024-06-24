import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {/* {username === 'juan2' && <Message />} */}

            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button 
                onClick={onResetForm}
                className="btn btn-danger mt-2 shadow">
                    Borrar
            </button>
        </>
    )
}
