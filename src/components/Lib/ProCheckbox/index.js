import React from 'react'

function ProCheckbox(props) {

    const { id, name, isChecked, onChange } = props;

    const [status, setStatus] = React.useState(isChecked);

    const handleChange = (e) => {
        setStatus(e.target.checked)
        if (onChange) {
            onChange(e.target.name, e.target.checked)
        }
    }

    return (
        <input type="checkbox"
            checked={status}
            id={id}
            name={name}
            onChange={(e) => { handleChange(e) }}
        />
    )
}

export default ProCheckbox
