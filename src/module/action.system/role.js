import { 
    set_error_message, 
    set_user_role, 
    start_loading } from "../reducer.system";
import { roleService } from '../../service';
import { checkStatus } from "../util";

export const action_fetch_roles = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await roleService.getUserRoles()
            if (checkStatus(response)) {
                const body = await response.data
                dispatch(set_user_role(body));
            }
            else dispatch(set_error_message(response.statusText))

        } catch (error) {
            dispatch(set_error_message(error.message));
        }
    }
}