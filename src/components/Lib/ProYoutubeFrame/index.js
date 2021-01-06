import React, { useEffect } from 'react'
//style
import './style.css'

function ProYoutubeFrame() {

    useEffect(() => {

    }, [])

    return (
        // <>
        //     <div class="video-background">
        //         <div class="video-foreground">
        //             <iframe
        //             title="123"
        //                 allow="autoplay"
        //                 src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
        //                 frameborder="0"
        //                 allowfullscreen>
        //             </iframe>
        //         </div>
        //     </div>
        // </>

        <div className="youtube-frame">
            <iframe
                title="1323"
                src="https://www.youtube.com/embed/p_PJbmrX4uk?controls=0&disablekb=1&autoplay=1&mute=1&&loop=1&playlist=p_PJbmrX4uk"
                // src="https://www.youtube.com/embed/p_PJbmrX4uk?enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0&origin=https://kinoo.az&mute=1&autoplay=1&loop=1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            ></iframe>
        </div >
    )
}

export default ProYoutubeFrame
