import { combineReducers } from 'redux';
import coloursReducer from './coloursReducer';

export default combineReducers({
  colours: coloursReducer
});
