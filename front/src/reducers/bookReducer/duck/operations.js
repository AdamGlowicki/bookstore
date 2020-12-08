import {getData} from '../../../api';
import {putBooksToStore} from './actions';
import {switchAlert} from "../../alertReducer/duck/actions";

export const fetchBooks = () => (
  async dispatch => {
    try {
      const result = await getData('book')
      dispatch(putBooksToStore(result.data.data))
    } catch (e) {
      dispatch(switchAlert({on: true, message: 'Nie udało sie pobrać danych', type: 'error'}))
    }
  }
)
