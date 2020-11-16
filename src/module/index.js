import user from './reducer.user';
import component from './reducer.components';
import system from './reducer.system'
import information from './reducer.information';
import option from './reducer.option'

import { combineReducers } from 'redux';

/**
 * actions
 */
import * as User_Action from './action.user'
import * as Information_Action from './action.information'
import * as System_Action from './action.system'
import * as Option_Action from './action.option'

export default combineReducers({
    user: user,
    component: component,
    system: system,
    information: information,
    option: option
})


export {
    User_Action,
    Information_Action,
    System_Action,
    Option_Action
}