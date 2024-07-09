import React from "react";
import { AccordionItem, AccordionPanel, AccordionIcon,AccordionButton, Text } from "@chakra-ui/react";
import styled from 'styled-components';

const Questions = styled(AccordionButton)`
  box-shadow: none;
  padding: 8px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  word-break: keep-all;

  &:hover {
    background-color : #ededed;
    border-radius: 10px;
  }

  > h2 {
    font-size: 1.1rem;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
      text-align: left;
    }
  }
`;


export const FaqItem = ({ Question, content}) => {
    return(
        <AccordionItem border='0'  p={{base:'15px', md:'15px 30px'}}>
        <Questions>
          <h2>Q. {Question}</h2>
          <AccordionIcon />
        </Questions>
        <AccordionPanel p={'1rem'} wordBreak={'keep-all'}>
          <Text>
           {content}
          </Text>
        </AccordionPanel>
      </AccordionItem>
    )
}  
