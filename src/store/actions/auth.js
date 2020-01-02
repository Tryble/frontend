import axios from 'axios';
// import { returnErrors } from './messages';
import withAuth from '../../utils/axios';
import {
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADING,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    USER_AUTHENTICATED
} from '../types';


export const loadUser = () => async dispatch => {
    dispatch({ type: USER_LOADING});

    try {
        const { data } = withAuth().get('');
        dispatch({
            type: USER_AUTHENTICATED,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: AUTH_ERROR
        });
    }

}

export const login = (values) => async dispatch => {

    try {
        const { data } = await axios.post('/auth/login', values);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }

}

export const register = (values) => async dispatch => {

    try {
        const { data } = await axios.post('/auth', values);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }

}

export const logout = () => async dispatch => {

    try {
        await axios.post('/auth/logout', null);
        dispatch({
            type: LOGOUT_SUCCESS,
        });
    } catch(err) {
        
    }

}
