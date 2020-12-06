import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes, css} from 'styled-components';
import {getCurrency} from '../../../utils';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const slide = keyframes`
  0% {transform: translateY(-50px); opacity: 0}
  50% {transform: translateY(10px);}
  100% {transform: translateY(0); opacity: 1}
`

const StyledWrapper = styled.div.attrs({
  className: 'mt-5'
})`
  width: 300px;
  display: none;
  flex-direction: column;
  animation: ${slide} 1s;
  ${({display}) => (
    display && css`
      display: flex;
  `
)}
`

const StyledAvatar = styled.img`
  max-height: 264px;
  object-fit: contain;
`

const StyledDescription = styled.div.attrs({
  className: 'ml-2 mt-3'
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledTitle = styled.h3`
  font: 16px Arial, sans-serif;
  font-weight: 400;
  color: #0F1111;
`

const StyledAuthor = styled.h5`
  font: 14px Arial, sans-serif;
  font-weight: 300;
  color:#007185;
`

const StyledPrice = styled.div.attrs({
  className: 'mt-2 mb-2'
})`
  font: 22px Arial, sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const StyledPages = styled.div`
  font: 14px Arial, sans-serif;
  font-weight: 400;
`

const StyledCurrency = styled.div.attrs({
  className: 'ml-1'
})`
  font: 12px Arial, sans-serif;
`

const StyledPartition = styled.div.attrs({
  className: 'mt-2'
})`
  border-bottom: 1px solid grey;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
`

const BookComponent = ({book, index}) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => setDisplay(true), index * 100)

    return () => {
      clearTimeout(handler)
    }
  }, [])

  return (
    <StyledWrapper display={display ? 'true' : undefined}>
      <StyledAvatar src={book.cover_url} alt={book.title}/>

      <StyledDescription>
        <StyledTitle>
          {book.title}
        </StyledTitle>

        <StyledAuthor>
          {book.author}
        </StyledAuthor>

        <StyledPrice>
          {book.price}
          <span>,00</span>
          <StyledCurrency>{getCurrency(book.currency)}</StyledCurrency>
        </StyledPrice>

        <StyledPages>
          <span>Liczba stron:</span> {book.pages}
        </StyledPages>
      </StyledDescription>

      <StyledPartition>
        <Button
          className='mb-2 mr-2'
          endIcon={<AddShoppingCartIcon fontSize='small'/>}
          size='small'
          style={{background: 'aqua'}}
        >
          Dodaj
        </Button>
      </StyledPartition>
    </StyledWrapper>
  );
};

BookComponent.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BookComponent;
