import {
    set_error_message,
    start_loading,
    stop_loading,

    set_destination,
    set_branch_tree
} from '../reducer.information';
import { informationservice } from '../../service';
import { checkStatus } from '../util'

export const action_fetch_branch = ()=>{
    return async (dispatch,getState) => {
        dispatch(start_loading());
        try {
            const response = await informationservice.getBranch({})
            if(checkStatus(response)) {
                const body = await response.data;
                dispatch(set_branch_tree(body))
            }
        } catch (error) {
            console.log(error)   
        }
    }
}


export const action_fetch_destination = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await informationservice.getDestination();
            if (checkStatus(response)) {
                const body = await response.data
                dispatch(set_destination(body));
            }
            else dispatch(stop_loading());
        } catch (error) {
            dispatch(set_error_message(error.message))
        }
    }
}