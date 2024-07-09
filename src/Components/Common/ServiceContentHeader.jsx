import { Flex, Heading, Tooltip } from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

const ServiceContentHeader = ({ title, label }) => {
  return (
    <Flex align="center" p="1rem 1rem 0">
      <Heading as="h3" size="md" mr="15px">
        {title}
      </Heading>
      <Tooltip label={label} aria-label="A tooltip">
        <QuestionOutlineIcon w={6} h={6} color="#3b2478" />
      </Tooltip>
    </Flex>
  );
};

export default ServiceContentHeader;
