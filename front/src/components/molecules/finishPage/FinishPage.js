import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import ProgressLine from '../progressLine/ProgressLine';
import CustomLink from '../../atoms/customLink/CustomLink';
import {useHistory} from 'react-router';
import StyledLinkContent from '../../atoms/linkContent/StyledLinkContent';

const slideDown = keyframes`
  0% {transform: translateY(-100px); opacity: 0}
  50% {transform: translateY(10px); opacity: .5}
  100% {transform: translateY(0); opacity: 1}
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 1s;
  transform-origin: top;
`

const StyledTitle = styled.div.attrs({
  className: 'mt-5'
})`
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 140px;
  width: 60vw;
  font: 32px Arial, sans-serif;
  font-weight: 600;
`

const FinishPage = () => {
  const history = useHistory()

  useEffect(() => {
    const handler = setTimeout(() => history.push('/books'), 5000)

    return () => {
      clearTimeout(handler)
    }
  }, [])

  return (
    <StyledWrapper>
      <ProgressLine stage='third'/>
      <StyledTitle>
        Dziękujemy za zakupy w naszym sklepie, za 5 sekund nastąpi przekierowaine na strone główną.
      </StyledTitle>

      <div className='mt-5'>
        <CustomLink to='/books'>
          <StyledLinkContent>
            wróć do strony głównej
          </StyledLinkContent>
        </CustomLink>
      </div>
    </StyledWrapper>
  );
};

FinishPage.propTypes = {

};

export default FinishPage;
