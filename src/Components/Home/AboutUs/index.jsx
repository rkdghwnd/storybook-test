import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import About1 from './About1';
import About2 from './About2';
import About3 from './About3';


const AboutUs = () => {
  return (
    <Box>
      <About1 />
      <Flex w="100%" direction={'column'} justify="center" align={'center'}>
        <video src="/images/blog.mp4" autoPlay muted loop playsInline />
        <video src="/images/tinytingel_novel_package.mp4" autoPlay muted loop playsInline />
        <video src="/images/tinytingel_lyrics_package.mp4" autoPlay muted loop playsInline />
      </Flex>
      <About2 />
      <About3 />
    </Box>
  );
};

export default AboutUs;
