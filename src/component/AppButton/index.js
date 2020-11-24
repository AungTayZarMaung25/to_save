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
        size = 'small'
    } = props
    return (
        <Button
            size={size}
            variant={variant}
            color={color}
            onClick={props.onClick}
            {...props}>
            {props.children}
        </Button>
    )
}

AppButton.propTypes = {
    variant: PropTypes.oneOf([
        ButtonType.variant.contained,
        ButtonType.variant.outlined
    ]),
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large', 'medium']),
    onClick: PropTypes.func
}

export default AppButton;