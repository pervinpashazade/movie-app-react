import React from 'react'

import ProContent from '../ProContent'
import ProItemsGrid from '../ProItemsGrid'

import './style.css'

function ProCatalog(props) {

    const { data } = props;

    return (
        <>
            <ProContent>
                <h2 className="content__title">New items</h2>
                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">NEW RELEASES</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV SERIES</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">CARTOONS</a>
                    </li>
                </ul>
                <div className="content__mobile-tabs" id="content__mobile-tabs">
                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <input type="button" value="New items" />
                        <span></span>
                    </div>

                    <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" data-value="new releases"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">NEW RELEASES</a></li>

                            <li className="nav-item" data-value="movies"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a></li>

                            <li className="nav-item" data-value="tv series"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV SERIES</a></li>

                            <li className="nav-item" data-value="cartoons"><a className="nav-link" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">CARTOONS</a></li>
                        </ul>
                    </div>
                </div>
            </ProContent>
            <ProItemsGrid data={data} />
        </>
    )
}

export default ProCatalog