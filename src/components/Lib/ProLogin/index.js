import React from 'react'
import './style.css'
import imgLogo from '../../../assets/images/logo.svg'

function ProLogin() {
    return (
        <form action="#" className="sign__form">
            <a href="0#" className="sign__logo">
                <img src={imgLogo} alt="FilmGo.az logo" />
            </a>

            <div className="sign__group">
                <input type="text" className="sign__input" placeholder="Email or username" />
            </div>

            <div className="sign__group">
                <input type="password" className="sign__input" placeholder="Password" />
            </div>

            {/* <div className="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked="checked" />
                <label for="remember">Remember Me</label>
            </div> */}

            <button className="sign__btn" type="button">Sign in</button>

            <span className="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

            <span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
        </form>
    )
}

export default ProLogin
