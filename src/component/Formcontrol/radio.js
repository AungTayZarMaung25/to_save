import React from 'react';
import { Field } from 'formik';

import FormGroup from './FormGroup';

const Radio = ({ name, options = [], label }) => (
    <FormGroup
        name={name}
        label={label}
    >
        <Field name={name}>
            {
                ({ field }) => (
                    options.map(opt => (
                        <React.Fragment>
                            <input
                                type="radio"
                                {...field}
                                value={opt.value}
                                checked={field.value === opt.value}
                            />
                            {opt.key || opt.label || opt.name}
                        </React.Fragment>
                    ))
                )
            }
        </Field>

    </FormGroup>
)

export default Radio