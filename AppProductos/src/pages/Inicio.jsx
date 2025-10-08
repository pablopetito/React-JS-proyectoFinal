import React from 'react'
import Tarjeta from '../componentes/Tarjeta'

function Inicio() {
  return (
    <>
    <h1 className="titulo">TALENTO TECH con Vite + React</h1>
    <h3 className="titulo">@2025 - Clase Nro. 25234</h3>
            
        <div>
            <Tarjeta
                titulo="Oferta"
                descripcion="20% de descuento en todos los productos"
                botonTexto="Ver más"
            />
            <Tarjeta
                titulo="Nuevo producto"
                descripcion="Descubre nuestra última innovación"
                botonTexto="Comprar ahora"
            />
            <Tarjeta
                titulo="Envío gratis"
                descripcion="En compras superiores a $50"
                botonTexto="Aprovechar"
            />
        </div>
    </>
  )
}

export default Inicio