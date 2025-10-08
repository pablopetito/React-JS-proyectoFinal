import { useState, useEffect } from "react";

export default function MockAPI() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68d4830d214be68f8c696bfb.mockapi.io/api/articulos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  console.log(productos)
  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;
  return (
    
      <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '0',
      listStyle: 'none',
    }}>
        {productos.map((producto) => (
          <div className="tarjeta">
          <li key={producto.id}>
            Nombre: {producto.name}
            <br />
            Descripción: {producto.descripcion}
            <br />
            Codigo-Id: {producto.id}
            <br />
            Avatar: {producto.avatar}
          </li>
          </div>
        ))}
      </ul>
  );
}