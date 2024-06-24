
export const LoadingCard = () => {
    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="fs-1 text-capitalize fw-bold">Cargando...</h2>

            {/* Imágenes */}
            <div className="mt-2">
                <div
                    className="img-thumbnail rounded-circle shadow-lg d-flex justify-content-center align-items-center"
                    style={{ width: '300px', height: '300px' }}
                >
                    <div className="spinner-border fs-1" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
