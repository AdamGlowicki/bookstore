import {getData} from '../../../api';
import {putBooksToStore} from './actions';
import {switchAlert, switchProgress} from "../../alertReducer/duck/actions";

export const fetchBooks = () => (
  async dispatch => {
    dispatch(switchProgress(true))
    try {
      const result = await getData('book')
      dispatch(putBooksToStore(result.data.data))
    } catch (e) {
      dispatch(switchAlert({on: true, message: 'Nie udało sie pobrać danych', type: 'error'}))
    }
    dispatch(switchProgress(false))
  }
)
