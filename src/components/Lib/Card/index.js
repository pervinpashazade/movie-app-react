import React from 'react'
//style
import './style.css'

export default function Card(props) {

    //sizes: card--big,
    //link: 0#

    const {
        size,
        data,
    } = props;

    return (
        <div className={`card ${size ? size : ""}`}>
            <div className="card__cover">
                {data.image &&
                    <img src={data.image} alt="" />
                }
                <a href={"0#"} className="card__play">
                    <i className="icon ion-ios-play"></i>
                </a>
            </div>
            <div className="card__content">
                <h3 className="card__title"><a href="0#">{data.name}</a></h3>
                <span className="card__category">
                    {data.genres.map((item, index) => (
                        <a href={item.link} key={index}>{item.name}</a>
                    ))}
                </span>
                <span className="card__rate"><i className="icon ion-ios-star"></i>{data.raiting}</span>
            </div>
        </div>
    )
}