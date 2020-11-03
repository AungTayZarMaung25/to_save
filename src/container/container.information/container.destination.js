import { connect } from 'react-redux';
import { Destination } from '../../pages/Information';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,
        destinations: state.information.destinations,
    }),
    null
)(Destination)
