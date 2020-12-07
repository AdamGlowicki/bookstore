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
      return ({id: parseInt(item[0]), quantity: parseInt(item[1])})
  }).filter(item => item != null)
}
