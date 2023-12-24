import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FinalizarCompra from './components/FinalizarCompra.jsx'
import './index.css'
import { CartProvider } from './context/CartApi.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "Finalizar-Compra", element: <FinalizarCompra />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
