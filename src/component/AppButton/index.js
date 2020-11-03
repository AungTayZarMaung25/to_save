import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

export const ButtonType = {
    variant: {
        contained: 'contained',
        outlined: 'outlined'
    },
    color: {
        primary: 'primary',
        secondary: 'secondary'
    }
}

const AppButton = (props) => {
    const {
        variant = ButtonType.variant.contained,
        color = ButtonType.color.primary,
    } = props
    return (
        <Button
            variant={variant}
            color={color} {...props}>
            {prop.children}
        </Button>
    )
}

// AppButton.propTypes = {
//     variant: PropTypes.oneOf([
//         ButtonType.variant.contained,
//         ButtonType.variant.outlined
//     ]),
// }

export default AppButton;