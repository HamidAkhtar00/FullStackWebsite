// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <CartProvider> {/* Wrap your application with the provider */}
    <App />
  </CartProvider>
)
