import {
    TYPE_SET_USERS
  } from '../../actions';
  
  const INITIAL_STATE = {
      username:"",
      first_name: "",
      last_name: "",
      email: "",
  };
  
  export const users = function(state = INITIAL_STATE, action) {
      switch (action.type) {
        case TYPE_SET_USERS:
    
          return { ...state, ...action.payload.value };
    
        default:
  
          return state;
  
      }
    };
    
    export default users;
    