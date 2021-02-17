import React, { useEffect } from 'react'
import './style.css'
import { connect } from 'react-redux';

// actions
import { fetchGenres } from '../../../store/actions/genre';

//components
import SkeletonStory from '../ProSkeleton/components/SkeletonStory'
import ProContent from '../ProContent';
import StoryCircle from '../ProStory/StoryCircle';
import StoryCircleSlider from '../ProStory/StoryCircleSlider';

const ProGenres = (props) => {

    const { fetchGenres, genres, isLoading } = props;

    useEffect(() => {
        fetchGenres()
    }, [fetchGenres])

    // console.log("loading: ", isLoading);
    // console.log("api genres: ", genres);
    // console.log("loading: ", isLoading);

    return (
        <>
            <ProContent>
                {/* <SkeletonStory type={"story_image"} /> */}
                {isLoading ? <SkeletonStory type={"story_image"} />
                    :
                    <StoryCircleSlider
                        breakpoint="story"
                        showScroolBar={true}
                    >
                        {genres.map((item, key) => (
                            <StoryCircle data={item} showTitle={true} key={key} />
                        ))}

                    </StoryCircleSlider>
                }

            </ProContent>
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.genres.isLoading,
    genres: state.genres.genres,
});

export default connect(
    mapStateToProps, { fetchGenres }
)(ProGenres)