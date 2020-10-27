import { connect } from 'react-redux';
import { OtherInformation } from '../../pages/Information';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,
        carriers: state.information.carriers,
    }),
    null
)(OtherInformation.Carrier)
