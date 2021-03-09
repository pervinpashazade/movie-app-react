import React, { useState } from 'react';
import './style.css';
//utils
import {
    capitalizeFirstLetter,
} from '../../../utils/customStrings';
import { removeWhiteSpace } from '../../../utils/customStrings'

function ProInput(props) {
    const {
        type,
        name,
        className,
        placeholder,
        value,
        onChange,
        autoComplate,
        //methods
        firstLetterUpperCase,
        noWhiteSpace,
        showInputIcons
    } = props;
    const [inputValue, setInputValue] = useState(value);
    const [inputType, setInputType] = useState(type);
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev)

        if (inputType === 'password') {
            setInputType('text')
        }
        if (inputType === 'text') {
            setInputType('password')
        }
    }

    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.name, e.target.value.trim());
        }
        if (firstLetterUpperCase) {
            setInputValue(capitalizeFirstLetter(e.target.value));
        } else {
            setInputValue(e.target.value)
        }
        if (noWhiteSpace) {
            setInputValue(removeWhiteSpace(e.target.value))
        }
    }

    const handleBlur = (e) => {
    }

    return (
        <>
            <input
                type={inputType}
                name={name}
                className={`${className} ${type === 'password' ? 'pr-5' : ''}`}
                placeholder={placeholder}
                value={inputValue}
                autoComplete={autoComplate}
                onChange={(e) => { handleChange(e) }}
                onBlur={(e) => { handleBlur(e) }}
            />
            {showInputIcons &&
                <span className="input-icons">
                    {showPassword ?
                        <i onClick={togglePassword}
                            class={`icon ion-ios-eye ${showPassword ? 'd-block' : 'd-none'}`}
                        ></i>
                        :
                        <i onClick={togglePassword}
                            class={`icon ion-ios-eye-off ${showPassword ? 'd-none' : 'd-block'}`}
                        ></i>}
                </span>
            }
        </>
    )
}

ProInput.defaultProps = {
    type: "text",
    name: "",
    className: "",
    placeholder: "",
    value: "",
    onChange: {},
    autoComplete: "off"
}

export default ProInput