import { useState } from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import SobreMi from './pages/sobreMi';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pie from './pages/Pie'
import ProductoDetalle from './pages/DetalleProdutos';
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
        <Route path="/sobreMi" element={<SobreMi />} />

        <Route path="/iniciar-sesion" element={<IniciarSesion
              setIsAuthenticated={setIsAuthenticated}
              setUsuario={setUsuario}
            />
          }
        />

        <Route path="/pagar" element={ <RutaProtegida isAuthenticated={isAuthenticated}>
              <Pagar
                setIsAuthenticated={setIsAuthenticated}
                setUsuario={setUsuario}
                usuario={usuario}
              />
            </RutaProtegida>
          }
        />

      </Routes>
      <Pie />
      
    </>
  )
}

export default App
