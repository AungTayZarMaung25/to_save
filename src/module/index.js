import user from './reducer.user';
import component from './reducer.components';
import system from './reducer.system'
import information from './reducer.information';

import { combineReducers } from 'redux';

export default combineReducers({
    user: user,
    component: component,
    system: system,
    information: information
})
