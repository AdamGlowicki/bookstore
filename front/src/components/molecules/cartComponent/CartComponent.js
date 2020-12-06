import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemInCart from '../itemInCart/ItemInCart';

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

const CartComponent = props => {
  return (
    <Fragment>
      <StyledWrapper>
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

          <ItemInCart/>
        </StyledItems>

        <StyledAside>

        </StyledAside>
      </StyledWrapper>
    </Fragment>
  );
};

CartComponent.propTypes = {};

export default CartComponent;
