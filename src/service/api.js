export const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * USER
 */
export const login = '/users/loginuser';

/**
 * USER ROLE AND PERMISSION
 */
export const userrole = '/userroles';

/*
const BASE_URL_DEV = `http://localhost:4500/api/v1`
const BASE_URL_PROD = `http://live`

function check_env () {
    
    if(process.env.NODE_ENV === 'production') 
        return BASE_URL_PROD;
    
    return BASE_URL_DEV;
}   
*/