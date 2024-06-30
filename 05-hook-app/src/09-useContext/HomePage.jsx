import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <h1 className="text-center mt-2">HomePage <small>{user?.name}</small></h1>
            <hr />

            <pre aria-label="pre">
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}