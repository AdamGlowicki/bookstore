import styled, {css} from 'styled-components';

const StyledLinkContent = styled.div.attrs({
  className: 'p-2 mt-5'
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  background-color: #AFCCFA;
  text-transform: uppercase;
  color: white;
  font: 14px Arial, sans-serif;
  font-weight: 600;
  border-radius: 4px;
  ${({second}) => (
  second && css`
      background-color: #E0553F;
      height: 28px;
      font-size: 10px;
    `
)}
`
export default StyledLinkContent;
