import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Datepicker from './datepicker';
import Select from './select';
import Textarea from './textarea';

export const Types = {
    radio: "radio",
    checkbox: "checkbox",
    select: "select",
    date: "date",
    textarea: "textarea"
}

const FormControl = (props) => {
    const { control } = props;
    switch (control) {
        case Types.radio:
            return null
        case Types.checkbox:
            return null
        case Types.select:
            return <Select {...props} />
        case Types.date:
            return <Datepicker {...props} />
        case Types.textarea:
            return <Textarea {...props} />
        default:
            return <Input {...props} />
    }
}
FormControl.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.oneOf([Types.radio, Types.checkbox, Types.select]),
}
export default FormControl