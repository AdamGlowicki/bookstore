import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  overflowY: scroll;
  overflow-x: hidden;
`

const StyledContent = styled.div`
  width: 1024px;
  background-color:white;
`


const MainTheme = ({children}) => {

  return (
      <StyledWrapper>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledWrapper>
  );
};

MainTheme.propTypes = {
};

export default MainTheme;
