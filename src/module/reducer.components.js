export const COMPONNET_TYPE = {
    TOGGLE_MENU: "TOGGLE_MENU",

    SET_OPEN_DIALOG: "SET_OPEN_DIALOG",

    SET_CLOSE_DIALOG: "SET_CLOSE_DIALOG",

    SET_TEMP_DATA: "SET_TEMP_DATA",

    CLAER_TEMP_DATA: "CLAER_TEMP_DATA",

    SET_OPEN_QUOTATION_DIALOG: "SET_OPEN_QUOTATION_DIALOG",

    SET_CLOSE_QUOTATION_DIALOG: "SET_CLOSE_QUOTATION_DIALOG",

    /**
     * create or update quotation rules
     */
    OPEN_QUOTATION_RULE: "OPEN_QUOTATION_RULE",

    CLOSE_QUOTATION_RULE: "CLOSE_QUOTATION_RULE",

}

export const initialState = {
    showmenu: true,
    showdialog: false,

    temp_data: null,

    /**
     * quotation interval
     */
    show_quotation_dialog: false,
    show_quotation_rule_dialog: false

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
        case COMPONNET_TYPE.SET_OPEN_DIALOG:
            return {
                ..._getCommonState(state),
                showdialog: true
            }
        case COMPONNET_TYPE.SET_CLOSE_DIALOG:
            return {
                ..._getCommonState(state)
            }
        case COMPONNET_TYPE.SET_TEMP_DATA:
            return {
                ..._getCommonState(state),
                temp_data: action.payload
            }
        case COMPONNET_TYPE.CLAER_TEMP_DATA: {
            return {
                ..._getCommonState(state),
                temp_data: null
            }
        }
        case COMPONNET_TYPE.SET_OPEN_QUOTATION_DIALOG:
            return {
                ..._getCommonState(state),
                show_quotation_dialog: true
            }
        case COMPONNET_TYPE.SET_CLOSE_QUOTATION_DIALOG:
            return {
                ..._getCommonState(state),
                show_quotation_dialog: false
            }
        case COMPONNET_TYPE.OPEN_QUOTATION_RULE:
            return {
                ..._getCommonState(state),
                show_quotation_rule_dialog: true
            }
        case COMPONNET_TYPE.CLOSE_QUOTATION_RULE:
            return {
                ..._getCommonState(state),
                show_quotation_rule_dialog: false
            }
        default:
            return state;
    }
}

const _getCommonState = (state) => ({
    ...state,
    showdialog: false,
})

/**
 * action
 */

export const Toggle_Menu = () => ({
    type: COMPONNET_TYPE.TOGGLE_MENU
})

export const open_dialog = () => ({
    type: COMPONNET_TYPE.SET_OPEN_DIALOG
})

export const close_dialog = () => ({
    type: COMPONNET_TYPE.SET_CLOSE_DIALOG
})

export const set_temp_data = (data) => ({
    type: COMPONNET_TYPE.SET_TEMP_DATA,
    payload: data
})

export const clear_temp_data = () => ({
    type: COMPONNET_TYPE.CLAER_TEMP_DATA
})

export const open_quotation_dialog = () => ({
    type: COMPONNET_TYPE.SET_OPEN_QUOTATION_DIALOG
})

export const close_quotation_dialog = () => ({
    type: COMPONNET_TYPE.SET_CLOSE_QUOTATION_DIALOG
})

export const open_quotation_rule = () => ({
    type: COMPONNET_TYPE.OPEN_QUOTATION_RULE,
})

export const close_quotation_rule = () => ({
    type: COMPONNET_TYPE.CLOSE_QUOTATION_RULE
})