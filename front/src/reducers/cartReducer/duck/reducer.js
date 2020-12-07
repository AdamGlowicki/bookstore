import {
  ADD_FROM_SESSION_TO_CART,
  ADD_TO_CART, REMOVE_FROM_CART,
  SET_NUMBER_ITEMS_CART
} from './type';
import {handleAddToCart, remove, setQuantity} from './method';

const initState = {
  cart: [],
};

const cartReducer = (state = initState, {type, payload}) => {
  switch (type){
    case ADD_TO_CART:
      return handleAddToCart(state, payload)
    case SET_NUMBER_ITEMS_CART:
      return setQuantity(state, payload)
    case ADD_FROM_SESSION_TO_CART:
      return {...state, cart: [...state.cart, ...payload]}
    case REMOVE_FROM_CART:
      return remove(state, payload);
    default:
      return {...state}
  }
}

export default cartReducer;
