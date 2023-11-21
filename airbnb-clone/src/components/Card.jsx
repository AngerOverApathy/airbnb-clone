import React from "react";
import star from "../assets/star.png";


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="katie"/>
                <div className="card-footer">
                    <img src={star} className="star" />
                    <p className="card-rating">{props.item.stats.rating}</p>
                    <p className="card-reviews"> ({props.item.stats.reviewCount}) · {props.item.location}</p>
                </div>
            <p className="card-blurb">{props.item.title}</p>
            <p className="price"><b>{props.item.price}</b> / person</p>
        </div>

    )
}
