import React, { useEffect } from 'react'
import './style.css'
import { connect } from 'react-redux';

// actions
import { fetchGenres } from '../../../store/actions/genre';

//components
import ProContent from '../ProContent';
import StoryCircle from '../ProStory/StoryCircle';
import StoryCircleSlider from '../ProStory/StoryCircleSlider';

const ProGenres = (props) => {

    const { fetchGenres, genres } = props;

    useEffect(() => {
        fetchGenres()
    }, [fetchGenres])

    useEffect(() => {
        console.log("genres api home index : ", genres)
    }, [genres])

    return (
        <>
            <ProContent>
                <StoryCircleSlider
                    breakpoint="story"
                >
                    {genres.map((item, key) => (
                        <StoryCircle data={item} showTitle={true} key={key} />
                    ))}

                </StoryCircleSlider>
            </ProContent>
        </>
    )
}

const mapStateToProps = state => ({
    genres: state.genres.genres
});

export default connect(
    mapStateToProps, { fetchGenres }
)(ProGenres)