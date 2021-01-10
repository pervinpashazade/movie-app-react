import React, { useEffect } from 'react';
import './style.css'

const ProYoutubeFrame = (props) => {

    const { id } = props;



    const onPlayerReady = event => {
        event.target.playVideo();
    };

    useEffect(() => {

        const loadVideo = () => {
            // the Player object is created uniquely based on the id in props
            const player = new window.YT.Player(`youtube-player-${id}`, {
                videoId: id,
                events: {
                    onReady: onPlayerReady,
                },
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'autohide': 1,
                    'wmode': 'opaque',
                    'origin': 'http://localhost:3000',
                    'disablekb': 1,
                    'loop': 1,
                    'playlist': id,
                    'mute': 1,
                },
            });
        };

        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        } else { // If script is already there, load the video directly
            loadVideo();
        }
    }, [])

    return (
        <div className="youtube-container">
            <div className="container">
                <div className="youtube-frame">
                    <div id={`youtube-player-${id}`} />
                </div>
            </div>
        </div>
    );
}

export default ProYoutubeFrame;