import { connect } from 'react-redux';
import { IntervalMaintainence } from '../../pages/Information/Quotation';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,

        interval_list: state.quotation.interval_list
    }),
    null
)(IntervalMaintainence)
