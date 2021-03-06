export const handleAddToCart = (state, payload) => {
  const ids = state.cart.filter(item => item.id === payload.id)
  if (ids.length) {
    return {...state, cart: [...state.cart.map(item => {
      return item.id === payload.id ? {
        ...item,
        quantity: item.quantity + 1
      } : {...item}
      })]}
  } else {
    return {...state, cart: [...state.cart, {id: payload.id, quantity: 1, price: payload.price}]}
  }
}

export const setQuantity = (state, payload) => ({
  ...state,
  cart: [...state.cart.map(item => {
    return item.id === payload.id ? {
      ...item,
      quantity: payload.quantity
    } : {...item}
  })]
})

export const remove = (state, payload) => ({
  ...state,
  cart: [...state.cart.filter(item => item.id !== payload)]
})


