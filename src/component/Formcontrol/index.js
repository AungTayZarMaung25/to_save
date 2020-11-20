import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Datepicker from './datepicker';
import Select from './select';
import Textarea from './textarea';
import Radio from './radio';
import FormAutocomplete from './autocomplete';

export const Types = {
    radio: "radio",
    checkbox: "checkbox",
    select: "select",
    date: "date",
    textarea: "textarea",
    autocomplete: "autocomplete"
}

const FormControl = (props) => {
    const { control } = props;
    switch (control) {
        case Types.radio:
            return <Radio {...props} />
        case Types.checkbox:
            return null
        case Types.select:
            return <Select {...props} />
        case Types.date:
            return <Datepicker {...props} />
        case Types.textarea:
            return <Textarea {...props} />
        case Types.autocomplete:
            return <FormAutocomplete {...props} />
        default:
            return <Input {...props} />
    }
}
FormControl.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    touched: PropTypes.object,
    errors: PropTypes.object,
    control: PropTypes.oneOf([Types.radio, Types.checkbox, Types.select, Types.textarea, Types.date]),
}
export default FormControl