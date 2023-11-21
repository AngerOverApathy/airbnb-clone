import React from "react"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.jsx'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })               

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-container">
                {cards}
            </div>
        </div>
    )
}