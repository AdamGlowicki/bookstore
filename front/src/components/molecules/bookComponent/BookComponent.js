import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes, css} from 'styled-components';
import {getCurrency} from '../../../assets/utils';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useFocusRef} from '../../../customHooks';
import {useDispatch} from 'react-redux';
import {putItemToCart} from '../../../reducers/cartReducer/duck/actions';
import {switchAlert} from '../../../reducers/alertReducer/duck/actions';

const slide = keyframes`
  0% {transform: translateY(-50px); opacity: 0}
  50% {transform: translateY(10px);}
  100% {transform: translateY(0); opacity: 1}
`

const opacity = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
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
  max-height: 196px;
  object-fit: contain;
  ${({animation}) => (
    animation && css`
      animation: ${opacity} 1s;
    `
  )}
`

const StyledDescription = styled.div.attrs({
  className: 'ml-2 mt-3'
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledTitle = styled.h3`
  font: 13px Arial, sans-serif;
  font-weight: 400;
  color: #0F1111;
`

const StyledAuthor = styled.h5`
  font: 13px Arial, sans-serif;
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
  font: 11px Arial, sans-serif;
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
  const [animationOnPicture, setAnimationOnPicture] = useState(false)

  const dispatch = useDispatch()

  const ref = useRef();
  const refAction = useFocusRef(ref);

  useEffect(() => {
    setAnimationOnPicture(refAction)
  }, [refAction])

  useEffect(() => {
    const handler = setTimeout(() => setDisplay(true), index * 100)

    return () => {
      clearTimeout(handler)
    }
  }, [])

  const addOne = (item) => (
    (parseInt(item) + 1).toString()
  )

  const handleAddToCart = () => {
    const cartItems = sessionStorage.getItem(book.id.toString())
    sessionStorage.setItem(book.id.toString(), cartItems ? addOne(cartItems) : '1')
    dispatch(putItemToCart(book.id))
    dispatch(switchAlert({on: true, message: 'Pomyślnie dodano do koszyka', type: 'success'}))
  }

  return (
    <StyledWrapper display={display ? 'true' : undefined}>
      <StyledAvatar
        ref={ref}
        src={book.cover_url}
        alt={book.title}
        animation={animationOnPicture ? 'true' : undefined}
      />

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
          onClick={handleAddToCart}
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
