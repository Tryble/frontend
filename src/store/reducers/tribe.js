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
} from '../types'


const initialState = {
    tribes: [],
    addingTribe: false,
    updatingTribe: false,
    removingTribe: false,
    tribeError: ''
}

const tribe = (state = initialState, {type, payload}) => {
    switch(type) {

        case ADD_TRIBE_START:
            return {
                ...state,
                addingTribe: true
            }

        case ADD_TRIBE_SUCCESS:
            return {
                ...state,
                addingTribe: false,
                tribes: payload
            }

        case ADD_TRIBE_FAIL:
            return {
                ...state,
                addingTribe: false,
                tribeError: payload
            }

        case REMOVE_TRIBE_START:
            return {
                ...state,
                removingTribe: true
            }

        case REMOVE_TRIBE_SUCCESS:
            return {
                ...state,
                removingTribe: true,
                tribes: payload
            }

        case REMOVE_TRIBE_FAIL:
            return {
                ...state,
                removingTribe: false,
                tribes: payload
            }

        case UPDATE_TRIBE_START:
            return {
                ...state,
                updatingTribe: true,
            }

        case UPDATE_TRIBE_SUCCESS:
            return {
                ...state,
                updatingTribe: false,
                tribes: payload
            }

        case UPDATE_TRIBE_FAIL:
            return {
                ...state,
                updatingTribe: false,
                tribeError: payload
            }

        default:
            return state;
    }
}

export default tribe