import {
  ADD_FROM_SESSION_TO_CART,
  ADD_TO_CART, REMOVE_FROM_CART,
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

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
})
