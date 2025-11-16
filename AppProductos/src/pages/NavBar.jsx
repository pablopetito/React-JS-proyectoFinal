import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Boton from '../componentes/Boton';
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

function NavBar() {

  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { carrito } = useCartContext();

  const [isOpen, setIsOpen] = useState(false);  // ← Esta línea es CRUCIAL

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          App PRODUCTOS version 1.0
        </a>

        <button 
          className={'navbar-toggle' + (isOpen ? ' active' : '')}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={'navbar-menu' + (isOpen ? ' active' : '')}>
          <li className="navbar-item">
            <Link to="/">INICIO</Link>
            
          </li>
          <li className="navbar-item">
            <Link to="/productos">PRODUCTOS</Link>

          </li>
          <li className="navbar-item">
            <a href="#proyectos" className="navbar-link">
              Proyectos
            </a>
          </li>
          <li className="navbar-item">
            <Link to="/sobreMi">Sobre Mi</Link>
            
          </li>

          {/* ENLACE PARA ADMIN - Solo visible para admin */}
            {usuario?.nombre === "admin" && (
              <li>
                <Link to="/agregar-producto">Agregar Producto</Link>
              </li>
            )}
          
          <li >
            {isAuthenticated ? (
              <div >
                <span>Hola, {usuario.nombre}</span>
                <span>Carrito: ({carrito.length})</span>
                <button
                  onClick={cerrarSesion}
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link to="/iniciar-sesion">Iniciar Sesión</Link>
            )}
          </li>    

        </ul>
        </div>
          <h3></h3> 
           <h4> </h4>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar