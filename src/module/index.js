import user from './reducer.user';
import component from './reducer.components'

import { combineReducers } from 'redux';

export default combineReducers({
    user: user,
    component: component
})
