import React from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const Select = props => {
    const { name, label, options = [] ,placeholder = 'Select' } = props;
    const [, meta] = useField(props)

    const hasError = meta.error && meta.touched
    return (
        <FormGroup
            name={name}
            label={label}
        >
            <Field
                as="select"
                name={name}
                // type={''}
                className={`inputField ${hasError ? 'inputError' : ''}`}
            >
                <option value="">{`${placeholder} ${label}`}</option>
                {
                    options.map(({ name, label, key, value }, index) => (
                        <option key={index} value={value}>
                            {name || label || key}
                        </option>
                    ))
                }
            </Field>
            <span className={"messageError"}>{hasError ? meta.error : ''}</span>
        </FormGroup>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    control: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}
export default Select