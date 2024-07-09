
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import styled from 'styled-components';
import { BsFillPersonCheckFill } from "react-icons/bs";


const CardBox = styled(Flex)`
> svg {
  width: 60px;
  height: 60px;
}

> p {
  > span {
    font-weight: 600;
  }
}
`;

const UseCardBox = styled(Flex)`
> svg {
  width: 60px;
  height: 60px;
}
`;


export const DetailExplainCard = ({ title, text }) => {
  return (
    <Box maxW='800px' w='100%'>
      <Heading as='h3' size='md' mb='15px'>
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};


export const DetailContetTargetCardBox = ({color, text, boldText}) => {
    return(
        <CardBox
        direction={"column"}
        align='center'
        justify='center'
        gap={5}
        minW='180px'
        maxW='230px'
      >
        <BsFillPersonCheckFill color={color} />
        <Text textAlign='center' wordBreak='keep-all'>
          {text}
          <br />
          <span>{boldText}</span>
        </Text>
      </CardBox>
    )
}

export const DetailContetUseCardBox = ({icon, text}) => {
    return(
        <UseCardBox
        direction={"column"}
        align='center'
        justify='center'
        gap={5}
        minW='180px'
        maxW='230px'
      >
        {icon}
        <Text textAlign='center' wordBreak='keep-all'>
          {text}
        </Text>
      </UseCardBox>
    )
}