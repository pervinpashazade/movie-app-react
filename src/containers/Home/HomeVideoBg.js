import React from 'react'
import ProYoutubeFrame from '../../components/Lib/ProYoutubeFrame';

function HomeVideoBg() {

    let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."

    return (
        <>
            <ProYoutubeFrame
                data={{
                    id: "p_PJbmrX4uk",
                    title: "Welcome!",
                    description: text
                }}
            />
        </>
    )
}

export default HomeVideoBg;