import {sortLabels} from '../../../enum';

const sortPriceASC = (array) => {
  return array.sort((a, b) => a.price - b.price)
}

const sortPriceDESC = (array) => {
  return array.sort((a, b) =>  b.price - a.price)
}

const sortAlphabetASC = (array) => {
  return array.sort((a, b) => a.title.localeCompare(b.title))
}

const sortAlphabetDESC = (array) => {
  return array.sort((a, b) => b.title.localeCompare(a.title))
}

export const sortBooks = (category, array) => {
  switch (category) {
    case sortLabels.PRICE_ASC:
      return sortPriceASC(array);
    case sortLabels.PRICE_DESC:
      return sortPriceDESC(array);
    case sortLabels.ALPHABET_ASC:
      return sortAlphabetASC(array);
    case sortLabels.ALPHABET_DESC:
      return sortAlphabetDESC(array);
    default:
      return []
  }
}
