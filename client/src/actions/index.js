import axios from 'axios';
import {FETCH_COLOURS, CLEAR_COLOURS} from './types';
import request from "superagent";

export const uploadImage = (file) =>
  async dispatch => {
    const req = request.post('/api/upload');
    req.attach('file', file);
    req.then(
      res => {
        console.log(res.body);
        dispatch({ type: FETCH_COLOURS, payload: res.body});
     });
  };

  export const clearColours = () => dispatch => {
      dispatch({ type: CLEAR_COLOURS, payload: []});
    };
