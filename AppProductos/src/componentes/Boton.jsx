import React from 'react';
import PropTypes from 'prop-types';

function Boton({ texto, color="blue", colorTex="White"}) {
  
  const estiloBoton = {
    backgroundColor: color,
    color: colorTex, 
    margin: '4px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={estiloBoton}>
      {texto}
    </button>
  );
}

Boton.propTypes = {
  color: PropTypes.string,
  texto: PropTypes.string.isRequired,
};
 
export default Boton;