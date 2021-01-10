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

//genre imgs
import action from '../../assets/images/new/action.jpeg'
import adventure from '../../assets/images/new/adventure.jpeg'
import animation from '../../assets/images/new/animation.jpeg'
import biography from '../../assets/images/new/biography.jpeg'
import comedy from '../../assets/images/new/comedy.jpeg'
import crime from '../../assets/images/new/crime.jpeg'
import dedectiv from '../../assets/images/new/dedectiv.jpeg'
import documentary from '../../assets/images/new/documentary.jpeg'
import drama from '../../assets/images/new/drama.jpeg'
import family from '../../assets/images/new/family.jpeg'
import fantasy from '../../assets/images/new/fantasy.jpeg'
import history from '../../assets/images/new/history.jpeg'
import horror from '../../assets/images/new/horror.jpeg'
import musical from '../../assets/images/new/musical.jpeg'
import mystery from '../../assets/images/new/mystery.jpeg'
import romance from '../../assets/images/new/romance.jpeg'
import sciFi from '../../assets/images/new/sci-fi.jpeg'
import shortfilm from '../../assets/images/new/shortfilm.jpeg'
import sport from '../../assets/images/new/sport.jpeg'
import thriller from '../../assets/images/new/thriller.jpeg'
import war from '../../assets/images/new/war.jpeg'
import ReactYoutube from '../../components/Lib/ReactYoutube';

export default function Home() {

    const genres = [
        { name: "Action", img: action },
        { name: "Adventure", img: adventure },
        { name: "Animation", img: animation },
        { name: "Biography", img: biography },
        { name: "Comedy", img: comedy },
        { name: "Crime", img: crime },
        { name: "Dedective", img: dedectiv },
        { name: "Documentary", img: documentary },
        { name: "Drama", img: drama },
        { name: "Family", img: family },
        { name: "Fantasy", img: fantasy },
        { name: "History", img: history },
        { name: "Horror", img: horror },
        { name: "Musical", img: musical },
        { name: "Mystery", img: mystery },
        { name: "Romance", img: romance },
        { name: "Sci-Fi", img: sciFi },
        { name: "Short Film", img: shortfilm },
        { name: "Sport", img: sport },
        { name: "Thriller", img: thriller },
        { name: "War", img: war },
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