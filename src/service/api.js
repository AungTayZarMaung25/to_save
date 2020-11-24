const BASE_URL_DEV = `http://localhost:4500/api/v1`
// const BASE_URL_DEV = `http://khapi.herokuapp.com/api/v1`
const BASE_URL_PROD = `http://live`

function check_env () {
    
    if(process.env.NODE_ENV === 'production') 
        return BASE_URL_PROD;
    
    return BASE_URL_DEV;
}   

export const BASE_URL = check_env();

/**
 * USER
 */
export const login = '/users/loginuser';

/**
 * USER ROLE AND PERMISSION
 */
export const userrole = '/userroles';
