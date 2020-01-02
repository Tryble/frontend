import axios from 'axios'

import withAuth from '../../utils/axios'

import { 
    ADD_PROJECT_START,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAIL,
    REMOVE_PROJECT_START,
    REMOVE_PROJECT_SUCCESS,
    REMOVE_PROJECT_FAIL,
    UPDATE_PROJECT_START,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL
} from '../types';


export const addProject = () => async dispatch => {
    dispatch({ type: ADD_PROJECT_START});

    try {
        const { data } = withAuth().post('/api/projects');
        dispatch({
            type: ADD_PROJECT_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: ADD_PROJECT_FAIL
        });
    }

}

export const removeProject = () => async dispatch => {
    dispatch({ type: REMOVE_PROJECT_START});

    try {
        const { data } = withAuth().delete('/api/projects');
        dispatch({
            type: REMOVE_PROJECT_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: REMOVE_PROJECT_FAIL
        });
    }

}

export const updateProject = () => async dispatch => {
    dispatch({ type: UPDATE_PROJECT_START});

    try {
        const { data } = withAuth().put('/api/projects');
        dispatch({
            type: UPDATE_PROJECT_SUCCESS,
            payload: data,
        });
    } catch(err) {
        dispatch({
            type: UPDATE_PROJECT_FAIL
        });
    }

}