import { connect } from "react-redux";
import { QuotationIntervalMaintenance } from "../../pages/Information/Quotation";

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,

        /**
         * for dialog box and data operation
         */
        showdialog: state.component.showdialog,
        temp_data: state.component.temp_data,
        quotation_dialog: state.component.show_quotation_dialog,

        /**
         * options
         */
        interval_sending_list: state.option.interval_list_sender,
        interval_receiving_list: state.option.interval_list_receiver,
        express_type_list: state.option.shipping_type_list,
        /**
         * displaying data
         */
        quotation_interval: state.quotation.quotation_interval,

    }),
    null
)(QuotationIntervalMaintenance)