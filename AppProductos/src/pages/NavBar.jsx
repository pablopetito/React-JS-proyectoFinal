import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Boton from '../componentes/Boton';

function NavBar() {
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
          <li className="navbar-item">
            <Boton texto="Contacto" color="White" colorTex='Black'></Boton>
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