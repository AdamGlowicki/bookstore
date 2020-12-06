import {FETCH_DATA, SORT_BOOKS} from './type';
import {sortBooks} from './methods';

const initState = {}

const bookReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case FETCH_DATA:
      return {...state, books: [...payload]}
    case SORT_BOOKS:
      return {...state, books: [...sortBooks(payload, state.books)]}
    default:
      return state;
  }
}
export default bookReducer;
