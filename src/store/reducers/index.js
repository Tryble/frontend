import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';


const reducer = combineReducers({
    auth,
    errors
})


export default reducer