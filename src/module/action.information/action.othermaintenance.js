import {
    set_error_message,
    start_loading,
    stop_loading,

    set_item_types,
    set_express_types,
    set_carriers,
    set_payment_methods,
    set_transporations
} from '../reducer.information';
import { informationservice } from '../../service';
import { checkStatus } from '../util';

export const action_fetch_item_types = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());

        try {
            const response = await informationservice.getItemTypes();
            if (checkStatus(response)) {
                const body = await response.data
                dispatch(set_item_types(body));
            }
            else dispatch(stop_loading())
        } catch (error) {
            dispatch(set_error_message(error.messsage));
        }
    }
}

export const action_fetch_express_types = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await informationservice.getExpressTypes();
            if (checkStatus(response)) {
                const body = await response.data;

                dispatch(set_express_types(body));
            }
            else dispatch(stop_loading());
        } catch (error) {
            dispatch(set_error_message(error.messsage))
        }
    }
}

export const action_fetch_carriers = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await informationservice.getCarriers();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_carriers(body));
            }
            else dispatch(stop_loading());
        } catch (error) {
            dispatch(set_error_message(error.messsage))
        }
    }
}