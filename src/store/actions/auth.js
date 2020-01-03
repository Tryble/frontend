import axios from 'axios';
import withAuth from '../../utils/axios';
import {
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADING,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    USER_AUTHENTICATED,
    GET_ERRORS
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
            payload: data
        });
    } catch(err) {
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch({
            type: GET_ERRORS,
            payload: {
                msg: err.response.data.error,
                status: err.response.status
            }
        });
    }

}

export const register = (values) => async dispatch => {
    try {
        const { data } = await axios.post('/auth/register', values);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch({
            type: GET_ERRORS,
            payload: {
                msg: err.response.data.error,
                status: err.response.status
            }
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
        dispatch({
            type: GET_ERRORS,
            payload: {
                msg: err.response.data.error,
                status: err.response.status
            }
        });
    }

}
