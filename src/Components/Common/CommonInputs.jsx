import React from 'react';
import { Input } from '@chakra-ui/react';

const CommonInputs = ({ name, placeholder, text, onChange, maxLength }) => {
  return (
    <Input
      name={name}
      type={'text'}
      onChange={onChange}
      placeholder={placeholder}
      value={text}
      maxLength={maxLength}
    />
  );
};

export default CommonInputs;
