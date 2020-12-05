import {getData} from '../../../api';
import {putBooksToStore} from './actions';

export const fetchBooks = () => (
  async dispatch => {
    const result = await getData('book')
    dispatch(putBooksToStore(result.data.data))
  }
)
