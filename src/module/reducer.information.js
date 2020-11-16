import * as common from './type';

const types = {
    SET_BRANCH_TREE: 'SET_BRANCH_TREE',
    UPDATE_BRANCH_TREE: 'UPDATE_BRANCH_TREE',
    SET_DESTINATION: 'SET_DESTINATION',

    /**
     * other TYPES
     */
    SET_ITEM_TYPES: 'SET_ITEM_TYPES',
    SET_EXPRESS_TYPES: 'SET_EXPRESS_TYPES',
    SET_CARRIER: 'SET_CARRIER',
    SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD',
    SET_TRANSPORTATIONS: 'SET_TRANSPORTATIONS',

}

export const initialState = {
    isLoading: false,
    errorMessage: '',

    branchTree: [],
    destinations: {},
    /**
     * other maintenance
     */
    itemtypes: [],
    expresstypes: [],
    carriers: [],
    payment_methods: [],
    transportations: [],


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
        case common.SET_ERROR_MESSAGE:
            return {
                ..._getCommonState(state),
                errorMessage: action.payload
            }

        case types.SET_BRANCH_TREE:
            return {
                ..._getCommonState(state),
                branchTree: action.payload
            }
        case types.UPDATE_BRANCH_TREE:
            return {
                ..._getCommonState(state),

            }
        case types.SET_DESTINATION:
            return {
                ..._getCommonState(state),
                destinations: action.payload
            }
        /**
         * other
         */
        case types.SET_ITEM_TYPES:
            return {
                ..._getCommonState(state),
                itemtypes: action.payload
            }
        case types.SET_EXPRESS_TYPES:
            return {
                ..._getCommonState(state),
                expresstypes: action.payload
            }
        case types.SET_CARRIER:
            return {
                ..._getCommonState(state),
                carriers: action.payload
            }
        case types.SET_PAYMENT_METHOD:
            return {
                ..._getCommonState(state),
                payment_methods: action.payload
            }
        case types.SET_TRANSPORTATIONS:
            return {
                ..._getCommonState(state),
                transportations: action.payload
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

export const set_branch_tree = (data = []) => ({
    type: types.SET_BRANCH_TREE,
    payload: data
})

export const set_destination = (data = []) => ({
    type: types.SET_DESTINATION,
    payload: data
})

/**
 * 
 * others
 */

export const set_item_types = (data = []) => ({
    type: types.SET_ITEM_TYPES,
    payload: data
})

export const set_express_types = (data = []) => ({
    type: types.SET_EXPRESS_TYPES,
    payload: data
})

export const set_carriers = (data = []) => ({
    type: types.SET_CARRIER,
    payload: data
})

export const set_payment_methods = (data = []) => ({
    type: types.SET_PAYMENT_METHOD,
    payload: data
})

export const set_transporations = (data = []) => ({
    type: types.SET_TRANSPORTATIONS,
    payload: data
})