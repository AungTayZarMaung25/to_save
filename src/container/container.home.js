import Home from '../pages/home';
import { connect } from 'react-redux';

export default connect(
    (state) => ({
        isLoading: state.user.isLoading,
        errorMessage: state.user.errorMessage,
        role: state.user.role,
        permission: state.user.permission
    }),
    null
)(Home)