import React, { useEffect, useState } from 'react'
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
                <CustomCarousel images={dataImages} slidesToShow={1} slidesToScroll={1} />
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
                                prevClick={prevClick}
                                nextClick={nextClick}
                                setPrevClick={setPrevClick}
                                setNextClick={setNextClick}
                            >
                                {moviesData.data.map((item, key) =>
                                    <Card size={"card--big"} data={item} key={key} />
                                )}
                            </ProCarousel>
                        </div>
                    </div>
                </div>



                {/* <div className="col-12">
            <div className="owl-carousel home__carousel owl-loaded">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style="transform: translate3d(-1160px, 0px, 0px); transition: all 0s ease 0s; width: 3480px;">
                        <div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">
                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Action</a>
                                        <a href="0#">Triler</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">
                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Benched</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Comedy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">
                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Whitney</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Romance</a>
                                        <a href="0#">Drama</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>

                        </div>
                        </div>
                        <div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Blindspotting</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Comedy</a>
                                        <a href="0#">Drama</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>

                        </div>
                        </div>
                        <div className="owl-item active" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Action</a>
                                        <a href="0#">Triler</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item active" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Benched</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Comedy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item active" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Whitney</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Romance</a>
                                        <a href="0#">Drama</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item active" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Blindspotting</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Comedy</a>
                                        <a href="0#">Drama</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">I Dream in Another Language</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Action</a>
                                        <a href="0#">Triler</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover2.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Benched</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Comedy</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover3.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Whitney</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Romance</a>
                                        <a href="0#">Drama</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                </div>
                            </div>

                        </div></div><div className="owl-item cloned" style="width: 240px; margin-right: 50px;"><div className="item">

                            <div className="card card--big">
                                <div className="card__cover">
                                    <img src="img/covers/cover4.jpg" alt="" />
                                    <a href="0#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"><a href="0#">Blindspotting</a></h3>
                                    <span className="card__category">
                                        <a href="0#">Comedy</a>
                                        <a href="0#">Drama</a>
                                    </span>
                                    <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                </div>
                            </div>

                        </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
        </div> */}
            </div>
        </>
    )
}
