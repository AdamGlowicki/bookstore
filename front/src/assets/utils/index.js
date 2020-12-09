import {putItemToCart} from '../../reducers/cartReducer/duck/actions';
import {switchAlert} from '../../reducers/alertReducer/duck/actions';

export const getCurrency = (currency) => {
  switch (currency) {
    case 'PLN':
      return 'zł'
    default:
      return ''
  }
};

export const divideArray = (array, partsNumber) => {
  let dividedArray = [];

  if (array) {
    let booksToDivide = [...array];
    while (booksToDivide.length) {
      const part = booksToDivide.slice(0, partsNumber)
      booksToDivide.splice(0, partsNumber)
      dividedArray = [...dividedArray, part]
    }
  }
  return dividedArray;
}

export const getSessionStorage = () => {
  const sessionData = Object.entries(sessionStorage)
  return sessionData.map((item, i) => {
      if (isNaN(parseInt(item[0]))) {
          return null
      }
      const obj = JSON.parse(item[1])
      return ({id: parseInt(item[0]), quantity: obj.quantity, price: obj.price})
  }).filter(item => item !== null)
}

export const handleAddToCart = (dispatch, book) => {
  const cartItem = sessionStorage.getItem(book.id.toString())
  if (cartItem) {
    const item = JSON.parse(cartItem)
    sessionStorage.setItem(book.id.toString(), JSON.stringify({quantity: item.quantity + 1 , price: book.price}))
  } else {
    sessionStorage.setItem(book.id.toString(), JSON.stringify({quantity: 1 , price: book.price}))
  }

  dispatch(putItemToCart({id: book.id, price: book.price}))
  dispatch(switchAlert({on: true, message: 'Pomyślnie dodano do koszyka', type: 'success'}))
}
