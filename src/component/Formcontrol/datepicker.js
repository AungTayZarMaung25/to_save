import React from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const Datepicker = props => {
    const { name, label } = props;
    const [, meta] = useField(props)

    const hasError = meta.error && meta.touched
    return (
        <FormGroup
            name={name}
            label={label}
        >
            <Field
                name={name}
                type={'date'}
                className={`inputField ${hasError && 'inputError'}`}
            />
            <span className={"messageError"}>{hasError ? meta.error : ''}</span>
        </FormGroup>
    )
}

Datepicker.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    control: PropTypes.string
}

export default Datepicker;