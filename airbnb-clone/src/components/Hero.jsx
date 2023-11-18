import React from "react";
import photoGrid from "../assets/photo-grid.png";

export default function Hero() {
    return(
        <section className="hero">
            <img className='photogrid' src={photoGrid} alt="photo grid" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-blurb">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}