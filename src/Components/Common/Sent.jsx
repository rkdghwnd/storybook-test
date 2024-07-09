import React from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sent = () => {
  return (
    <Box bg='#edf2f6' >
      <Flex h='100vh' direction='column' align='center' justify={'center'} gap='50px' p='20px'>
        <Box lineHeight={'40px'}>
          <Heading as='h1' size={"xl"} textAlign='center' wordBreak='keep-all'>
            📬 문의사항이 전송 되었습니다!
          </Heading>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sent;
