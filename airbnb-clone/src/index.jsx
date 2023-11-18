import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='page'>
    <Navbar />
    <Hero />
  </div>,
)
