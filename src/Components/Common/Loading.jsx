import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import styled from 'styled-components';

const LoadingBox = styled(Box)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled(Flex)`
  font-size: 20px;
  font-weight: 600;
  color: #000;

  .wave {
    animation: wave 2s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.5s;
    }
    &:nth-child(7) {
      animation-delay: 0.6s;
    }
    &:nth-child(8) {
      animation-delay: 0.7s;
    }
  }

  @keyframes wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingBox>
      <Flex direction={'column'} align="center" gap="20px">
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="#fff"
          color="#000"
          size="xl"
        />
        <LoadingText direction="row">
          <div className="wave">L</div>
          <div className="wave">o</div>
          <div className="wave">a</div>
          <div className="wave">d</div>
          <div className="wave">i</div>
          <div className="wave">n</div>
          <div className="wave">g</div>
          <div className="wave">...</div>
        </LoadingText>
      </Flex>
    </LoadingBox>
  );
};

export default Loading;
