import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import {CircleIcon} from "./CircleIcon";
import styled from "styled-components";

const CardContainer = styled(Box)`
  border-radius: 16px;
  box-shadow: 3px 3px 5px rgba(175, 175, 175, 0.5);
  width:100%;
  
`;

export const AboutCard = ({children , background}) => {
  return (
    <CardContainer
    bg={background}
    >
      <Flex gap='10px' p='2px 15px'>
        <CircleIcon color='#E4E9F2' />
        <CircleIcon color='#E4E9F2' />
        <CircleIcon color='#E4E9F2' />
      </Flex>
      <Box>
          {children}
      </Box>
    </CardContainer>
  );
};


