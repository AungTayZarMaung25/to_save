import React from 'react'
// import { useDispatch } from 'react-redux'
import { makeStyles, colors, Typography } from '@material-ui/core'


import {

} from '../../../module/reducer.components'
import AppButton, { ButtonType } from '../../AppButton'

const useStyles = makeStyles(theme => ({
    danger: {
        backgroundColor: theme.palette.error.dark,
        '&:hover': {
            background: theme.palette.error.dark,
        }
    },
    text: {
        fontSize: 13,
        color: colors.white
    }
}))

export default (props) => {

    // const dispatch = useDispatch();
    const classes = useStyles();

    const handler = () => {
        // dispatch(set_temp_data(props))
        // dispatch(open_dialog())  
    }

    return (
        <AppButton
            variant={ButtonType.variant.contained}
            onClick={handler}
            className={classes.danger}
        >
            <Typography className={classes.text}>
                delete
            </Typography>
        </AppButton>
    )
}