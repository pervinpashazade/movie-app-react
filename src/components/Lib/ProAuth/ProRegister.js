import React from 'react'
//style
import './style.css'
import imgLogo from '../../../assets/images/logo.svg'
//components
import ProCheckbox from '../ProCheckbox'

function ProRegister(props) {
    const { setModalComponent } = props;
    return (
        <form action="#" className="sign__form">
            <a href="0#" className="sign__logo">
                <img src={imgLogo} alt="FilmGo.az logo" />
            </a>

            <div className="sign__group">
                <input type="text" className="sign__input" placeholder="Name" />
            </div>

            <div className="sign__group">
                <input type="text" className="sign__input" placeholder="Email" />
            </div>

            <div className="sign__group">
                <input type="password" className="sign__input" placeholder="Password" />
            </div>

            <div className="sign__group sign__group--checkbox">
                <ProCheckbox id={'remember'} name={'remember'} isChecked={true} />
                <label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
            </div>

            <button className="sign__btn" type="button">Sign up</button>

            <span className="sign__text">
                Already have an account? <a onClick={() => { setModalComponent("ProLogin") }} >Sign in!</a>
            </span>
        </form>
    )
}

export default ProRegister
