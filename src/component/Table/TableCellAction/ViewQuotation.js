import React from 'react'
import { useDispatch } from 'react-redux'
import {
    open_quotation_dialog, set_temp_data,
} from '../../../module/reducer.components'
import AppButton, { ButtonType } from '../../AppButton'

export default (props) => {

    const dispatch = useDispatch()

    const handler = () => {
        dispatch(open_quotation_dialog())
        dispatch(set_temp_data(props))
    }

    return (
        <AppButton
            variant={ButtonType.variant.contained}
            color={ButtonType.color.primary}
            onClick={handler}
        >
            quotation
        </AppButton>
    )
}