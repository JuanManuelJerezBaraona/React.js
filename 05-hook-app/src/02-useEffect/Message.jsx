import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        // console.log('Componente montado');

        const onMouseMove = ({x, y}) => {
            // const coords = {x, y};
            setCoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // console.log('Componente desmontado');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);


    return (
        <>
            <p className="text-danger">¡Este usuario ya existe!</p>
            {JSON.stringify(coords)}
        </>
    )
}
