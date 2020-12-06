import {sortLabels} from '../../../enum';

const sortPriceASC = (array) => {
  return array.sort((a, b) => a.price - b.price)
}

const sortPriceDESC = (array) => {
  return array.sort((a, b) =>  b.price - a.price)
}

const sortPagesASC = (array) => {
  return array.sort((a, b) => a.pages - b.pages)
}

const sortPagesDESC = (array) => {
  return array.sort((a, b) => b.pages - a.pages)
}

export const sortBooks = (category, array) => {
  switch (category) {
    case sortLabels.PRICE_ASC:
      return sortPriceASC(array);
    case sortLabels.PRICE_DESC:
      return sortPriceDESC(array);
    case sortLabels.PAGE_ASC:
      return sortPagesASC(array);
    case sortLabels.PAGE_DESC:
      return sortPagesDESC(array);
    default:
      return []
  }
}
