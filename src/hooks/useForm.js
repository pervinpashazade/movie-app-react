import { useState } from 'react';

export const useForm = (callback, initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const onChange = (name, value) => {
        setValues({ ...values, [name]: value })
        //
        // setErrors(validate(values));
    }

    const onSubmit = event => {
        event.preventDefault();

        console.log("hook on submit start");
        console.log("hook on submit values : ", values);
        console.log("errors", validate(values));


        if (Object.keys(validate(values)).length === 0) {
            callback();
            // setValues(initialState);
            setErrors({});
            alert('form successfull')
        } else {
            console.log("form has errors ", Object.keys(validate(values)).length)
            setErrors(validate(values));
        }
    }

    return {
        values,
        errors,
        onChange,
        onSubmit
    }
}