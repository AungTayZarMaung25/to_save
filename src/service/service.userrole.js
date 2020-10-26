import * as service from '.';

export async function getUserRole(id) {
    return await service.httpService(`/userroles/${id}}`);
}