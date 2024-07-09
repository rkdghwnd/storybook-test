import React from 'react';
import { Flex } from '@chakra-ui/react';
import styled from "styled-components";

const NumberBox = styled(Flex)`
align-items: center;
gap: 18px;
font-size: 18px;
font-weight: 600;
margin-bottom: 20px;
word-break : keep-all;

.circle-number {
  background-color: #3b2477;
  display: flex;
  border-radius: 50%;
  color: #fff;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
}

@media screen and (max-width: 1024px) {
  flex-direction: column;
  text-align: center;
}
`;

export const ExplainNumber = ({num, title}) => {
    return(
        <NumberBox>
          <div className='circle-number'>{num}</div>
          <p>{title}</p>
      </NumberBox>
    )
}