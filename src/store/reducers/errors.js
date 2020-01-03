import { GET_ERRORS } from '../types';

const initialState = {
  msg: "",
  status: null
}

const errors = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_ERRORS:
      return {
        msg: payload.msg,
        status: payload.status
      }
    default:
      return state;
  }
}

export default errors;