import { checkStatus } from "../../../module/util";
import { optionService } from "../../../service";

export default function UserAddress() {
    this.district = []
    this.township = []

    this.getdistrictList = function () {
        return this.district;
    }

    this.setdistrictList = async function (region_id) {
        try {
            let response = await optionService.OptionDistrict(region_id)
            if (checkStatus(response)) {
                const body = await response.data;
                this.district = body
            }
        } catch (error) {
            console.log(error)
        }

    }

    this.gettownshipList = function () {
        return this.township;
    }

    this.settownshipList = async function (township_id) {
        try {
            let response = await optionService.OptionTownship(township_id)
            if (checkStatus(response)) {
                const body = await response.data
                this.township = body
            }
        } catch (error) {
            console.log(error)
        }
    }

}