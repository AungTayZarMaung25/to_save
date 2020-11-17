import { httpService } from '.';

/**
 * Region
 */
export async function OptionRegion() {
    return await httpService.get('/regions/getoption')
}

/**
 * District
 */
export async function OptionDistrict(region_id) {
    return await httpService.get(`/districts/getoption?region=${region_id}`)
}

/**
 * Township
 */
export async function OptionTownship(district_id) {
    return await httpService.get(`/townships/getoption?district=${district_id}`)
}

/**
 * Branch
 */
export async function OptionBranch() {
    return await httpService.get(`/branches/getoption`)
}

/**
 * express type
 */
export async function OptionExpressType() {
    return await httpService.get(`/expresstypes/getoption`)
}

/**
 * shipping mode
 */
export async function OptionShippingMode() {
    return await httpService.get(`/shippingmodes/getoption`)
}

/**
 * payment type
 */
export async function OptionPaymentType() {
    return await httpService.get(`/payments/getoption`)
}


/**
 * itemtype
 */
export async function OptionItemType() {
    return await httpService.get(`/itemtypes/getoption`)
}