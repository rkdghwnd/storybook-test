import { Box } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../Styles/CommonStyled';

const SignHeader = () => {
  return (
    <Box p="15px 20px">
      {/* <picture>
        <source srcSet="/images/logo.webp" type="image/webp" className="logo-header" onClick={() => navigate('/')} />
        <img src="/images/logo.png" alt="logo" className="logo-header" onClick={() => navigate('/')} />
      </picture> */}
      <Link to="/">
        <Logo as="h1">STORYO</Logo>
      </Link>
    </Box>
  );
};

export default SignHeader;
