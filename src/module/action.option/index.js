import {
    start_loading,
    stop_loading,

    set_branch_list,
    set_district_list,
    set_itemtype_list,
    set_region_list,
    set_township_list,
    set_payment_type_list,
    set_shipping_type_list,
    set_shipping_mode_list,
    set_interval_type_list,

} from '../reducer.option'
import { optionService } from '../../service';
import { checkStatus } from '../util';

/**
 * branch option list
 */
export const action_fetch_branch_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionBranch();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_branch_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}

/**
 * region option list
 */
export const action_fetch_region_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionRegion();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_region_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}

/**
 * district option list
 */
export const action_fetch_district_option = (region) => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        dispatch(set_district_list([]))
        dispatch(set_township_list([]))
        if (region)
            try {
                const response = await optionService.OptionDistrict(region);
                if (checkStatus(response)) {
                    const body = await response.data;
                    dispatch(set_district_list(body))
                }
                else dispatch(stop_loading())
            } catch (error) {
                console.log(error)
                dispatch(stop_loading())
            }
    }
}

/**
 * township option list
 */
export const action_fetch_township_option = (district) => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        dispatch(set_township_list([]))
        if (district)
            try {
                const response = await optionService.OptionTownship(district);
                if (checkStatus(response)) {
                    const body = await response.data;
                    dispatch(set_township_list(body))
                }
                else dispatch(stop_loading())
            } catch (error) {
                console.log(error)
                dispatch(stop_loading())
            }
    }
}

/**
 * itemtype option list
 */
export const action_fetch_itemtype_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionItemType();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_itemtype_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}

/**
 * payment type option list
 */
export const action_fetch_paymenttypes_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionPaymentType();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_payment_type_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}

/**
 * express type option list
 * expresstype = shipping type
 * super, normal , fast shipping etc
 */
export const action_fetch_shippingtype_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionExpressType();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_shipping_type_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}

/**
 * shipping mode
 * by air , by land , by marine etc..
 */
export const action_fetch_shipping_mode_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionShippingMode();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_shipping_mode_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}

/**
 * interval type option
 * sender area, receiver area
 */
export const action_fetch_interval_type_option = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await optionService.OptionIntervalType();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_interval_type_list(body))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}