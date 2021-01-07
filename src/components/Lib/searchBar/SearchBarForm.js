import React from 'react'

const SearchBarForm = (props) => {
    
    const {open} = props;

    return (
        <form action="#" className={'header__search' + (!open ? '' : ' header__search--active')}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input type="text" placeholder="Search for a movie, TV Series that you are looking for" />
                            <button type="button">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchBarForm;