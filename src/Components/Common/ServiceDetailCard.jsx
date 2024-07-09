import React from 'react';
import { Flex, Box, Badge } from '@chakra-ui/react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled(Flex)`
  border-radius: 10px;
  cursor: pointer;

  > picture {
    height: 100%;
    width: 100%;

    > img,
    source {
      height: 100%;
      width: 100%;

      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  &:hover {
    font-weight: 600;
  }
`;

export const ServiceDetailCard = ({ link, image, title }) => {
  const navigate = useNavigate();

  return (
    <Card
      key={title}
      w="full"
      alignItems="center"
      justifyContent="center"
      direction="column"
      boxShadow="6px 6px 4px 0px #ddd"
      border="1px solid #444"
      //border='1px solid #444'
      onClick={() => navigate(`/detail/${link}`)}
    >
      <picture>
        <source srcSet={`/images/${image}.webp`} type="image/webp" />
        <img src={`/images/${image}.png`} alt={`${title}_서비스`} />
      </picture>
      <Box bg="#fff" w="100%" p="8px" fontSize={'sm'} textAlign="right" borderRadius="10px">
        <Badge colorScheme="purple">more</Badge>
      </Box>
    </Card>
  );
};
