import { connect } from 'react-redux';
import { IntervalMaintainence } from '../../pages/Information/Quotation';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,
        
        interval_list: state.quotation.interval_list,
        interval_type_list:state.option.interval_type_list,

        destinations: state.option.destination_list,
        region: state.option.region_list,
        district: state.option.district_list,
        township: state.option.township_list
    }),
    null
)(IntervalMaintainence)
