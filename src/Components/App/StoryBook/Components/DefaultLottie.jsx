import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import book from '../../../../book.json';
import { Flex } from '@chakra-ui/react';

const LoadingBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

export default function DefaultLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: book,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <LoadingBox>
      <Flex direction="column" align="centet" gap="10px">
        <Lottie options={defaultOptions} height={300} width={300} />
        <LoadingText>
          <div>최대 1분 소요됩니다. 잠시만 기다려주세요.</div>
        </LoadingText>
      </Flex>
    </LoadingBox>
  );
}
