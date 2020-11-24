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

/**
 * post and create data
 */

/**
 * branch
 */
export async function create_destination(data) {
    return await httpService.post('/destinations/createdestination', data);
}

/**
 * quotation
 */
export async function getInterval() {
    return await httpService.get('/quotations/getallintervals');
}

export async function create_interval(data) {
    return await httpService.post('/quotations/createinterval', data);
}

export async function get_quotation_interval() {
    return await httpService.get('/quotations/get-quotation-interval');
}

export async function create_quotation_interval(data) {
    return await httpService.post('/quotations/create-quotation-interval', data);
}

export async function create_quotation_rule(quotation_id, data) {
    return await httpService.post(`/quotations/create-quotation-rule?quotation=${quotation_id}`, data)
}