import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const TutorialContent = ({ goPrev, goNext, tutorial }) => {
  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '10%', md: '10px' });

  return (
    <Box minW="100%">
      <IconButton
        aria-label="left-arrow"
        colorScheme="purple"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={goPrev}
      >
        <BiLeftArrowAlt />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        colorScheme="purple"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={goNext}
      >
        <BiRightArrowAlt />
      </IconButton>
      <picture>
        <source srcSet={`/images/${tutorial}.png`} type="image/webp" />
        <img src={`/images/${tutorial}.png`} alt="slide_img" />
      </picture>
    </Box>
  );
};

export default TutorialContent;
