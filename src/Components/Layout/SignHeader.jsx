import React from 'react';
import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SignHeader = () => {
  const navigate = useNavigate();

  return (
    <Box p="15px 20px">
      <picture>
        <source srcSet="/images/logo.webp" type="image/webp" className="logo-header" onClick={() => navigate('/')} />
        <img src="/images/logo.png" alt="logo" className="logo-header" onClick={() => navigate('/')} />
      </picture>
    </Box>
  );
};

export default SignHeader;
