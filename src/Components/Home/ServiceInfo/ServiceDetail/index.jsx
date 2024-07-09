import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LazyDetailMainCards from "./LazyDetailMainCards";


const ServiceDetail = () => {
  return (
    <Box>
      <Heading as='h1' size={"lg"} textAlign='center' m='70px 0'>
        인공지능 글쓰기 서비스
      </Heading>
      <Flex direction='column' maxW='960px' m='0 auto' gap='40px'>
      <Box textAlign={'center'}>
        <Link to='/service'><Button colorScheme={'purple'} fontWeight={400}>서비스 바로 시작하기</Button></Link>
      </Box>
      <LazyDetailMainCards />
      </Flex>
    </Box>
  );
};

export default ServiceDetail;
