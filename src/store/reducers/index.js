import { combineReducers } from 'redux';
import auth from './auth';
import project from './project';
import errors from './errors';


const reducer = combineReducers({
    auth,
    project,
    errors
})


export default reducer