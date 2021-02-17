import React from 'react';
import './style.css';

function ProSkeleton(props) {

    const { type } = props;

    const TYPES = [
        "story_image"
    ]

    // if (React.Children.count(children) === 0) {
    //     return null;
    // }

    return (
        <div className={`skeleton ${type}`}></div>
    )
}

export default ProSkeleton
