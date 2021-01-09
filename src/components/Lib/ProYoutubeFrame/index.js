import React, { useEffect } from 'react'
//style
import './style.css'

function ProYoutubeFrame(props) {

    // useEffect(() => {
    //     if (!window.YT) { // If not, load the script asynchronously
    //         const tag = document.createElement('script');
    //         tag.src = 'https://www.youtube.com/iframe_api';

    //         // onYouTubeIframeAPIReady will load the video after the script is loaded
    //         window.onYouTubeIframeAPIReady = loadVideo;

    //         const firstScriptTag = document.getElementsByTagName('script')[0];
    //         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //     } else { // If script is already there, load the video directly
    //         loadVideo();
    //     }
    // }, [])

    // const loadVideo = () => {
    //     const { id } = props;

    //     // the Player object is created uniquely based on the id in props
    //     player = new window.YT.Player(`youtube-player-${id}`, {
    //         videoId: id,
    //         events: {
    //             onReady: onPlayerReady,
    //         },
    //     });
    // };

    // const onPlayerReady = event => {
    //     event.target.playVideo();
    // };

    return (
        <div className="youtube-frame">
            <iframe
                title="1323"
                //lacase
                src="https://www.youtube.com/embed/p_PJbmrX4uk?controls=1&disablekb=1&autoplay=1&mute=1&&loop=1&playlist=p_PJbmrX4uk&start=0&end=30"
                //vikings
                // src="https://www.youtube.com/embed/Auzs95InJzo?controls=1&disablekb=1&autoplay=1&mute=1&&loop=1&playlist=Auzs95InJzo&start=0&end=30"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            ></iframe>
        </div >
    )
}

export default ProYoutubeFrame
