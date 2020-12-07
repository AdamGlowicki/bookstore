import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import InputText from '../../atoms/inputText/InputText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import {
  removeFromCart,
  setCartQuantity
} from '../../../reducers/cartReducer/duck/actions';
import {
  switchAlert,
  switchProgress
} from "../../../reducers/alertReducer/duck/actions";
import {getData} from "../../../api";
import AcceptWindow from '../acceptWindow/AcceptWindow';

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
  display: ${props => props.display ? 'flex' : 'none'};
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
const ItemInCart = ({book: {id, quantity}, index}) => {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(true)
  const [display, setDisplay] = useState(false)
  const [book, setBook] = useState({})
  const [openAcceptWindow, setOpenAcceptWindow] = useState(false);

  const dispatch = useDispatch();


  const asyncGetProduct = async () => {
    dispatch(switchProgress(true))
    try {
      const result = await getData(`book/${id}`)
      setBook(result.data.data)
    } catch (e) {
      dispatch(switchAlert({
        on: true,
        message: 'Nie udało się załadować treści',
        type: 'error'
      }))

    }
    dispatch(switchProgress(false))
  }


  useEffect(() => {
    asyncGetProduct()
    const handler = setTimeout(() => setDisplay(true), index * 200)
    return () => {
      clearTimeout(handler)
    }
  }, [])

  const openModal = () => {
    setOpen(!open)
  }

  const handleChange = (e) => {
    const {value} = e.target;
    if (value <= '0') {
      setOpenAcceptWindow(true)
    } else {
      dispatch(setCartQuantity({id, quantity: parseInt(value)}))
      sessionStorage.setItem(id.toString(), value.toString())
    }
  }

  const handleStartAnimationClose = () => {
    setAnimation(false)
  }

  const onAnimationEnd = () => {
    if (!animation) {
      dispatch(removeFromCart(id))
      sessionStorage.removeItem(id.toString())
    }
  }

  return (
    <Fragment>
      <StyledWrapper
        display={display ? 'true' : undefined}
        animation={animation ? true : false}
        onAnimationEnd={onAnimationEnd}
      >
        <div style={{width: '80%'}}>
          <Tooltip title='Kliknij żeby zobaczyć szczegóły'>
            <Button onClick={openModal}>
              <StyledButtonContent>
                <StyledAvatar src={book.cover_url}/>

                <StyledTitle>
                  {book.title}
                </StyledTitle>
              </StyledButtonContent>
            </Button>
          </Tooltip>
        </div>

        <div className='d-flex flex-row justify-content-around'
             style={{width: '20%'}}>
          <InputText
            type='number'
            width='50px'
            onChange={handleChange}
            value={quantity}
            inputProps={{
              style: {padding: 0, textAlign: 'center'}
            }}
          />
          <Tooltip title='Usuń produkt z koszyka'>
            <IconButton onClick={() => setOpenAcceptWindow(true)} size='small'>
              <DeleteIcon style={{color: 'red'}} fontSize='small'/>
            </IconButton>
          </Tooltip>
        </div>
      </StyledWrapper>

      <AcceptWindow
        setOpen={setOpenAcceptWindow}
        open={openAcceptWindow}
        callback={handleStartAnimationClose}
        message='Czy na pewno chcesz usunąć produkt z koszyka?'
      />
    </Fragment>

  );
};

ItemInCart.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

ItemInCart.defaultProps = {
  quantity: 1
}

export default ItemInCart;
