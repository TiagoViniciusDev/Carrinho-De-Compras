import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CartProvider } from './context/CartApi.jsx'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {path: "/", element: <App />},
//   {path: "Finalizar-Compra", element: <FinalizarCompra />}
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
