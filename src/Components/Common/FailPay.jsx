//모바일 결제 실패시
import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";
import SignHeader from "Components/Layout/SignHeader";
import { useLocation } from "react-router-dom";

const Failpay = () => {
  const location = useLocation();
  const locationState = location.state;

  return (
    <Box bg='#fff' >
    <SignHeader />
    <Flex
      h='100vh'
      direction={"column"}
      justify='center'
      align='center'
      gap='35px'
    >
      <Box p='0 20px'>
        <Heading as='h3' size={{base:'md', md:'lg'}} textAlign='center' wordBreak='keep-all'>
          결제가 이루어지지 않았습니다!😢
        </Heading>
        <Text
          fontSize={{base:'sm', md:'lg'}}
          textAlign='center'
          mt={'8px'}
          wordBreak='keep-all'
        >
          다시 한 번 시도해 보시겠어요?
        </Text>
        <Text
          textAlign='center'
          mt='20px'
          backgroundColor='#edf2f6'
          maxW={'760px'}
          p='10px'
          borderRadius={'5px'}
          wordBreak='keep-all'
          fontWeight={600}
        >
          {locationState ? `[${locationState.errorStatus}] ${locationState.errorResMessage}`: '결제 중 오류가 발생했습니다.'}
        </Text>

      </Box>
      <Link to='/membership'>
        <Button colorScheme={"purple"}>다시 가입하기</Button>
      </Link>
    </Flex>
    </Box>
  );
};

export default Failpay;
