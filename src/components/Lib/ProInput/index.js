import React, { useState } from 'react'
import './style.css'
//utils
import {
    capitalizeFirstLetter,
    removeWhiteSpace
} from '../../../utils/customStrings'

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
    } = props;
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {

        onChange(e.target.name, e.target.value.trim());

        if (firstLetterUpperCase) {
            setInputValue(capitalizeFirstLetter(e.target.value));
        } else {
            setInputValue(e.target.value)
        }

        // if (noWhiteSpace) {
        //     setInputValue(removeWhiteSpace(e.target.value))
        // }
    }

    const handleBlur = (e) => {
        
    }



    return (
        <input
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            value={inputValue}
            autoComplete={autoComplate}
            onChange={(e) => { handleChange(e) }}
            onBlur={(e) => { handleBlur(e) }}
        />
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