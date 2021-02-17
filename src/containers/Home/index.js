import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchGenres } from '../../store/actions/genre';

//main components
import HomeVideoBg from './HomeVideoBg';
import HomeSliderBg from './HomeSliderBg';
import ProCatalog from '../../components/Lib/ProCatalog';
import ProSection from '../../components/Lib/ProSection';
import ProGenres from '../../components/Lib/ProGenres';
import Platforms from '../../components/Lib/Platforms';


import ProItemArea from '../../components/Lib/ProItemArea';
import ProAbout from '../../components/Lib/ProAbout';
// import ProHowItWorks from '../../components/Lib/ProHowItWorks';

//styles
import './style.css'

// fake static data
import moviesData from '../../server/movies.json';
import platformsData from '../../server/platforms.json';


//Platforms section bg image
import platformsSectionBgImage from '../../assets/images/section/section.jpg'

function Home(props) {

    // const { fetchGenres, genres } = props;

    return (
        <>
            <section className="home">
                <HomeVideoBg />
                <ProGenres />
                <HomeSliderBg />
            </section>
            <section className="content">
                <ProCatalog data={moviesData.data} />
            </section>
            <ProSection
                proClasses="section section--bg"
                proStyles={
                    {
                        backgroundImage: `url(${platformsSectionBgImage})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        backgroundReapeat: 'norepeat'
                    }}>
                {/* <ProItemArea data={platformsData.data} /> */}
                <Platforms data={platformsData} />
            </ProSection>
            <ProSection proClasses={"section"}>
                <ProAbout />
            </ProSection>
            {/* <ProSection proClasses={"section section--dark"}>
                <ProHowItWorks />
            </ProSection> */}
        </>
    )
}

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps, { fetchGenres }
)(Home);