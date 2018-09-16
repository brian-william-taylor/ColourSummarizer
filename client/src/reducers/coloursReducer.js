import {FETCH_COLOURS, CLEAR_COLOURS} from '../actions/types'

export default function(state = [], action){
  console.log(action);
  switch(action.type){
    case FETCH_COLOURS:
      return action.payload;
    case CLEAR_COLOURS:
      return [];
    default:
      return state;
  }
}
