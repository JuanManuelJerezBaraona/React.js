import { useLayoutEffect, useRef } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const imgRef = useRef();

    useLayoutEffect(() => {
        console.log(imgRef.current.getBoundingClientRect());
    }, [sprites])

    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="fs-1 text-capitalize fw-bold">#{id} - {name}</h2>

            {/* Imágenes */}
            <div className="mt-2">
                <img
                    ref={imgRef}
                    src={sprites}
                    alt={name}
                    className="img-thumbnail rounded-circle shadow-lg"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    )
}
