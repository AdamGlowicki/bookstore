import React from 'react';
import InputText from '../inputText/InputText';

const Select = ({menuItems, ...props}) => {
  return (
    <InputText

      select
      {...props}
    >
      {menuItems()}
    </InputText>
  );
};;

export default Select;
