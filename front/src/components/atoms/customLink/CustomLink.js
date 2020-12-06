import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-transform: none;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
  }
`

const CustomLink = ({children, ...props}) => (
  <StyledLink {...props}>
    {children}
  </StyledLink>
);

export default CustomLink;
