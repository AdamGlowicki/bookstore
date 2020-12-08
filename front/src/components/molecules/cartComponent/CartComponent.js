import React, {Fragment, useEffect, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import ItemInCart from '../itemInCart/ItemInCart';
import {useSelector} from 'react-redux';
import bag from '../../../assets/images/bag.png'
import ProgressLine from '../progressLine/ProgressLine';
import CustomLink from '../../atoms/customLink/CustomLink';

const slide = keyframes`
  from {transform: scaleX(0); opacity: 0}
  to {transform: scaleX(1); opacity: 1}
`

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`

const StyledAside = styled.aside.attrs({
  className: 'mt-5 ml-2'
})`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  animation: ${slide} 1s;
  transform-origin: right;
`

const StyledInfo = styled.div.attrs({
  className: 'mt-5 mb-2'
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StyledTitle = styled.div`
  font: 12px Arial, SansSerif;
  font-weight: 500;
  text-align: center;
  width: ${props => props.width};
`

const StyledBag = styled.img.attrs({
  className: 'mt-5'
})`
  justify-self: center;
  max-height: 300px;
  object-fit: contain;
`

const StyledCart = styled.div`
  grid-column: 1 / 2;
  display: grid;
`

const StyledCartCalculate = styled.div`
    font: 20px Arial, sans-serif;
    color: black;
`

const StyledCartPrice = styled.div`
  font: 23px Arial, sans-serif;
  font-weight: 600;
  color: #3A70DE;
`

const StyledLinkContent = styled.div.attrs({
  className: 'p-2'
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  background-color: #AFCCFA;
  text-transform: uppercase;
  color: white;
  font: 14px Arial, sans-serif;
  font-weight: 600;
  border-radius: 4px;
  ${({second}) => (
  second && css`
      background-color: #E0553F;
      height: 28px;
      font-size: 10px;
    `
)}
`


const CartComponent = () => {
  const [stateBooks, setStateBooks] = useState([])

  const cart = useSelector(state => state.cart.cart)
  const price = useSelector(state => state.cart.price)
  const books = useSelector(state => state.books.books)
  const ids = cart.map(item => item.id)
  useEffect(() => {
    if (books) {
      setStateBooks(books.filter(item => ids.includes(item.id)))
    }
  }, [books])

  const sumCart = () => {
    let price = 0;
    cart.map(item => {
      price += (item.quantity * item.price)
    })

    return price
  }


  return (
    <Fragment>
      <div className='d-flex flex-row justify-content-center mt-3 mb-4'>
        <ProgressLine stage='first'/>
      </div>
      {cart.length ? (
        <StyledWrapper>
          <StyledCart>
            <StyledInfo>
              <StyledTitle width='80%'>
                Produkty w koszyku
              </StyledTitle>
              <StyledTitle width='10%'>
                Ilość
              </StyledTitle>
              <StyledTitle width='10%'>
                Usuń
              </StyledTitle>
            </StyledInfo>

            {cart.map((item, i) => (
              <ItemInCart key={item.id} book={item} index={i}/>))}
          </StyledCart>

          <StyledAside>
            <div className='d-flex flex-row justify-content-around'>
              <StyledCartCalculate>
                Aktualna wartość koszyka:
              </StyledCartCalculate>
              <StyledCartPrice>
                {sumCart()} zł
              </StyledCartPrice>
            </div>

            <div className='mt-5 mr-5 d-flex flex-row justify-content-between align-items-center'>
              <div className='ml-5'>
                <CustomLink to='books'>
                  <StyledLinkContent second>
                    do strony głównej
                  </StyledLinkContent>
                </CustomLink>
              </div>

              <CustomLink to='credentials'>
                <StyledLinkContent>
                  Do danych adresowych
                </StyledLinkContent>
              </CustomLink>
            </div>
          </StyledAside>
        </StyledWrapper>
      ) : (
        <StyledBag src={bag} alt='torba zakupowa'/>
      )}
    </Fragment>
  );
};

export default CartComponent;
