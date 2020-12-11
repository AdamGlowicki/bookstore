import React from 'react';
import styled, {css} from 'styled-components';
import {useMediaQuery} from '@material-ui/core';
import {mediaQueries} from '../../../enum';

const StyledImage = styled.img`
  height: 400px;
  object-fit: contain;
  ${({mobile}) => (
    mobile && css`
      width: 300px;
    `
  )}
`

const NoMatch = () => {
  const mobile = useMediaQuery(mediaQueries.mobile)

  return (
    <div className='d-flex flex-row justify-content-center mt-5 mb-5'>
      <StyledImage mobile={mobile} alt='404' src='https://funkymedia.pl/wp-content/uploads/2018/09/blad-404.png'/>
    </div>
  );
};

export default NoMatch;
