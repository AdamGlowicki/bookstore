import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {useSelector} from 'react-redux';
import DraggableModal from '../draggableModal/DraggableModal';
import BookComponent from '../bookComponent/BookComponent';
import Button from '@material-ui/core/Button';
import InputText from '../../atoms/inputText/InputText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const slide = keyframes`
  from {transform: scaleX(0); opacity: 0}
  to {transform: scaleX(1); opacity: 1}
`
const slideOut = keyframes`
  from {transform: scaleX(1); opacity: 1}
  to {transform: scaleX(0); opacity: 0}
`

const StyledWrapper = styled.section.attrs({
  className: 'p-2'
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  animation: ${props => props.animation ? slide : slideOut} 1s;
  transform-origin: left;
`

const StyledAvatar = styled.img`
  max-height: 50px;
  object-fit: contain;
`

const StyledTitle = styled.h6.attrs({
  className: 'ml-3 mb-0'
})`
  font: 12px Arial, sans-serif;
  text-transform: none;
`

const StyledButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const ItemInCart = props => {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(false)

  const books = useSelector(state => state.books.books)

  const booksInCart = books && books.filter(item => item.id === 457)[0]

  const openModal = () => {
    setOpen(!open)
  }
  return (
    <Fragment>
      {books && (
        <div>
          <StyledWrapper animation={animation ? 'true' : 'false'}>
            <div style={{width: '80%'}}>
              <Tooltip title='Kliknij żeby zobaczyć szczegóły'>
                <Button onClick={openModal}>
                  <StyledButtonContent>
                    <StyledAvatar src={booksInCart.cover_url}/>

                    <StyledTitle>
                      {booksInCart.title}
                    </StyledTitle>
                  </StyledButtonContent>
                </Button>
              </Tooltip>
            </div>

            <div className='d-flex flex-row justify-content-around' style={{width: '20%'}}>
              <InputText
                type='number'
                width='50px'
                inputProps={{
                  style: {padding: 0}
                }}
              />
              <Tooltip title='Usuń produkt z koszyka'>
                <IconButton size='small'>
                  <DeleteIcon style={{color: 'red'}} fontSize='small'/>
                </IconButton>
              </Tooltip>
            </div>
          </StyledWrapper>

          <DraggableModal open={open} setOpen={setOpen}>
            <BookComponent book={booksInCart} index={0}/>
          </DraggableModal>
        </div>
      )}


    </Fragment>

  );
};

ItemInCart.propTypes = {};

export default ItemInCart;
