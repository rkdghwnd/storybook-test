import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled(Box)`
  background-color : #fff;
  height: 180px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 2px;
  word-break : keep-all;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    background-color : #FAF5FF;
    color : #3b2478;
    box-shadow: 1px 1px 1px 2px #3b2478;
  }
`;

export const ServiceMainCard = ({ title, description, link }) => {

  const navigate = useNavigate();

  return (
    <Card onClick={()=>  navigate(`/service/${link}`)}>
      <Heading as='h4' size='md' mb='15px'>{title}</Heading>
      <Text fontSize='sm'>{description}</Text>
    </Card>
  );
};
