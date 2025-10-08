function Tarjeta({ titulo, descripcion, botonTexto }) {
    return (
        <>
        <div className="tabla-card">
        <div className="card1">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button>{botonTexto}</button>
        </div>
        </div>
        </>
    );
}
export default Tarjeta;