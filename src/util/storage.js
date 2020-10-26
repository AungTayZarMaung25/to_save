const ACCESS_TOKEN = 'access-token';
const REFRESH_TOKEN = 'refresh-token';

const USER_INFO = 'userinfo';
const USER_ID = 'userId';
const USER_ROLE = 'user-role';

export const wipe_login_data = () => {
    window.localStorage.clear();
    // window.location.replace('/');
    window.location.reload();
}

/**
 * GET DATA
 * 
 */

const getLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const GET_STORED_ACCESS_TOKEN = getLocalStorage(ACCESS_TOKEN);
export const GET_STORED_USER_ID = getLocalStorage(USER_ID);
export const GET_STORED_USER_ROLE = getLocalStorage(USER_ROLE);
