import React, { useEffect } from 'react'
import ProItemsGrid from '../ProItemsGrid';

function ProItemArea(props) {

    const { data } = props;

    useEffect(() => {
        console.log("datalar", data)
    }, [data])


    //
    // {
    //     "id": 6,
    //     "name": "Disney+",
    //     "image": "https://kinoo.az/uploads/posts/2020-12/disney.jpg"
    // }

    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="section__title">Platforms</h2>
                    </div>

                    {/* <div className="col-12 d-flex justify-content-between">
                        <div><h2 className="section__title">Platforms</h2></div>
                        <div><a href="0#" className="section__btn">Show more</a></div>
                    </div> */}

                    <ProItemsGrid data={data} showOnlyImage={true} showMore={true} />

                    {/* <div className="col-12">
                        <a href="0#" className="section__btn">Show more</a>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default ProItemArea;