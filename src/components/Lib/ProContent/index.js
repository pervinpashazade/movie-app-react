import React from 'react'

//style
import './style.css'

function ProContent({ children }) {
    if (React.Children.count(children) === 0) {
        return null;
    }
    return (
        <>
            <div className="content__head">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProContent;