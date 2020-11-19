import {
    set_interval_list,
    start_loading
} from '../reducer.quotation'
import { informationservice } from '../../service'
import { checkStatus } from '../util'
import { stop_loading } from '../reducer.user'

export const action_fetch_interval_list = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await informationservice.getInterval();
            if (checkStatus(response)) {
                const body = await response.data;
                dispatch(set_interval_list(body.docs || []))
            }
            else dispatch(stop_loading())
        } catch (error) {
            console.log(error)
            dispatch(stop_loading())
        }
    }
}