import React, { useEffect } from 'react'
//style
import './style.css'

function ProYoutubeFrame() {

    useEffect(() => {

    }, [])

    return (
        <div className="youtube-frame">
            <iframe
                title="1323"
                //lacase
                // src="https://www.youtube.com/embed/p_PJbmrX4uk?controls=1&disablekb=1&autoplay=1&mute=1&&loop=1&playlist=p_PJbmrX4uk&start=0&end=30"
                //vikings
                src="https://www.youtube.com/embed/Auzs95InJzo?controls=1&disablekb=1&autoplay=1&mute=1&&loop=1&playlist=Auzs95InJzo&start=0&end=30"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            ></iframe>
        </div >
    )
}

export default ProYoutubeFrame
