import { Document } from '../../pages'

import { connect } from "react-redux";


export default connect(
    (state) => ({
        region: state.option.region_list,
        itemtype: state.option.itemtype_list,
        payment_type: state.option.payment_type_list,
        express_type: state.option.shipping_type_list,
        shipping_mode: state.option.shipping_mode_list
    }),
    null
)(Document.WayBillEntry)