import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/error_actions";

const errorsReducer = (errors=[], action) => {
  Object.freeze(errors);

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return errors;
  }
};

export default errorsReducer;
