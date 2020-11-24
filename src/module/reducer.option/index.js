import * as common from '../type'

export const initialState = {
    isLoading: false,
    errorMessage: '',

    branch_list: [],
    destination_list: [],
    region_list: [],
    district_list: [],
    township_list: [],
    itemtype_list: [],
    payment_type_list: [],
    shipping_type_list: [], // express type
    shipping_mode_list: [],
    interval_type_list: [],

    /**
     * creation on quotation interval group set
     */
    interval_list_sender: [],
    interval_list_receiver: [],

}

/**
 * Reducer
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
            }
        case common.SET_BRANCH_LIST: {
            return {
                ..._getCommonState(state),
                branch_list: action.payload
            }
        }
        case common.SET_DESTINATION_LIST: {
            return {
                ..._getCommonState(state),
                destination_list: action.payload
            }
        }
        case common.SET_REGION_LIST: {
            return {
                ..._getCommonState(state),
                region_list: action.payload
            }
        }
        case common.SET_DISTRICT_LIST: {
            return {
                ..._getCommonState(state),
                district_list: action.payload
            }
        }
        case common.SET_TOWNSHIP_LIST: {
            return {
                ..._getCommonState(state),
                township_list: action.payload
            }
        }
        case common.SET_ITEMTYPE_LIST: {
            return {
                ..._getCommonState(state),
                itemtype_list: action.payload
            }
        }
        case common.SET_PAYMENT_TYPE_LIST: {
            return {
                ..._getCommonState(state),
                payment_type_list: action.payload
            }
        }
        case common.SET_SHIPPING_TYPE_LIST: {
            return {
                ..._getCommonState(state),
                shipping_type_list: action.payload
            }
        }
        case common.SET_SHIPPING_MODE_LIST: {
            return {
                ..._getCommonState(state),
                shipping_mode_list: action.payload
            }
        }
        case common.SET_INTERVAL_TYPE_LIST: {
            return {
                ..._getCommonState(state),
                interval_type_list: action.payload
            }
        }
        case common.SET_INTERVAL_GROUP:
            return {
                ..._getCommonState(state),
                interval_list_sender: action.sender,
                interval_list_receiver: action.receiver
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

export const set_branch_list = (data = []) => ({
    type: common.SET_BRANCH_LIST,
    payload: data
})

export const set_destination_list = (data = []) => ({
    type: common.SET_DESTINATION_LIST,
    payload: data
})

export const set_region_list = (data = []) => ({
    type: common.SET_REGION_LIST,
    payload: data
})

export const set_district_list = (data = []) => ({
    type: common.SET_DISTRICT_LIST,
    payload: data
})

export const set_township_list = (data = []) => ({
    type: common.SET_TOWNSHIP_LIST,
    payload: data
})

export const set_itemtype_list = (data = []) => ({
    type: common.SET_ITEMTYPE_LIST,
    payload: data
})

export const set_payment_type_list = (data = []) => ({
    type: common.SET_PAYMENT_TYPE_LIST,
    payload: data
})

export const set_shipping_type_list = (data = []) => ({
    type: common.SET_SHIPPING_TYPE_LIST,
    payload: data
})

export const set_shipping_mode_list = (data = []) => ({
    type: common.SET_SHIPPING_MODE_LIST,
    payload: data
})

export const set_interval_type_list = (data = []) => ({
    type: common.SET_INTERVAL_TYPE_LIST,
    payload: data
})

export const set_interval_group = (sender = [], receiver = []) => ({
    type: common.SET_INTERVAL_GROUP,
    sender,
    receiver
})