import * as common from './type';

const types = {
    SET_ROLE_LIST: 'SET_ROLE_LIST',
}

export const initialState = {
    isLoading: false,
    errorMessage: '',
    user_roles: []
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
        case types.SET_ROLE_LIST:
            return {
                ..._getCommonState(state),
                user_roles: action.payload
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

export const set_user_role = (roles = []) => ({
    type: types.SET_ROLE_LIST,
    payload: roles
})

