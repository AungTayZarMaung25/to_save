import { connect } from 'react-redux';
import { Branch } from '../../pages/Information';

export default connect(
    (state) => ({
        isLoading: state.information.isLoading,
        errorMessage: state.information.errorMessage,
        
    }),
    null
)(Branch)
