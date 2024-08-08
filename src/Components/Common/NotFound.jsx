//에러 페이지

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading } from '@chakra-ui/react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <ErrorContainer>
      <Flex h="100%" justify="center" align={'center'}>
        <ErrorPage
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap="3em"
        >
          <div>
            <picture>
              <source
                srcSet="/images/404_error.webp"
                type="image/webp"
                className="error404-image"
              />
              <img
                src="/images/404_error.png"
                alt="error"
                className="error404-image"
              />
            </picture>
          </div>
          <Box textAlign={'center'}>
            <Heading as="h2" size="lg" color={'#444'}>
              404 NOT FOUND
            </Heading>
            <Link to="/">
              <button className="error404-button">HOME</button>
            </Link>
          </Box>
        </ErrorPage>
      </Flex>
    </ErrorContainer>
  );
};

export default NotFound;

const ErrorContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const ErrorPage = styled(Flex)`
  > h2 {
    font-size: 1.8rem;
    font-weight: 900;
    word-break: keep-all;
    line-height: 2rem;
    margin-bottom: 20px;
  }

  > h3 {
    font-size: 1.2rem;
  }
`;
