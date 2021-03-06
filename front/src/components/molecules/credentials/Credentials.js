import React from 'react';
import CredentialForm from './CredentialForm';
import styled, {keyframes} from 'styled-components';
import ProgressLine from '../progressLine/ProgressLine';
import CustomLink from '../../atoms/customLink/CustomLink';
import StyledLinkContent from '../../atoms/linkContent/StyledLinkContent';

const slideLeft = keyframes`
  0% {transform: translateX(-50px); opacity: 0}
  50% {transform: translateX(5px); opacity: 0.5}
  100% {transform: translateY(0); opacity: 1}
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(CustomLink)`
  align-self: flex-start;
  animation: ${slideLeft} 1s;
`

const Credentials = props => {
  return (
    <StyledWrapper>
      <ProgressLine stage='second'/>
      <div className='mb-5'/>
      <CredentialForm/>

      <StyledLink to='cart'>
        <StyledLinkContent second>
          wróc do koszyka
        </StyledLinkContent>
      </StyledLink>

    </StyledWrapper>
  );
};

Credentials.propTypes = {};

export default Credentials;
