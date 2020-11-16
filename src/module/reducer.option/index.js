import * as common from '../type'

export const initialState = {
    isLoading: false,
    errorMessage: '',

    brach_list: [],
    region_list: [],
    district_list: [],
    township_list: [],


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
                brach_list: action.payload
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