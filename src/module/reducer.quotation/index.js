import * as common from '../type';

const types = {
    SET_INTERVAL_LIST: "SET_INTERVAL_LIST",
    SET_QUOTATION_INTERVAL: "SET_QUOTATION_INTERVAL"
}

export const initialState = {
    isLoading: false,
    errorMessage: '',

    interval_list: [],
    quotation_interval: []
}

/**
 * reducer
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case common.START_LOADING:
            return {
                ..._getCommonState(state),
                isLoading: true
            }
        case common.STOP_LOADING:
            return {
                ..._getCommonState(state),
                isLoading: false
            }
        case common.SET_ERROR_MESSAGE:
            return {
                ..._getCommonState(state),
                errorMessage: action.payload
            }
        case types.SET_INTERVAL_LIST:
            return {
                ..._getCommonState(state),
                interval_list: action.payload
            }
        case types.SET_QUOTATION_INTERVAL:
            return {
                ..._getCommonState(state),
                quotation_interval: action.payload
            }
        default:
            return state
    }
}

const _getCommonState = (state) => ({
    ...state,
    isLoading: false,
    errorMessage: ''
})

/**
 * action
 */

export const start_loading = () => ({
    type: common.START_LOADING
})

export const stop_loading = () => ({
    type: common.STOP_LOADING
})

export const set_error_message = (message = '') => ({
    type: common.SET_ERROR_MESSAGE,
    payload: message
})

export const set_interval_list = (data = []) => ({
    type: types.SET_INTERVAL_LIST,
    payload: data
})

export const set_quotation_interval = (data = []) => ({
    type: types.SET_QUOTATION_INTERVAL,
    payload: data
})