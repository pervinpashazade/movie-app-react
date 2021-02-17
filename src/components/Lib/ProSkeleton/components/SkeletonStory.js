import React from 'react'
import '../style.css'
import '../assets/skeletonStory.css'
//components
import ProSkeleton from '..'
import Shimmer from '../Shimmer'
import StoryCircleSlider from '../../ProStory/StoryCircleSlider'

function SkeletonStory() {

    return (
        <div className="skeleton-wrapper">
            <StoryCircleSlider
                breakpoint="story"
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
                    <div key={key} className="skeleton-story">
                        <ProSkeleton type={"story_image"} />
                        <div className="title-wrapper">
                            <ProSkeleton type={"story_title"} />
                        </div>
                    </div>
                ))}
            </StoryCircleSlider>
            <Shimmer />
        </div>
    )
}

export default SkeletonStory
