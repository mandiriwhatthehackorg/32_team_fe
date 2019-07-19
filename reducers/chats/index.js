import {
    TYPE_SET_CHATS
  } from '../../actions';
  
  const INITIAL_STATE = {
      chats:[]
  };
  
  export const chats = function(state = INITIAL_STATE, action) {
      switch (action.type) {
        case TYPE_SET_CHATS:
    
          return { ...state, ...action.payload.value };
    
        default:
  
          return state;
  
      }
    };
    
    export default chats;
    