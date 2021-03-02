import React from 'react'

//style
import './style.css'
import imgLogo from '../../../assets/images/logo.svg'

//components
import ProCheckbox from '../ProCheckbox'

function ProLogin(props) {

    const { setModalComponent } = props;

    return (
        <form action="#" className="sign__form">
            <a href="0#" className="sign__logo">
                <img src={imgLogo} alt="FilmGo.az logo" />
            </a>


            <div className="container p-0">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="text" className="sign__input" placeholder="Email or username" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="password" className="sign__input" placeholder="Password" />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="sign__group sign__group--checkbox">
                            <ProCheckbox id={'remember'} name={'remember'} isChecked={true} />
                            <label for="remember">Remember Me</label>
                        </div>
                    </div>
                </div>
            </div>

            <button className="sign__btn" type="button">Sign in</button>

            <span className="sign__text">
                Don't have an account? <a onClick={() => { setModalComponent("ProRegister") }} >Sign up!</a>
            </span>

            <span className="sign__text">
                <a onClick={() => { setModalComponent("ForgotPassword") }} >Forgot password?</a>
            </span>
        </form>
    )
}

export default ProLogin
