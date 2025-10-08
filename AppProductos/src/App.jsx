import { useState } from 'react'
import './App.css'
import NavBar from './pages/NavBar'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import SobreMi from './pages/sobreMi'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pie from './pages/Pie'
import ProductoDetalle from './pages/DetalleProdutos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path="/sobreMi" element={<SobreMi />} />
      </Routes>
      <Pie />
      
    </>
  )
}

export default App
