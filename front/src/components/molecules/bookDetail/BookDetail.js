import React, {Fragment, useEffect, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {useDispatch} from 'react-redux';
import {getData} from '../../../api';
import {switchAlert} from '../../../reducers/alertReducer/duck/actions';
import {useParams} from 'react-router';
import {getCurrency, handleAddToCart} from '../../../assets/utils';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {mediaQueries} from '../../../enum';

const slideDown = keyframes`
  0% {transform: translateY(-100px); opacity: 0}
  50% {transform: translateY(10px); opacity: .5}
  100% {transform: translateY(0); opacity: 1}
`

const StyledWrapper = styled.div.attrs({
  className: 'mt-5'
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation: ${slideDown} 1s;
  transform-origin: top;
  ${({mobile}) => (
  mobile && css`
      flex-direction: column;
      align-items: center;
    `
  )}
`

const StyledAvatar = styled.img`
  max-height: 348px;
  object-fit: contain;
`

const StyledTitle = styled.h3`
  font: 24px Arial, sans-serif;
  font-weight: 600;
  color: #0F1111;
  overflow-wrap: break-word;
`

const StyledPrice = styled.div.attrs({
  className: 'mt-2 mb-2'
})`
  font: 22px Arial, sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const StyledCurrency = styled.div.attrs({
  className: 'ml-1'
})`
  font: 12px Arial, sans-serif;
`

const StyledDepiction = styled.div.attrs({
  className: 'mt-3'
})`
  font: 14px Arial, sans-serif;
  width: 500px;
  line-height: 24px;
  height: calc(24px * 4);
  overflow: hidden;
  ${({more}) => (
  more && css`
      height: auto;
    `
  )}
  ${({mobile}) => (
  mobile && css`
      width: auto;
    `
  )}

`

const BookDetail = () => {
  const [book, setBook] = useState({})
  const [moreInfo, setMoreInfo] = useState(false)

  const mobile = useMediaQuery(mediaQueries.mobile)

  const dispatch = useDispatch()
  const {id} = useParams();

  const asyncGetBook = async () => {
    try {
      const result = await getData(`book/${id}`)
      setBook(result.data.data)
    } catch (e) {
      dispatch(switchAlert({
        on: true,
        message: 'Coś poszło nie tak',
        type: 'error'
      }))
    }
  }

  useEffect(() => {
    asyncGetBook()
  }, [])

  return (
    <Fragment>
      {Object.values(book).length ? (
        <StyledWrapper mobile={mobile}>
          <div>
            <StyledAvatar src={book.cover_url} alt='książka'/>
          </div>

          <div
            className={mobile ? '' : 'd-flex flex-column justify-content-start ml-5'}>
            <div className='d-flex flex-column'>
              <StyledTitle>
                <span style={{font: '24px arial 600,sans-serif'}}
                      className='mr-2'
                >
                  Tytuł:
                </span>
                {book.title}
              </StyledTitle>
              <StyledPrice>
                {book.price}
                <span>,00</span>
                <StyledCurrency>{getCurrency(book.currency)}</StyledCurrency>
              </StyledPrice>

              <div>
                <Button
                  onClick={() => handleAddToCart(dispatch, book)}
                  className='mb-2 mr-2'
                  endIcon={<AddShoppingCartIcon fontSize='small'/>}
                  size='small'
                  style={{background: '#afccfa'}}
                >
                  Dodaj
                </Button>
              </div>

            </div>

            <div>
              <div>
                <StyledDepiction mobile={mobile} more={moreInfo}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  accusantium ad cum delectus dicta, eligendi eveniet facere,
                  illo
                  incidunt ipsam nobis nulla odit perspiciatis quia rem
                  repellendus
                  reprehenderit soluta ut.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta
                  eaque eligendi minima nostrum placeat quas ratione. Assumenda
                  commodi culpa fugiat, iusto minus, nam natus nemo perferendis
                  quasi quos vitae, voluptas?
                </StyledDepiction>
              </div>
              <Button onClick={() => setMoreInfo(!moreInfo)} size='small'
                      aria-setsize={14}>{moreInfo ? 'mniej' : 'więcej'}</Button>
            </div>

          </div>
        </StyledWrapper>
      ) : null}
    </Fragment>
  );
};

export default BookDetail;
