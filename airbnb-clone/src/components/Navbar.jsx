import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
    return(
        <div className="navbar">
            <img src={airbnbLogo} className='logo'/>
        </div>
    )
}