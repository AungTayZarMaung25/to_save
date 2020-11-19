import { connect } from 'react-redux';
import { Destination } from '../../pages/Information';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,
        destinations: state.information.destinations,

        branch: state.option.branch_list,
        region: state.option.region_list,
        district: state.option.district_list,
        township: state.option.township_list
    }),
    null
)(Destination)
