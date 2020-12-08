import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import Button from '@material-ui/core/Button';
import {useFormik} from 'formik';
import InputText from '../../atoms/inputText/InputText';
import {postData} from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
import {removeAfterBuy} from '../../../reducers/cartReducer/duck/actions';
import {switchAlert} from '../../../reducers/alertReducer/duck/actions';
import { useHistory } from "react-router-dom";

const slideTop = keyframes`
  0% {transform: translateY(-50px); opacity: 0}
  50% {transform: translateY(5px); opacity: 0.5}
  100% {transform: translateY(0); opacity: 1}
`

const StyledFormWrapper = styled.div`
   width: 300px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: whitesmoke;
   box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
   animation: ${slideTop} 1s;
`;

const StyledError = styled.div.attrs({
  className: 'ml-1 mt-1'
})`
  color: red;
  font: 12px Arial, sans-serif;
  align-self: flex-start;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const validate = value => {
  const LENGTH_VALIDATE = 'To pole nie może być puste';
  const LESS_THAN_FOUR = 'Minimum 4 znaki'
  const LESS_THAN_FIVE = 'Minimum 5 znaków'
  const ERROR_POSTCODE = 'Nieprawidłowy format, wprowadź ( __-___ )'
  const regex = /\d{2}-\d{3}/;
  const errors = {}

  if (!value.name) {
    errors.name = LENGTH_VALIDATE
  } else if (value.name.length < 4) {
    errors.name = LESS_THAN_FOUR
  }

  if (!value.surname) {
    errors.surname = LENGTH_VALIDATE
  } else if (value.surname.length < 5) {
    errors.surname = LESS_THAN_FIVE
  }

  if (!value.city) {
    errors.city = LENGTH_VALIDATE
  } else if (value.city.length < 4) {
    errors.city = LESS_THAN_FOUR
  }
  if (!value.postcode) {
    errors.postcode = LENGTH_VALIDATE
  } else if (!regex.test(value.postcode)) {
    errors.postcode = ERROR_POSTCODE
  }
  return errors
}


const CredentialForm = () => {
  const history = useHistory();

  const cart = useSelector(state => state.cart.cart);
  const order = cart.map(({id, quantity}) => ({id, quantity}))
  const ids = cart.map(({id}) => id)
  const dispatch = useDispatch()

  const removeFromSessionStorage = () => {
    ids.map(id => {
      sessionStorage.removeItem(id.toString())
    })
  }

  const formik = useFormik({
    initialValues: {name: '', surname: '', city: '', postcode: '',},
    validate,
    onSubmit: async values => {
      let postOk = false
      try {
        await postData('order', {
          order,
          first_name: values.name,
          last_name: values.surname,
          city: values.city, zip_code:
          values.postcode
        })
        postOk = true
      } catch (e) {
        dispatch(switchAlert({on: true, message: 'Coś poszło nie tek', type: error}))
      }
      if (postOk) {
        removeFromSessionStorage();
        dispatch(removeAfterBuy(ids))
        history.push('/books')
      }
    }
  })

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <InputText
          type='text'
          name='name'
          label='Imię'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <StyledError>{formik.errors.name}</StyledError>)}
        <div className='mt-2'/>
        <InputText
          label='Nazwisko'
          type='text'
          name='surname'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        {formik.errors.surname && formik.touched.surname && (
          <StyledError>{formik.errors.surname}</StyledError>)}
        <div className='mt-2'/>
        <InputText
          label='Miasto'
          type="text"
          name='city'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.errors.city && formik.touched.city && (
          <StyledError>{formik.errors.city}</StyledError>)}
        <div className='mt-2'/>
        <InputText
          label='Kod pocztowy'
          type='text'
          name='postcode'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postcode}
        />
        {formik.errors.postcode && formik.touched.postcode && (
          <StyledError>{formik.errors.postcode}</StyledError>)}

        <div className='mt-4 mb-2'>
          <Button type='submit' style={{background: '#AFCCFA', color: 'white'}}>
            zamawiam i płacę
          </Button>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  )
};


export default CredentialForm;
