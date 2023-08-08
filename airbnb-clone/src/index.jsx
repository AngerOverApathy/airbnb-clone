import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='page'>
    <Navbar />
    <App />
  </div>,
)
