import { connect } from 'react-redux';
import { Destination } from '../../pages/Information';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,
        destinations: state.information.destinations,

        region: state.option.region_list,
        district: state.option.district_list,
        township: state.option.township_list
    }),
    null
)(Destination)
