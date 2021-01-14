import React, { useEffect } from 'react';
import useWindowsSize from '../../../hooks/useWindowsSize'
import './style.css'

const ProYoutubeFrame = (props) => {

    const { data } = props;
    const [width,] = useWindowsSize()

    const onPlayerReady = event => {
        event.target.playVideo();
    };

    useEffect(() => {

        const loadVideo = () => {
            new window.YT.Player(`youtube-player-${data.id}`, {
                videoId: data.id,
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
                    'playlist': data.id,
                    'mute': 1,
                    'volume': 0,
                    'playsinline': 1,
                    // 'end': 60,
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
    }, [data.id])

    // React.Children.count(props.children) === 0

    return (
        <div className="youtube-container">
            <div className={width > 640 && "container"}>
                {data.title &&
                    // <div className={width < 640 && "container"}>
                    <div className="youtube-overlay">
                        <div className="youtube-content">
                            <p className="title">{data.title}</p>
                            <p className="description">{data.description}</p>
                        </div>
                        <ul className="youtube-buttons">
                            {/* <li>
                                <a href="0#" className="btn-youtube play"><i class="icon ion-ios-play"></i></a>
                            </li> */}
                            <li>
                                <a href="0#" className="btn-youtube"><i class="icon ion-ios-pause"></i></a>
                            </li>
                            <li>
                                <a href="0#" className="btn-youtube"><i class="icon ion-ios-volume-off"></i></a>
                            </li>
                            {/* <li>
                                <a href="0#" className="btn-youtube"><i class="icon ion-ios-volume-high"></i></a>
                            </li> */}
                        </ul>
                    </div>
                    //</div>
                }
                <div className="youtube-frame">
                    <div id={`youtube-player-${data.id}`} />
                </div>
            </div>
        </div>
    )
}

export default ProYoutubeFrame;