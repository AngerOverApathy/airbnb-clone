import React from "react";
import photoGrid from "../assets/photo-grid.png";

export default function Hero() {
    return(
        <div className="hero">
            <img className='photogrid' src={photoGrid} alt="photo grid" />
        </div>
    )
}