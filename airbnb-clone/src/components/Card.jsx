import React from "react";
import star from "../assets/star.png";

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} className="katie"/>
                <div className="card-footer">
                    <img src={star} className="star" />
                    <p className="card-rating">{props.rating}</p>
                    <p className="card-reviews"> {props.reviewCount} · {props.location}</p>
                </div>
            <p className="card-blurb">{props.title}</p>
            <p className="price"><b>{props.price}</b> / person</p>
        </div>

    )
}
