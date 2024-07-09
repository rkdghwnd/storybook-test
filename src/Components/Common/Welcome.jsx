import React from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SignHeader from "Components/Layout/SignHeader";

const Welcome = () => {
  return (
    <Box bg='#edf2f6' >
      <SignHeader />
      <Flex h='100vh' direction='column' align='center' justify={'center'} gap='50px' p='20px'>
        <Box lineHeight={'40px'}>
          <Heading as='h1' size={"4xl"} textAlign='center'>
            Welcome🥳
          </Heading>
          <Heading as='h3' size='md' textAlign='center' mt='20px' wordBreak='keep-all'>
            환영합니다, 가입하신 주소로 인증 메일을 보내드렸어요!
          </Heading>
          <Heading as='h4' size='sm' textAlign={'center'} mt='15px' wordBreak='keep-all'> 메일 인증 후 서비스 사용이 가능합니다! ✏️ </Heading>
        </Box>
        <Flex
          direction={{ base: "column", sm: "row" }}
          align={{ base: "auto", md: "center" }}
          gap='20px'
          w={{base:'100%', sm:'initial'}}
        >
          <Link to='/'>
            <Button  w={{base:'100%', sm:'initial'}} colorScheme={"purple"}>메인 홈으로</Button>
          </Link>
          <Link to='/sign/login'>
            <Button  w={{base:'100%', sm:'initial'}} colorScheme={"yellow"}>로그인 하기</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Welcome;
