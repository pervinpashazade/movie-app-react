import React from 'react'
import './style.css'

function Poster(props) {

    const { size, data } = props;

    const posterSize = () => {
        switch (size) {
            case "sm":
                return "sm"
            case "lg":
                return "lg"

            default:
                return "";
        }
    }

    //size=> sm / lg
    return (
        <div className={"poster " + posterSize()}>
            {/* {data} */}
            <img src="https://yabancidizi.pw/uploads/series/cover/wandavision.jpg" alt="123" />
        </div>
    )
}

export default Poster
