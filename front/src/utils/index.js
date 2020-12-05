export const getCurrency = (currency) => {
  switch (currency) {
    case 'PLN':
      return 'zł'
    default:
      return ''
  }
};
