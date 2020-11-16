import * as service from '.';

export async function getUserRoles(){
    return await service.httpService.get('/userroles');
}