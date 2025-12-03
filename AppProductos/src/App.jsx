import { useState } from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import SobreMi from './pages/SobreMi';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Pie from './pages/Pie'
import ProductoDetalle from './pages/DetalleProdutos';
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
import FormularioProducto from './componentes/FormularioProducto';
import EditarProductos from './componentes/EditarProductos';
import EliminarProducto from './componentes/EliminarProducto';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


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
        <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
        <Route path="/productos" element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
        <Route path="/SobreMi" element={<SobreMi />} />

        {/* RUTAS PROTEGIDA - Admin */}
        <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
        <Route path="/agregar-producto" element={<RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida>}/>
        <Route path="/eliminar-productos" element={<RutaProtegida soloAdmin={true}><EliminarProducto /></RutaProtegida>}/>  
        <Route path="/editar-productos" element={<RutaProtegida soloAdmin={true}><EditarProductos /></RutaProtegida>}/>

        {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
      <Pie />
      </ CartProvider>
      </ AuthProvider>
  </div>
  )
}

export default App
