import React from 'react'
//components
import Card from '../Card'

function ProItemsGrid(props) {

    const { data } = props;

    return (
        <>
            <div className="container">
                {/* 'active show' */}
                <div className="fade active show">
                    <div className="row">
                        {data.map((item, key) =>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={key}>
                                <Card data={item} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProItemsGrid