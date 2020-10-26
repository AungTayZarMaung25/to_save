export const COMPONNET_TYPE = {
    TOGGLE_MENU : 'TOGGLE_MENU'
}

export const initialState = {
    showmenu: true
}

/**
 * @param
 * Reducer
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case COMPONNET_TYPE.TOGGLE_MENU:
            return {
                ..._getCommonState(state),
                showmenu: !state.showmenu
            }
        default:
            return state;
    }
}

const _getCommonState = (state) => ({
    ...state
})

/**
 * action
 */

export const Toggle_Menu = () => ({
    type: COMPONNET_TYPE.TOGGLE_MENU
})