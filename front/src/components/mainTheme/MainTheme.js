import React from 'react';
import styled, {css} from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {mediaQueries} from '../../enum';
import Footer from '../molecules/footer/Footer';

const StyledWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  overflow-x: hidden;
`

const StyledContent = styled.div`
  background-color:white;
  width: 1300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${({middle}) => (
    middle && css`
      width: 1000px;
    `
)}
  ${({mobile}) => (
    mobile && css`
      width: 350px;
    `
)}
`

const MainTheme = ({children}) => {

  const middle = useMediaQuery(mediaQueries.notebook)
  const mobile = useMediaQuery(mediaQueries.mobile)
  return (
      <StyledWrapper>
        <StyledContent mobile={mobile} middle={middle}>
          <div className='flex-grow-1'>
            {children}
          </div>
          <Footer/>
        </StyledContent>
      </StyledWrapper>
  );
};

MainTheme.propTypes = {
};

export default MainTheme;
