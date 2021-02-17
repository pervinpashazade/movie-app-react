import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ProYoutubeFrame from '../../components/Lib/ProYoutubeFrame';

//actions
import { fetchHomeBgVideo } from '../../store/actions/homeBgVideo';

const HomeVideoBg = (props) => {

    const { fetchHomeBgVideo, homeBgVideo } = props;

    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        fetchHomeBgVideo();
    }, [fetchHomeBgVideo])

    useEffect(() => {
        if (homeBgVideo.video_id) {
            // console.log("api data : ", homeBgVideo)
            setShowVideo(true)
        }
    }, [homeBgVideo])
    
    // useEffect(() => {
    //     console.log("data api: ", homeBgVideo);
    //     console.log("show video: ", showVideo);
    //     console.log("video id: ", homeBgVideo.video_id);
    //     console.log("showVideo: ", showVideo);
    // }, [homeBgVideo])

    return (
        <>
            {
                !showVideo ?
                    <ProYoutubeFrame
                        // data={{
                        //     id: "p_PJbmrX4uk",
                        //     showTitle: true,
                        //     title: "EXPLORE & WATCH & ENJOY!",
                        //     description: text
                        // }}
                        isLoading={showVideo}
                        data={{
                            // id: showVideo ? homeBgVideo.video_id : "p_PJbmrX4uk",
                            id: homeBgVideo.video_id,
                            showTitle: true,
                            description: homeBgVideo.welcome_text,
                            title: "EXPLORE & WATCH & ENJOY!"
                        }}
                    />
                    :
                    <ProYoutubeFrame
                        initializeVideo={showVideo}
                        data={{
                            // id: showVideo ? homeBgVideo.video_id : "p_PJbmrX4uk",
                            id: homeBgVideo.video_id,
                            showTitle: true,
                            description: homeBgVideo.welcome_text,
                            title: "EXPLORE & WATCH & ENJOY!"
                        }}
                    />
            }

        </>
    )
}

const mapStateToProps = state => ({
    homeBgVideo: state.homeBgVideo.homeBgVideoData
});

export default connect(
    mapStateToProps, { fetchHomeBgVideo }
)(HomeVideoBg);