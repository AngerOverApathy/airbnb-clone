import React from "react"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.jsx'

export default function App() {

    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })         

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-container"> {/* Added container */}
                {cards}
            </div>
        </div>
    )
}