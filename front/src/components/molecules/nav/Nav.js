import React from 'react';
import styled, {keyframes} from 'styled-components';
import logo from '../../../assets/logo.jpg'
import CustomLink from '../../atoms/customLink/CustomLink';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

const slide = keyframes`
  from {transform: scaleX(0); opacity: 0}
  to {transform: scaleX(1); opacity: 1}
`

const StyledNav = styled.nav`
  margin-top: 80px;
  width: 100%;
  animation: ${slide} 1s;
  transform-origin: 0 0;
  background-color: rgb(247, 243, 243);
  border-radius: 8px;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
`

const StyledLi =  styled.li`
  display: block;
  margin: 0
`

const StyledLogo = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 4px;
  background-image: url(${logo});
  background-size: cover;
  background-position:center;
`

const StyledLogoContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <CustomLink to='/'>
            <StyledLogoContent>
              <div>
                <StyledLogo/>
              </div>
              <div className='ml-2' style={{fontSize: '32px', color: 'lightgrey'}}>
                Księgarnia
              </div>
            </StyledLogoContent>
          </CustomLink>
        </StyledLi>

        <StyledLi>
          <Tooltip title='Przejdź do koszyka'>
            <div className='mr-3'>
              <CustomLink to='/cart'>
                <ShoppingCartIcon style={{color: 'lightgrey'}}  fontSize='large'/>
              </CustomLink>
            </div>
          </Tooltip>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
