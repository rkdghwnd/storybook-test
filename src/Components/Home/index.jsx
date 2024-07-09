import React from 'react';
// import styled from 'styled-components';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Text,
} from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { ServiceThumb } from 'Components/Common/ServiceThumb';
import { Link } from 'react-router-dom';
import { MembershipFeature } from 'Components/Common/MembershipFeature';
import { MdCheckCircle } from 'react-icons/md';
import LandingHowtoUse from './LandingHowtoUse';
import { LandingHero } from './LandingHero';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LandingDrawOutput from './LandingDrawOutput';
import LandingChat from './LandingChat';
import { t } from 'i18next';

// const Card = styled(Flex)`
//   border-radius: 10px;
//   cursor: pointer;
//   > picture > img,
//   source {
//     height: 100%;
//     width: 100%;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//   }

//   &:hover {
//     font-weight: 600;
//   }
// `;

const Home = () => {
  // const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');

  // const HandleDetailNavi = (link, detail) => {
  //   if (!isLogin) {
  //     navigate(`${detail}`);
  //   }
  //   if (isLogin) {
  //     navigate(`${link}`);
  //   }
  // };

  return (
    <Box>
      {/* Hero */}
      <Flex bg="#fff" align={'center'}>
        <LandingHero isLogin={isLogin} />
      </Flex>

      {/* 멤버십 내용 메인에 추가 */}
      <Box
        p={'6rem 2rem'}
        maxW="1024px"
        m="0px auto"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={14}>
          <MembershipFeature
            icon={<Icon as={MdCheckCircle} w={10} h={10} color="purple.500" />}
            title={t('home.section2_feature1_title')}
            text={t('home.section2_feature1_description')}
          />
          <MembershipFeature
            icon={<Icon as={MdCheckCircle} w={10} h={10} color="purple.500" />}
            title={t('home.section2_feature2_title')}
            text={t('home.section2_feature2_description')}
          />
          <MembershipFeature
            icon={<Icon as={MdCheckCircle} w={10} h={10} color="purple.500" />}
            title={t('home.section2_feature3_title')}
            text={t('home.section2_feature3_description')}
          />
        </SimpleGrid>
      </Box>

      {/* 사용 순서 */}
      <Box
        p="5rem 2rem 5rem"
        textAlign={'center'}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Heading
          as="h3"
          size="lg"
          mb="10px"
          textAlign={'center'}
          wordBreak="keep-all"
        >
          {t('home.section3_title_heading1')}✨
        </Heading>
        <Text
          fontWeight={600}
          fontSize="lg"
          p={1}
          textAlign={'center'}
          wordBreak="keep-all"
        >
          {t('home.section3_title_heading2')}
        </Text>
      </Box>
      <LandingHowtoUse />

      {/* 드로잉젤 설명 */}

      <LandingDrawOutput isLogin={isLogin} />

      {/* 채팅젤 소개 */}
      <LandingChat isLogin={isLogin} />

      {/* section */}
      {/* <Box
        direction="column"
        align="center"
        justify="center"
        gap="50px"
        p="30px"
        textAlign={'center'}
        className="thumbGrid"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Box maxWidth="1200px" margin="0 auto">
          <SimpleGrid
            w={'100%'}
            minChildWidth="220px"
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            spacing="40px"
            p={{ base: '5em 3em', sm: '8em 5em' }}
            // ref={el}
          >
            {ServiceThumb.map((item) => (
              <Card
                key={item.title}
                w="full"
                alignItems="center"
                justifyContent="center"
                direction="column"
                boxShadow="6px 6px 4px 0px #ddd"
                border="1px solid #444"
                onClick={() => HandleDetailNavi(item.link, item.detail)}
              >
                <picture>
                  <source srcSet={item.imageWebp} type="image/webp" />
                  <img src={item.imagePng} alt={item.title} />
                </picture>
                <Box bg="#fff" w="100%" p="8px" fontSize={'sm'} textAlign="center" borderRadius="10px">
                  <Badge colorScheme="white" color="gray.500">
                    {item.discription}
                  </Badge>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box> */}

      {/* section5 */}
      <Box bg="#edf2f7">
        <Box
          data-aos="fade-up"
          data-aos-duration="3000"
          maxW="960px"
          m="0 auto"
          p="2rem 2rem 7rem"
        >
          <Flex
            direction={'column'}
            mt="60px"
            justify="center"
            align={'center'}
            gap="20px"
            className="youtube"
          >
            <LiteYouTubeEmbed id="yEJmK4zLSN4" title="라이팅젤" />
            <Flex mt="60px" justify="center" gap="20px">
              <Link to="about_us">
                <Button colorScheme={'purple'}>
                  {t('home.section6_go_to_about_us')}
                </Button>
              </Link>
              <Link to="membership">
                <Button colorScheme={'yellow'}>
                  {t('home.section6_go_to_membership')}
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
