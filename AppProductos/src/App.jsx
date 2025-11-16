import { useState } from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import SobreMi from './pages/SobreMi';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pie from './pages/Pie'
import ProductoDetalle from './pages/DetalleProdutos';
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Dashboard";
import FormularioProducto from './componentes/FormularioProducto';


function App() {

return (
  <div>
    <AuthProvider>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
        <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
        <Route path="/productos" element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
        <Route path="/SobreMi" element={<SobreMi />} />

        {/* RUTA PROTEGIDA - Admin */}
        <Route path="/agregar-producto" 
              element={<RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida>}/>

      </Routes>
      <Pie />
      </ CartProvider>
      </ AuthProvider>
  </div>
  )
}

export default App
