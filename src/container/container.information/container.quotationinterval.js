import { connect } from "react-redux";
import { QuotationIntervalMaintenance } from "../../pages/Information/Quotation";

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,


    }),
    null
)(QuotationIntervalMaintenance)