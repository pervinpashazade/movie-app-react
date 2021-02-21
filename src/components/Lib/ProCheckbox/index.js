import React from 'react'

function ProCheckbox(props) {

    const { id, name, isChecked } = props;

    const [status, setStatus] = React.useState(isChecked);

    return (
        <input type="checkbox" checked={status}
            id={id} name={name}
            onChange={(e) => { setStatus(e.target.checked) }}
        />
    )
}

export default ProCheckbox
