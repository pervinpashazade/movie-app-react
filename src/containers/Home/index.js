import React from 'react'

//main components
import HomeSliderBg from './HomeSliderBg'
import ProCatalog from '../../components/Lib/ProCatalog'

//styles
import './style.css'

// fake static data
import moviesData from '../../server/movies.json'

export default function Home() {
    return (
        <>
            <section className="home">
                <HomeSliderBg />
            </section>
            <section className="content">
                <ProCatalog data={moviesData.data} />
            </section>
        </>
    )
}