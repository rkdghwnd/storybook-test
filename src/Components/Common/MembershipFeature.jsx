import { Text, Stack, Flex } from '@chakra-ui/react';

export const MembershipFeature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600} fontSize='lg'>{title}</Text>
        <Text color={'gray.600'} fontSize='sm'>{text}</Text>
      </Stack>
    );
  };