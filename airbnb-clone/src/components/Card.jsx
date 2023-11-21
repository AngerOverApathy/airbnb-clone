import React from "react";
import star from "../assets/star.png";


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="katie"/>
                <div className="card-footer">
                    <img src={star} className="star" />
                    <p className="card-rating">{props.stats.rating}</p>
                    <p className="card-reviews"> ({props.stats.reviewCount}) · {props.location}</p>
                </div>
            <p className="card-blurb">{props.title}</p>
            <p className="price"><b>{props.price}</b> / person</p>
        </div>

    )
}
