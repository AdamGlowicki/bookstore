export const sortLabels = {
  PRICE_ASC: 'Cena rosnąco',
  PRICE_DESC: 'Cena malejąco',
  ALPHABET_ASC: 'Alfabetycznie a-z',
  ALPHABET_DESC: 'Alfabetycznie z-a',
}

export const sortTemplates = [
  {id: 1, label: sortLabels.PRICE_ASC},
  {id: 2, label: sortLabels.PRICE_DESC},
  {id: 3, label: sortLabels.ALPHABET_ASC},
  {id: 4, label: sortLabels.ALPHABET_DESC},
];

export const showNumbers = [
  {id: 1, number: 4},
  {id: 2, number: 8},
  {id: 3, number: 12},
]

export const mediaQueries = {
  mobile: '(max-width:450px)',
  notebook: '(min-width:1000px) and (max-width:1400px)',
}
