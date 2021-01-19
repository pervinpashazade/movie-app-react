import React from 'react'
import './style.css'

function ProSection(props) {

    const { proClasses, proStyles, children } = props;

    if (React.Children.count(children) === 0) {
        return null;
    }

    return (
        <section className={proClasses} style={proStyles}>
            {children}
        </section>
    )
}

export default ProSection