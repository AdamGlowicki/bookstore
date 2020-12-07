import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import InputText from '../../atoms/inputText/InputText';

const StyledWrapper = styled.div`
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  height: 100vh;
  width: 680px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;


const CredentialForm = ({ }) => (
  <StyledWrapper >
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
      onSubmit={values => {

      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <InputText
            type="text"
            name=""
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />

            <InputText
              placeholder=""
              type="text"
              name=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />


            <InputText
              placeholder=""
              type="text"
              name=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          <Button type="submit" >
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);




export default CredentialForm;
