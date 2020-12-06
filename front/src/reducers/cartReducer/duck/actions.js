import {
  ADD_FROM_SESSION_TO_CART,
  ADD_TO_CART,
  SET_NUMBER_ITEMS_CART
} from './type';

export const putItemToCart = payload => ({
  type: ADD_TO_CART,
  payload,
})

export const setCartQuantity = payload => ({
  type: SET_NUMBER_ITEMS_CART,
  payload
})

export const addFromSession = payload => ({
  type: ADD_FROM_SESSION_TO_CART,
  payload,
})
