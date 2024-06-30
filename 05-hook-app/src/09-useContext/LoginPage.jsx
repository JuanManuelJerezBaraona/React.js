import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1 className="text-center mt-2">LoginPage</h1>
            <hr />
            
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
                onClick={() => setUser({
                    id: 123,
                    name: 'Juan',
                    email: 'juan@gmail.com'
                })}
                className="btn btn-primary"
            >
                Establecer usuario
            </button>
        </>
    )
}