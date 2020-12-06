import {FETCH_DATA, SORT_BOOKS} from './type';

export const putBooksToStore = payload => ({
  type: FETCH_DATA,
  payload
})

export const sortBooksInStore = payload => ({
  type: SORT_BOOKS,
  payload
})
