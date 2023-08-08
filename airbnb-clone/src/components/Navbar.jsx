import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar__left">
                <img src={airbnbLogo} className='logo'/>
            </div>
        </div>
    )
}