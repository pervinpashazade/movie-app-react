import React from 'react'
import ProItemsGrid from '../ProItemsGrid';

function ProItemArea(props) {

    const { title, data } = props;

    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="pro-item-area__header">
                            <div><h2 className="section__title">{title}</h2></div>
                            <div><a href="0#" className="section__btn">Show more</a></div>
                        </div>
                    </div>

                    <ProItemsGrid data={data} showOnlyImage={true} showMore={false} />

                </div>
            </div>
        </>
    )
}

export default ProItemArea;