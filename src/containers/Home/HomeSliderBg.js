import React, { useState } from 'react'
import CustomCarousel from '../../components/Lib/Carousel'
import ProCarousel from '../../components/Lib/ProCarousel'
import Card from '../../components/Lib/Card'

//imgs
import home__bg1 from '../../assets/vendors/img/home/home__bg.jpg'
import home__bg2 from '../../assets/vendors/img/home/home__bg2.jpg'
import home__bg3 from '../../assets/vendors/img/home/home__bg3.jpg'
import home__bg4 from '../../assets/vendors/img/home/home__bg4.jpg'

//data
import moviesData from '../../server/movies.json'

export default function HomeSliderBg() {

    const [prevClick, setPrevClick] = useState(false)
    const [nextClick, setNextClick] = useState(false)

    const dataImages = [
        home__bg1,
        home__bg2,
        home__bg3,
        home__bg4
    ]

    return (
        <>
            <div className="home__bg">
                <CustomCarousel
                    images={dataImages}
                    prevClick={prevClick}
                    nextClick={nextClick}
                    setPrevClick={setPrevClick}
                    setNextClick={setNextClick}
                />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>
                        <button onClick={() => (setPrevClick(true))}
                            className="home__nav home__nav--prev" type="button">
                            <i className="icon ion-ios-arrow-round-back"></i>
                        </button>
                        <button onClick={() => (setNextClick(true))}
                            className="home__nav home__nav--next" type="button">
                            <i className="icon ion-ios-arrow-round-forward"></i>
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="home__carousel">
                            <ProCarousel
                                loop={true}
                                prevClick={prevClick}
                                nextClick={nextClick}
                                setPrevClick={setPrevClick}
                                setNextClick={setNextClick}
                            >
                                {moviesData.data.map((item, key) =>
                                    <div className="item" key={key}>
                                        <Card size={"card--big"} data={item} />
                                    </div>
                                )}
                            </ProCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
