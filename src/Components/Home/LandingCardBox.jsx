import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CardBox = styled(Box)`
  &:hover {
    box-shadow: 12px 10px 0 1px #000;
    transform: scale(1.05) rotate(2deg);
    -webkit-transform: scale(1.05) rotate(2deg);
    -moz-transform: scale(1.05) rotate(2deg);
    -o-transform: scale(1.05) rotate(2deg);
  }
`;

export const LandingCardBox = () => {

    const navigate = useNavigate();
    const isLogin = localStorage.getItem("isLogin");

  const HandleNavi = () => {
    if (isLogin) {
      navigate("/service");
    }

    if (!isLogin) {
      navigate("/sign/login");
    }
  };

    return(
        <CardBox
        border='2px solid #000'
        borderRadius={"10px"}
        w='100%'
        m='0 auto'
        maxW='600px'
        p='30px'
        boxShadow={"10px 8px 0 1px #000"}
        transition={"all 300ms ease-in-out"}
        onClick={HandleNavi}
        cursor={"pointer"}
      >
        <Heading
          as='h1'
          size={"lg"}
          lineHeight={{base:'43px', sm:'50px'}}
          color='#000'
          fontFamily={"NanumSquareExtraBold"}
        >
          We Lighten up your
          <br />
          <Text
            as='span'
            position={"relative"}
            _after={{
              content: "''",
              width: "100%",
              height: "7px",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "#ffcc00",
              zIndex: -1,
            }}
          >
            Writing!💫
          </Text>
        </Heading>
        <Box p='15px 10px' mt='20px'>
          <Heading
            as='h2'
            size={"md"}
            bg='#fff'
            border='2px solid #000'
            borderRadius={"5px"}
            p='15px 20px 15px 10px'
            className='main-gsap-text'
          >
            라이팅젤과 함께 글을 써볼까요?
          </Heading>
        </Box>
      </CardBox> 

    )
}