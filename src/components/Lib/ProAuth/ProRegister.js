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

            <div className="container p-0">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="text" className="sign__input" placeholder="Name" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="text" className="sign__input" placeholder="Surname" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="email" className="sign__input" placeholder="Email" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="text" className="sign__input" placeholder="Username" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="password" className="sign__input" placeholder="Password" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <input type="password" className="sign__input" placeholder="Confirm Password" />
                        </div>
                    </div>
                </div>
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
