import React, {useEffect, useReducer} from 'react';
import styled, {css} from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProgress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: grey;
  font: 12px Arial, sans-serif;
  font-weight: bold;
  color: white;
  text-align: center;
  line-height: 20px;
  ${({big}) => (
  big && css`
      height: 30px;
      width: 30px;
      line-height: 30px;
    `
)}
`

const StyledLine = styled.div`
  height: 1px;
  width: 50px;
  background-color: grey;
`
const StyledDescription = styled.div.attrs({
  className: 'mt-2'
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledTitle = styled.div`
  font: 12px Arial, sans-serif;
  width: 123px;
  text-align: center;
`

const ProgressLine = ({stage}) => {
  const [big, setBig] = useReducer((prevState, state) => ({...prevState, ...state}), {
    first: false,
    second: false,
    third: false,
  })

  useEffect(() => {
    setBig({
      [stage]: true
    })
  }, [])

  return (
    <StyledWrapper>
      <StyledProgress>
        <div style={{marginLeft: '50px'}}/>
        <StyledCircle big={big.first}>1</StyledCircle>
        <StyledLine/>

        <StyledLine/>
        <StyledCircle big={big.second}>2</StyledCircle>
        <StyledLine/>

        <StyledLine/>
        <StyledCircle big={big.third}>3</StyledCircle>
        <div style={{marginRight: '50px'}}/>
      </StyledProgress>

      <StyledDescription>
        <StyledTitle>Zawatrość koszyka</StyledTitle>
        <StyledTitle>Adres dostawy</StyledTitle>
        <StyledTitle>Podsumowanie</StyledTitle>
      </StyledDescription>

    </StyledWrapper>

  );
};

export default ProgressLine;
