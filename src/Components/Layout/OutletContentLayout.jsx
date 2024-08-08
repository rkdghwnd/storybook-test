import { Flex } from '@chakra-ui/react';

const OutletContentLayout = ({ children }) => {
  return (
    <Flex
      w="100%"
      direction={{ base: 'column', '2xl': 'row' }}
      justify="space-between"
      // minH="calc(100vh - 71px)"
      // h="100%"
    >
      {children}
    </Flex>
  );
};

export default OutletContentLayout;
