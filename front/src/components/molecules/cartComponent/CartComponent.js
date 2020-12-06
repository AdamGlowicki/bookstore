import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';
import ItemInCart from '../itemInCart/ItemInCart';
import {useSelector} from 'react-redux';
import bag from '../../../assets/bag.png'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`

const StyledItems = styled.div`
  grid-column: 1 / 2;
`

const StyledAside = styled.aside`
  grid-column: 2 / 3;
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
  grid-column: 1 / 2;
  justify-self: center;
  max-height: 300px;
  object-fit: contain;
`

const CartComponent = () => {
  const [books, setBooks] = useState([])

  const gotBooks = useSelector(state => state.books.books)
  const cart = useSelector(state => state.cart.cart)
  const ids = cart.map(item => item.id)
  const quantities = cart.map(item => item.quantity)

  useEffect(() => {
    if (gotBooks) {
      setBooks(gotBooks.filter(item => ids.includes(item.id)))
    }
  }, [gotBooks])

  const getQuantityById = (id) => {
    return cart.filter(item => item.id === id)[0].quantity
  }

  return (
    <Fragment>
      <StyledWrapper>
        {books.length ? (
          <StyledItems>
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

            {books.map((item, i) => (
              <ItemInCart key={item.id} book={item} index={i} quantity={getQuantityById(item.id)}/>))}
          </StyledItems>
        ) : (
          <StyledBag src={bag}/>
        )}
        <StyledAside>

        </StyledAside>
      </StyledWrapper>
    </Fragment>
  );
};

export default CartComponent;
