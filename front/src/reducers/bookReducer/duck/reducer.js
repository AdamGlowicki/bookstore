import {FETCH_DATA} from './type';

const initState = {}

const bookReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case FETCH_DATA:
      return {...state, books: [...payload]}
    default:
      return state;
  }
}
export default bookReducer;
