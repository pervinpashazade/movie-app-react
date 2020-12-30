import React from 'react'
//style
import './style.css'

export default function Card(props) {

    //sizes: card--big,
    //link: 0#

    const {
        size,
        // title,
        // image,
        // link,
        // genres,
        // raiting,
        data,
    } = props;

    React.useEffect(() => {
        console.log(data.genres)
        // data.map((item)=>{
        //     console.log(item)
        // })
    }, [data])

    return (
        <div className="item">
            <div className={`card ${size}`}>
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

                    {/* genre.map name&link */}
                    {/* <span className="card__category">
                    {data.genres.map((item) => (
                        <a href="0#">{item}</a>
                    ))}
                </span>
                <span className="card__rate"><i className="icon ion-ios-star"></i>{data.raiting}</span> */}
                </div>
            </div>
        </div>
    )
}
