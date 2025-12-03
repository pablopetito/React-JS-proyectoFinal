import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function Inicio() {
  return (
    <>
    <Helmet> 
        <title>Productos | juegos de mesaa</title> 
        <meta name="description" content="Explora nuestra variedad de juegos de mesa." /> 
    </Helmet>

    <div style={{textAlign: 'center'}}>
    <h1 className="titulo">TALENTO TECH con Vite + React</h1>
    <h3 className="titulo">@2025 - Clase Nro. 25234</h3>
    <h1>| Juegos de Mesa |  </h1>
    <hr />
    <main>
      <h4> TODOS LOS JUEGOS DE MESAS DEL MUNDO EN UN SOLO LUGAR</h4> 
      <Link
        to="/productos"
        style={{
            padding: '10px 20px',
            background: '#166001ff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
        }}>
             EMPEZA HACIENDO CLICK AQUI PARA ELEGIR TU DIVERSION ... !!!
        </Link>
    </main>

    <img src="https://www.glueckshaendler.de/wp-content/uploads/2020/09/Senet-Brettspiel-aus-Holz-mit-Spielsteinen.jpg"></img>
    <br />
        
    <br />
    <hr />
     </div>
    </>
  )
}

export default Inicio