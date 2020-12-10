import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer.attrs({
  className: 'p-2'
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font: 13px Arial, sans-serif;
`

const Footer = () => {
  return (
    <StyledFooter>
      © Księgarnia. Wszelkie prawa zastrzeżone.
    </StyledFooter>
  );
};

export default Footer;
