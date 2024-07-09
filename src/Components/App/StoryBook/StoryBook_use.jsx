import { Box, Flex } from '@chakra-ui/react';
import OutletContentLayout from '../../Layout/OutletContentLayout';
import storybook_use from '../../../../src/image/storybook_use.png';

export default function StoryBook_use() {
  return (
    <OutletContentLayout>
      <Box w="100%">
        <Box w="100%" p={{ base: '60px 30px', sm: '60px' }} m="0 auto">
          <Flex w="100%" minH="50vh" direction="column">
            <img src={storybook_use} />
          </Flex>
        </Box>
      </Box>
    </OutletContentLayout>
  );
}
