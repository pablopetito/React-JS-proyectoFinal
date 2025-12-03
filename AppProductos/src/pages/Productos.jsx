import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Boton from '../componentes/Boton';

import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

    // Contexto 
  const { agregarAlCarrito } = useCartContext();
  const { usuario } = useAuthContext();

  const esAdmin = usuario?.nombre === "admin";

// https://68d4830d214be68f8c696bfb.mockapi.io/api/articulos
// https://68d482e3214be68f8c696ae2.mockapi.io/api/productos
  useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
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

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
      <>
      <ul id="lista-productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            producto={producto}
            esAdmin={esAdmin}
            onEditar={() => manejarEditar(producto)}
            onEliminar={() => manejarEliminar(producto)}
            onAgregarCarrito={() => agregarAlCarrito(producto)}
          />
        ))}
      </ul>
    </>
);
}

const ProductoItem = ({ producto, esAdmin, onEditar, onEliminar, onAgregarCarrito }) => (
  <li>
    <h2>{producto.nombre}</h2>
    <p>Descripción: {producto.descripcion}</p>
    <img src={producto.avatar} alt={producto.nombre} width="80%" />
    <p><strong>Precio: ${producto.precio}</strong></p>
   
    <Link to={`/productos/${producto.id}`} state={{producto}}>
      <Boton texto="Más detalles" color="green" colorTex="White"/>     
    </Link>
      
      <button style={{ backgroundColor: "red", color: "White" }} onClick={onAgregarCarrito}>Comprar</button>

    {/* BOTONES ADMIN - Agregar contenedor */}
    {esAdmin && (
      <div className="btn-admin-container">
        <hr/>
        <button style={{ backgroundColor: "#ffd700", color: "Black" }} onClick={onEditar} className="btn-editar">
          Editar
        </button>
        <button style={{ backgroundColor: "#daa520", color: "Black" }} onClick={onEliminar} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    )}
  </li>
);