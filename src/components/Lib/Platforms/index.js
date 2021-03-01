import React, { useEffect } from 'react'
import { connect } from 'react-redux';

//actions
import { fetchPlatforms } from '../../../store/actions/platform';

//components
import ProItemArea from '../ProItemArea'

function Platforms(props) {
    const { fetchPlatforms, platforms, isLoading } = props;

    useEffect(() => {
        fetchPlatforms();
    }, [fetchPlatforms])

    // useEffect(() => {
    //     console.log("platforms data : ", platforms)
    // }, [platforms])

    return (
        <>
            <ProItemArea title={'Platforms'} data={platforms} showMore={false} />
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.platforms.isLoading,
    platforms: state.platforms.platforms,
});

export default connect(
    mapStateToProps, { fetchPlatforms }
)(Platforms);