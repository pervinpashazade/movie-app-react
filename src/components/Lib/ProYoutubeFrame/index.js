import React, { useEffect, useState } from 'react';
import useWindowsSize from '../../../hooks/useWindowsSize'
import './style.css'

const ProYoutubeFrame = (props) => {
    const { initializeVideo, data } = props;

    const [width,] = useWindowsSize()

    //youtube-buttons
    const [isPlay, setIsPlay] = useState(width > 768 ? true : false)
    const [isMute, setIsMute] = useState(true)

    const [isMobile,] = useState(width > 768 ? false : true)
    const [ytPlayer, setYtPlayer] = useState(undefined)

    const initializeYoutubeVideo = () => {
        const onPlayerReady = event => {
            setYtPlayer({ response: event.target }) //set yt player from youtube api
            // document.getElementsByClassName('ytp-pause-overlay').style.visibility='hidden';

            //
            event.target.playVideo();
            if (isMobile) {
                event.target.pauseVideo();
            }
        };

        //create new YT.Player
        const loadVideo = () => {
            //const player = 
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
                    // 'allowsInlineMediaPlayback': '1'
                    // 'end': 60,
                },
            });
            // console.log('youtube player', player)
        }

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
    }

    useEffect(() => {
        if(initializeVideo){
            initializeYoutubeVideo();
        }
    }, [initializeVideo])

    useEffect(() => {
        console.log("video show : ", initializeVideo)
    }, [initializeVideo])


    // const staticImgUrl = "https://gadgetfreeks.com/wp-content/uploads/2020/04/Money-Heist-Season-4.jpg"
    const staticImgUrl = "https://drscdn.500px.org/photo/43239144/q%3D80_m%3D1500/v2?sig=7f6d3eb11051ee674ae04597c38be369388330e6070540f872817c1be65240c7"

    return (
        <div className="youtube-container">
            <div className={width > 640 ? "container" : ""}>
                <div className="youtube-overlay">
                    <div className="poster"></div>

                    <div className="youtube-content">
                        {data.showTitle ?
                            <>
                                <p className="title">{data.title}</p>
                                <p className="description">{data.description}</p>
                            </>
                            :
                            <p className="title">Explore & Watch & enjoy!</p>
                        }
                    </div>

                    <ul className="youtube-buttons">
                        <li>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (isPlay) {
                                        setIsPlay(false);
                                        ytPlayer?.response.pauseVideo();
                                    } else {
                                        setIsPlay(true);
                                        ytPlayer?.response.playVideo();
                                    }
                                }}
                                className="btn-youtube"
                            >
                                {
                                    isPlay ?
                                        <i className="icon ion-ios-pause"></i>
                                        :
                                        <i className="icon ion-ios-play"></i>
                                }
                            </button>
                        </li>
                        <li>
                            <button
                                className="btn-youtube"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (isMute) {
                                        setIsMute(false)
                                        ytPlayer?.response.unMute();
                                        ytPlayer?.response.setVolume(15);
                                    } else {
                                        setIsMute(true)
                                        ytPlayer?.response.mute();
                                        ytPlayer?.response.setVolume(0);
                                    }
                                }}
                            >
                                {
                                    isMute ?
                                        <i className="icon ion-ios-volume-off"></i>
                                        :
                                        <i className="icon ion-ios-volume-high"></i>
                                }
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="youtube-frame" style={{ backgroundImage: `url(${staticImgUrl})` }}>
                    {isMobile ?
                        <div style={{ opacity: isPlay ? 1 : 0 }}>
                            <div id={`youtube-player-${data.id}`} />
                        </div>
                        :
                        <div id={`youtube-player-${data.id}`} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProYoutubeFrame;