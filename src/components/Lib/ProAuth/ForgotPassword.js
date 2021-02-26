import React from 'react'
//style
import './style.css'
import imgLogo from '../../../assets/images/logo.svg'
//components
import ProCheckbox from '../ProCheckbox'

function ForgetPassword() {
    return (
        <form action="#" class="sign__form">
            <a href="0#" className="sign__logo">
                <img src={imgLogo} alt="FilmGo.az logo" />
            </a>

            <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Email" />
            </div>

            <div class="sign__group sign__group--checkbox">
                <ProCheckbox id={'remember'} name={'remember'} isChecked={true} />
                <label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
            </div>

            <button class="sign__btn" type="button">Sign in</button>

            <span class="sign__text">We will send a password to your Email</span>
        </form>
    )
}

export default ForgetPassword
