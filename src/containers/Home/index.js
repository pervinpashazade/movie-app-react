import React from 'react'

//main components
import HomeVideoBg from './HomeVideoBg'
import HomeSliderBg from './HomeSliderBg'
import ProCatalog from '../../components/Lib/ProCatalog'

import ProContent from '../../components/Lib/ProContent';
import StoryCircle from '../../components/Lib/ProStory/StoryCircle';
import StoryCircleSlider from '../../components/Lib/ProStory/StoryCircleSlider';

//styles
import './style.css'

// fake static data
import moviesData from '../../server/movies.json'

export default function Home() {

    const genres = [
        { name: "Action" },
        { name: "Triller" },
        { name: "Most Popular" },
        { name: "4K" },
        { name: "HD" },
        { name: "Triller" },
        { name: "Romantic" },
        { name: "Comedi" },
        { name: "test9" },
        { name: "test10" },
        { name: "test11" },
        { name: "test12" },
    ]

    return (
        <>
            <section className="home">
                <HomeVideoBg />
                <ProContent>
                    <StoryCircleSlider
                        breakpoint="story"
                    >
                        {genres.map((item, key) => (
                            <StoryCircle data={item} showTitle={true} key={key} />
                        ))}
                    </StoryCircleSlider>
                </ProContent>
                <HomeSliderBg />
            </section>
            <section className="content">
                <ProCatalog data={moviesData.data} />
            </section>
        </>
    )
}