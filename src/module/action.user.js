import { set_error_message, set_user_role, start_loading } from "./reducer.user"
import { userService } from '../service'
import { checkStatus } from "./util";

export const action_GetPermission = () => {
    return async (dispatch, getState) => {
        dispatch(start_loading());
        try {
            const response = await userService.getPermission('5f9250c4742f8555a5b98a65');
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