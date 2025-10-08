import React from 'react'
import Boton from '../componentes/Boton'

function SobreMi() {
  return (
    <>

    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
            alt="Paisaje"
          />
        </div>
        <div className="card-content">
          <h3 className="card-title">SOBRE MI</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem sit, fugiat error ut sed cupiditate eum amet accusantium hic nostrum dolores magnam quae inventore dolor at corporis eos in.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, fugit facere. In reprehenderit minima nostrum deserunt eius enim tempore ea ipsa. Tenetur, sint animi sed perspiciatis et eveniet nobis quo!    
            provident? Nesciunt pariatur eos hic. Maxime voluptatem cum quis neque eius nobis, enim alias!
          </p>
          <Boton texto="Ver Mas" color="green"></Boton>
        </div>
      </div>
    </div>
    </>
  )
}

export default SobreMi