import axios from 'axios';
import { GET_STORED_ACCESS_TOKEN, wipe_login_data } from '../util/storage';
import { BASE_URL } from './api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
})

axiosInstance.interceptors.request.use(config => {
    config.headers['x-access-token'] = GET_STORED_ACCESS_TOKEN
    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async function(error) {
        if(error.response.status !== 401) {
            return Promise.reject(error);
        }

        // const { config } = error
        if(error.response.status === 401) {
            wipe_login_data();

            // return Promise.resolve(response);
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;