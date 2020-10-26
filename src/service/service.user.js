import { httpService } from ".";
import * as api from './api'

export async function login(data) {
    return httpService.post(api.login, data);
}

export async function getPermission(id) {
    return httpService.get(`${api.userrole}/${id}`);
}