import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';
import ItemInCart from '../itemInCart/ItemInCart';
import {useSelector} from 'react-redux';
import bag from '../../../assets/images/bag.png'
import ProgressLine from '../progressLine/ProgressLine';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
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
  justify-self: center;
  max-height: 300px;
  object-fit: contain;
`

const StyledCart = styled.div`
  grid-column: 1 / 2;
  display: grid;
`

const StyledCartHead = styled.div.attrs({
  className: 'mb-4 p-3'
})`
`

const CartComponent = () => {
  const cart = useSelector(state => state.cart.cart)

  return (
    <Fragment>
      <div className='d-flex flex-row justify-content-center mt-3 mb-4'>
        <ProgressLine stage='first'/>
      </div>

      <StyledWrapper>
        <StyledCart>
          {cart.length ? (
            <div>

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
            </div>
          ) : (
            <StyledBag src={bag} alt='torba zakupowa'/>
          )}
        </StyledCart>


        <StyledAside>

        </StyledAside>
      </StyledWrapper>
    </Fragment>
  );
};

export default CartComponent;
