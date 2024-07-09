import { Text } from '@chakra-ui/react';
import React from 'react';

export default function TextButton({ children, onClick }) {
  return (
    <Text
      display="inline-block"
      bg="#7d4cdb"
      color="#fff"
      borderRadius={'10px'}
      p="0px 8px"
      fontSize={'xs'}
      mb="20px"
      cursor="pointer"
      marginRight="10px"
      onClick={onClick}
    >
      {children}
    </Text>
  );
}
