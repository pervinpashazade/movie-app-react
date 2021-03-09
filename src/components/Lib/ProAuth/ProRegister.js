import React from 'react'
//style
import './style.css'
import imgLogo from '../../../assets/images/logo.svg'
//components
import ProInput from '../ProInput'
import ProCheckbox from '../ProCheckbox'
//hook
import { useForm } from '../../../hooks/useForm'

function ProRegister(props) {
    const { setModalComponent } = props;

    const initialState = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
        privacy_policy: false,
    }

    const validateForm = (values) => {
        let errors = {};

        //first_name
        if (values.first_name.trim() === '') {
            errors.first_name = 'Name must not be empty';
        } else if (values.first_name.length < 3) {
            errors.first_name = 'Name must be min 3 characters';
        } else if (values.first_name.length > 16) {
            errors.first_name = 'Name must be max 16 characters';
        } else if (/\s/g.test(values.first_name.trim())) {
            errors.first_name = 'Name must not contain any spaces';
        } else if (!/^[a-zA-Z]+$/.test(values.first_name)) {
            errors.first_name = 'Name must contains only letters';
        }

        //last_name
        if (values.last_name.trim() === '') {
            errors.last_name = 'Surname must not be empty';
        } else if (values.last_name.length < 3) {
            errors.last_name = 'Surname must be min 3 characters';
        } else if (values.last_name.length > 16) {
            errors.last_name = 'Surname must be max 16 characters';
        } else if (/\s/g.test(values.last_name.trim())) {
            errors.last_name = 'Surname must not contain any spaces';
        } else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
            errors.last_name = 'Surname must contains only letters';
        }

        //email
        if (values.email.trim() === '') {
            errors.email = 'Email must not be empty';
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
            errors.email = "Email address is invalid";
        }

        //username
        if (values.username.trim() === '') {
            errors.username = 'Username must not be empty';
        } else if (values.username.length < 3) {
            errors.username = 'Username must be min 3 characters';
        } else if (values.username.length > 30) {
            errors.username = 'Username must be max 30 characters';
        } else if (/^\d/.test(values.username)) {
            errors.username = 'Username must not start with a number';
        } else if (/^\./.test(values.username)) {
            errors.username = 'Username must not start with a dot (.)';
        } else if (!/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/.test(values.username)) {
            errors.username = 'Username is invalid';
        }

        //password
        if (values.password.trim() === '') {
            errors.password = 'Password must not be empty'
        } else if (values.password.length < 6) {
            errors.password = 'Password must be min 6 characters';
        } else if (values.password.length > 16) {
            errors.password = 'Password must be max 16 characters';
        } else if (/^\./.test(values.password)) {
            errors.password = 'Password must not start with a dot (.)';
        } else if (!/^[\w](?!.*?\.{2})[\w.]{1,14}[\w]$/.test(values.password)) {
            errors.password = `Password is invalid (!@#"%^:.. &?*()-+= etc. don't use)`;
        }

        //password confirm
        if (values.re_password.trim() === '') {
            errors.re_password = 'Password Confirm must not be empty';
        } else if (values.re_password.trim() !== values.password.trim()) {
            errors.re_password = 'Password Confirm must be same';
        }

        //accept privacy policy
        if (!values.privacy_policy) {
            errors.privacy_policy = 'You must Accept Privacy Policy for sign up';
        }

        return errors;
    }

    const handleSubmit = (e) => {

        console.log("form data : ", values)
    }

    const { values, errors, onChange, onSubmit } = useForm(handleSubmit, initialState, validateForm);

    return (
        <form className="sign__form" onSubmit={onSubmit}>
            <a href="0#" className="sign__logo">
                <img src={imgLogo} alt="FilmGo.az logo" />
            </a>

            <div className="container p-0">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <ProInput
                                type={"text"}
                                name={"first_name"}
                                className={`sign__input ${errors.first_name ? 'validate-error' : ''}`}
                                placeholder={"Name"}
                                value={values.first_name}
                                onChange={onChange}
                                firstLetterUpperCase
                            />
                            {
                                errors.first_name &&
                                <span className="sign__error-message">{errors.first_name}</span>
                            }
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <ProInput
                                type={"text"}
                                name={"last_name"}
                                className={`sign__input ${errors.last_name ? 'validate-error' : ''}`}
                                placeholder={"Surname"}
                                value={values.last_name}
                                onChange={onChange}
                                firstLetterUpperCase
                            />
                            {errors.last_name &&
                                <span className="sign__error-message">{errors.last_name}</span>
                            }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <ProInput
                                // type={"text"}
                                name={"email"}
                                className={`sign__input ${errors.email ? 'validate-error' : ''}`}
                                placeholder={"Email"}
                                value={values.email}
                                onChange={onChange}
                            />
                            {errors.email &&
                                <span className="sign__error-message">{errors.email}</span>
                            }
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <ProInput
                                type={"text"}
                                name={"username"}
                                className={`sign__input ${errors.username ? 'validate-error' : ''}`}
                                placeholder={"Username"}
                                value={values.email}
                                onChange={onChange}
                                noWhiteSpace
                            />
                            {errors.username &&
                                <span className="sign__error-message">{errors.username}</span>
                            }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <ProInput
                                type={"password"}
                                name={"password"}
                                className={`sign__input ${errors.password ? 'validate-error' : ''}`}
                                placeholder={"Password"}
                                value={values.password}
                                onChange={onChange}
                                showInputIcons
                            />
                            {errors.password &&
                                <span className="sign__error-message">{errors.password}</span>
                            }
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="sign__group">
                            <ProInput
                                type={"password"}
                                name={"re_password"}
                                className={`sign__input ${errors.re_password ? 'validate-error' : ''}`}
                                placeholder={"Confirm Password"}
                                value={values.re_password}
                                onChange={onChange}
                                showInputIcons
                            />
                            {errors.re_password &&
                                <span className="sign__error-message">{errors.re_password}</span>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="sign__group sign__group--checkbox">
                <ProCheckbox
                    id={'remember'}
                    name={'privacy_policy'}
                    isChecked={values.privacy_policy}
                    // onChange={handleCheckbox}
                    onChange={onChange}
                />
                <label for="remember"
                    className={`checkbox-label ${errors.privacy_policy ? 'validate-error' : ''}`}
                >
                    I agree to the <a href="privacy.html"
                    >Privacy Policy</a>
                </label>
                {errors.privacy_policy &&
                    <span className="sign__error-message">{errors.privacy_policy}</span>
                }
            </div>

            <button className="sign__btn" type="submit">Sign up</button>

            <span className="sign__text">
                Already have an account? <a href={true} onClick={() => { setModalComponent("ProLogin") }} >Sign in!</a>
            </span>
        </form>
    )
}

export default ProRegister