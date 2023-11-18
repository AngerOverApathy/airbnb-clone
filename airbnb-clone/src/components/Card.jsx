import React from "react";
import katie from "../assets/katie-zaferes.png";
import star from "../assets/star.png";

export default function Card() {
    return(
        <div className="card">
            <img src={katie} className="katie" alt='katie zaferes'/>
            
            <div className="card-info">
        
                <div className="card-footer">
                    <img src={star} className="star" />
                    <p className="card-rating">4.98</p>
                    <p className="card-reviews"> (56) · USA</p>
                </div>
                
                <p className="card-blurb">Life Lessons With Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </div>
        </div>
    )
}