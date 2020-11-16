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