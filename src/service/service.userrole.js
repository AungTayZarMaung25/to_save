import * as service from '.';

export async function getUserRoles(){
    return await service.httpService.get('/userroles');
}

export async function getUserRoleByID(id) {
    return await service.httpService(`/userroles/${id}}`);
}

