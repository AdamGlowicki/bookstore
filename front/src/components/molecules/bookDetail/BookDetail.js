import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {getData} from '../../../api';
import {switchAlert} from '../../../reducers/alertReducer/duck/actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const BookDetail = ({match}) => {
  const [book, setBook] = useState({})
  const dispatch = useDispatch()

  const asyncGetBook = async () => {
    try {
      const result = await getData(`/book/${id}`)
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
      {/*{!_.isEmpty(book) && (*/}
        <StyledWrapper>
          {/*{match.params.id}*/}
          sasassaasdddddddddwdaad
        </StyledWrapper>
      {/*)}*/}
    </Fragment>
  );
};

BookDetail.propTypes = {};

export default BookDetail;
