import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from '@material-ui/pickers';
import DateFnsUtil from '@date-io/date-fns'

const Datepicker = props => {
    const { 
        name, label, 
        minDate,
        format = 'dd / MM / yyyy hh:mm a' } = props;

    return (
        <FormGroup
            name={name}
            label={label}
        >
            <Field name={name} {...props}>
                {({
                    field,
                    form: { setFieldValue },
                    meta
                }) => {
                    const hasError = meta.error && meta.touched
                    return (
                        <>
                            <MuiPickersUtilsProvider utils={DateFnsUtil}>
                                <KeyboardDateTimePicker
                                    variant="inline"
                                    format={format}
                                    margin="dense"
                                    id={`date-picker-inline-${name}`}
                                    className={`date-input inputField ${hasError && 'inputError'}`}
                                    onChange={(date) => setFieldValue(name, date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    minDate={minDate}
                                />
                            </MuiPickersUtilsProvider>
                            <span className={"messageError"}>{hasError ? meta.error : ''}</span>
                        </>
                    )
                }}
            </Field>
        </FormGroup>
    )
}

Datepicker.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    control: PropTypes.string
}

export default Datepicker;