import React, { Suspense, lazy } from 'react';
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import { ExplainNumber } from 'Components/Common/ExplainNumber';
import { t } from 'i18next';

const LandingGifs = lazy(() => import('Components/Common/LandingGifs'));

const LandingHowtoUse = () => {
  return (
    <Flex direction="column" gap="200px" p={{ base: '5rem 2rem', sm: '5rem' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        maxW="1024px"
        m="0 auto"
        spacing={10}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Flex direction="column" gap="30px" maxW="400px">
          <ExplainNumber
            num={'1'}
            // title={'쓰려는 글의 장르, 종류를 선택합니다.'}
            title={t('home.section3_sequence1_title')}
          />
          <Text wordBreak={'keep-all'} fontWeight={500}>
            {t('home.section3_sequence1_description')}
          </Text>
          <Suspense fallback={<Skeleton maxW="400px" w="100%" h="400px" />}>
            {/* 이미지 가져옴 */}
            <LandingGifs image={'landingpage_manual_11'} />
          </Suspense>
        </Flex>

        <Flex direction="column" gap="30px" maxW="400px">
          <ExplainNumber num={'2'} title={t('home.section3_sequence2_title')} />
          <Text wordBreak={'keep-all'} fontWeight={500}>
            {t('home.section3_sequence2_description')}
          </Text>
          {/* 이미지 가져옴 */}
          <Suspense fallback={<Skeleton maxW="400px" w="100%" h="400px" />}>
            <LandingGifs image={'landingpage_manual_22'} />
          </Suspense>
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        maxW="1024px"
        m="0 auto"
        columns={{ base: 1, md: 2 }}
        spacing={10}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Flex direction="column" gap="30px" maxW="400px">
          <ExplainNumber num={'3'} title={t('home.section3_sequence3_title')} />
          <Text wordBreak={'keep-all'} fontWeight={500}>
            {t('home.section3_sequence3_description')}
          </Text>
          <Suspense fallback={<Skeleton maxW="400px" w="100%" h="400px" />}>
            {/* 이미지 가져옴 */}
            <LandingGifs image={'landingpage_manual_33'} />
          </Suspense>
        </Flex>

        <Flex direction="column" gap="30px" maxW="400px">
          <ExplainNumber num={'4'} title={t('home.section3_sequence4_title')} />
          <Text wordBreak={'keep-all'} fontWeight={500}>
            {t('home.section3_sequence4_description')}
          </Text>
          <Suspense fallback={<Skeleton maxW="400px" w="100%" h="400px" />}>
            {/* 이미지 가져옴 */}
            <LandingGifs image={'landingpage_manual_44'} />
          </Suspense>
        </Flex>
      </SimpleGrid>
      <Box textAlign="center">
        <a
          href="https://appplatform.notion.site/99f9b5fb95d84477b9e2aa343fb97055"
          target={'_blank'}
          rel="noreferrer noopener"
        >
          <Button>{t('home.section3_sequence_detail')}</Button>
        </a>
      </Box>
    </Flex>
  );
};

export default LandingHowtoUse;
