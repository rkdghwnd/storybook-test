import React from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SignHeader from 'Components/Layout/SignHeader';

const Paydone = () => {
  return (
    <Box bg="#edf2f6">
      <SignHeader />
      <Flex
        h="100vh"
        direction="column"
        align="center"
        justify={'center'}
        gap="50px"
        p="20px"
      >
        <Box lineHeight={'40px'}>
          <Heading as="h1" size={'4xl'} textAlign="center">
            Wow🥳
          </Heading>
          <Heading
            as="h3"
            size="md"
            textAlign="center"
            mt="20px"
            wordBreak="keep-all"
          >
            멤버십 결제가 완료되었습니다!
          </Heading>
          <Heading
            as="h4"
            size="sm"
            textAlign={'center'}
            mt="15px"
            wordBreak="keep-all"
          >
            {' '}
            결제 내역은 마이 페이지에서 확인하실 수 있습니다.
          </Heading>
        </Box>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'auto', md: 'center' }}
          gap="20px"
          w={{ base: '100%', sm: 'initial' }}
        >
          <Link to="/mypage">
            <Button w={{ base: '100%', sm: 'initial' }} colorScheme={'purple'}>
              마이 페이지
            </Button>
          </Link>
          <Link to="/service">
            <Button w={{ base: '100%', sm: 'initial' }} colorScheme={'yellow'}>
              서비스 홈
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Paydone;
