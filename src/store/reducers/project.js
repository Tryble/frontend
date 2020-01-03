import { 
    FETCH_PROJECT_START,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAIL
} from '../types'


const initialState = {
    isLoading: false,
    isLoaded: false,
    projects: []
}

const project = (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_PROJECT_START:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                projects: payload
            }

        case FETCH_PROJECT_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state;
    }
}

export default project