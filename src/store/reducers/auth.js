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

const token = localStorage.getItem('token') || null;

const initialState = {
    token,
    isAuthenticated: token ? true : null,
    isLoading: false,
    user: null
}

const auth = (state = initialState, {type, payload}) => {
    switch(type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_AUTHENTICATED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: payload
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        default:
            return state;
    }
}

export default auth;