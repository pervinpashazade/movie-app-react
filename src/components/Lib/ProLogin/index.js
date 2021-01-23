import React from 'react'
import './style.css'
import imgLogo from '../../../assets/images/logo.svg'

function ProLogin() {
    return (
        <form action="#" class="sign__form">
            <a href="0#" class="sign__logo">
                <img src={imgLogo} alt="FilmGo.az logo" />
            </a>

            <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Email or username" />
            </div>

            <div class="sign__group">
                <input type="password" class="sign__input" placeholder="Password" />
            </div>

            <div class="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked="checked" />
                <label for="remember">Remember Me</label>
            </div>

            <button class="sign__btn" type="button">Sign in</button>

            <span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

            <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
        </form>
    )
}

export default ProLogin
