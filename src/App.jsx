import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FinalizarCompra from './components/FinalizarCompra'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/Carrinho-De-Compras' element={<Home />}/>
          <Route index path='/Carrinho-De-Compras/Finalizar-Compra' element={<FinalizarCompra />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
