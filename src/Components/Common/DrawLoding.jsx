import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';

const ContentBox = styled(Box)`
  min-height: 500px;

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .flex-animation {
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    > p {
      margin-top: 5px;
    }
  }
`;

export const DrawLoading = () => {
  return (
    <ContentBox>
      <Flex
        className="flex-animation"
        minH="500px"
        justify={'center'}
        align={'center'}
        gap="15px"
        direction="column"
        p="60px 30px"
      >
        <img src="/images/couch.png" alt="카우치" width="150px" />
        <Text fontSize={'1.2rem'} fontWeight="600">
          Loading...
        </Text>
      </Flex>
    </ContentBox>
  );
};
