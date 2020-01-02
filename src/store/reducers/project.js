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
} from '../types'


const initialState = {
    projects: [],
    addingProject: false,
    updatingProject: false,
    removingProject: false,
    projectError: ''
}

const project = (state = initialState, {type, payload}) => {
    switch(type) {

        case ADD_PROJECT_START:
            return {
                ...state,
                addingProject: true
            }

        case ADD_PROJECT_SUCCESS:
            return {
                ...state,
                addingProject: false,
                projects: payload
            }

        case ADD_PROJECT_FAIL:
            return {
                ...state,
                addingProject: false,
                projectError: payload
            }

        case REMOVE_PROJECT_START:
            return {
                ...state,
                removingProject: true
            }

        case REMOVE_PROJECT_SUCCESS:
            return {
                ...state,
                removingProject: true,
                projects: payload
            }

        case REMOVE_PROJECT_FAIL:
            return {
                ...state,
                removingProject: false,
                projects: payload
            }

        case UPDATE_PROJECT_START:
            return {
                ...state,
                updatingProject: true,
            }

        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                updatingProject: false,
                projects: payload
            }

        case UPDATE_PROJECT_FAIL:
            return {
                ...state,
                updatingProject: false,
                projectError: payload
            }

        default:
            return state;
    }
}

export default project