import axios from 'axios'

import withAuth from '../../utils/axios'

import { 
    ADD_TRIBE_START,
    ADD_TRIBE_SUCCESS,
    ADD_TRIBE_FAIL,
    REMOVE_TRIBE_START,
    REMOVE_TRIBE_SUCCESS,
    REMOVE_TRIBE_FAIL,
    UPDATE_TRIBE_START,
    UPDATE_TRIBE_SUCCESS,
    UPDATE_TRIBE_FAIL
} from '../types';


export const addTribe = () => async dispatch => {
    dispatch({ type: ADD_TRIBE_START});

    try {
        const { data } = withAuth().post('/api/tribes');
        dispatch({
            type: ADD_TRIBE_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: ADD_TRIBE_FAIL
        });
    }

}

export const removeTribe = () => async dispatch => {
    dispatch({ type: REMOVE_TRIBE_START});

    try {
        const { data } = withAuth().delete('/api/tribes');
        dispatch({
            type: REMOVE_TRIBE_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: REMOVE_TRIBE_FAIL
        });
    }

}

export const updateTribes = () => async dispatch => {
    dispatch({ type: UPDATE_TRIBE_START});

    try {
        const { data } = withAuth().put('/api/tribes');
        dispatch({
            type: UPDATE_TRIBE_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: UPDATE_TRIBE_FAIL
        });
    }

}