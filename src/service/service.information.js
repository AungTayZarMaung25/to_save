import { httpService } from '.';


/**
 * Branch maintenance
 */

export async function getBranch({
    branches = []
}) {
    let url = `/branches/getbranch?`

    if (Array.isArray(branches) && branches.length > 0) {
        branches.forEach(b => {
            url += `branches[]=${b}&`
        })
    }

    return await httpService.get(url)

}

export async function getDestination() {
    return await httpService.get('/destinations/getdestination');
}

/**
 * other maintenance
 */
export async function getItemTypes() {
    return await httpService.get('/itemtypes/getitemtype');
}

export async function getExpressTypes() {
    return await httpService.get('/expresstypes/getexpresstype');
}

export async function getCarriers() {
    return await httpService.get('/carriers/getcarrier');
}

