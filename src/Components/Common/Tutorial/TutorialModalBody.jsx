import React, { useState, Suspense, lazy } from 'react';
import { CircleIcon } from '../CircleIcon';
import { Flex, Box, Text, Skeleton } from '@chakra-ui/react';
import { t } from 'i18next';
const TutorialContent = lazy(() => import('./TutorialContent'));

const TutorialModalBody = () => {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);

  const goPrev = (setNow, setPrev) => {
    setPrev(true);
    setNow(false);
  };

  const goNext = (setNow, setNext) => {
    setNext(true);
    setNow(false);
  };
  return (
    <Box bg="#fff" p="25px 20px" borderRadius={'10px'}>
      {slide1 && !slide2 && !slide3 && (
        <Box>
          <Text
            mb="20px"
            fontWeight={600}
            fontSize={{ base: 'xl', md: 'lg' }}
            wordBreak="keep-all"
          >
            {t('tutorial.sequence1')}
          </Text>
          <Suspense fallback={<Skeleton minH="400px" />}>
            <TutorialContent
              goNext={() => goNext(setSlide1, setSlide2)}
              tutorial={'tutorial1'}
            />
          </Suspense>
        </Box>
      )}
      {!slide1 && slide2 && !slide3 && (
        <Box>
          <Text
            fontWeight={600}
            fontSize={{ base: 'xl', md: 'lg' }}
            wordBreak="keep-all"
          >
            {t('tutorial.sequence2')}
          </Text>
          <Text
            mb="20px"
            fontWeight={600}
            fontSize={{ base: 'xl', md: 'lg' }}
            wordBreak="keep-all"
          >
            {t('tutorial.sequence3')}
          </Text>
          <Suspense fallback={<Skeleton minH="400px" />}>
            <TutorialContent
              goPrev={() => goPrev(setSlide2, setSlide1)}
              goNext={() => goNext(setSlide2, setSlide3)}
              tutorial={'tutorial2'}
            />
          </Suspense>
        </Box>
      )}
      {!slide1 && !slide2 && slide3 && (
        <Box>
          <Text mb="20px" fontWeight={600} fontSize={{ base: 'xl', md: 'lg' }}>
            {t('tutorial.purpose_save')}
          </Text>
          <Suspense fallback={<Skeleton minH="400px" />}>
            <TutorialContent
              goPrev={() => goPrev(setSlide3, setSlide2)}
              tutorial={'tutorial3'}
            />
          </Suspense>
        </Box>
      )}
      <Flex justify="center" mt="15px">
        <CircleIcon w={6} h={6} color={slide1 ? '#7d4cdb' : 'gray'} />
        <CircleIcon w={6} h={6} color={slide2 ? '#7d4cdb' : 'gray'} />
        <CircleIcon w={6} h={6} color={slide3 ? '#7d4cdb' : 'gray'} />
      </Flex>
    </Box>
  );
};

export default TutorialModalBody;
