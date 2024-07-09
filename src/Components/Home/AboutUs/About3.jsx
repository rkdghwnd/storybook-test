import React from 'react';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';
import { AboutCard } from 'Components/Common/AboutCard';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

const ContentContainer = styled(Flex)`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  font-family: NanumSquare;
`;

const TriContainer = styled(Flex)`
  background-image: url('/whiteTri.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0px 0px;
`;

const ShadowBox = styled(Box)`
  width: 100%;
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba(175, 175, 175, 0.5);
  padding: 30px;
  border-radius: 16px;
`;

const TingelImg = styled.picture`
  > source,
  img {
    width: 300px;
    position: absolute;
    bottom: -25px;
    left: -20px;

    @media screen and (max-width: 768px) {
      width: 160px;
      bottom: -10px;
      left: -5px;
    }
  }
`;

const H1TitleText = styled.h1`
  color: #372874;

  border-bottom: 5px solid #372874;
  padding-bottom: 10px;
`;

const ParallelContainer = styled(Box)`
  background-image: url('/whitePara2.png');
  background-size: 100% 65%;
  background-repeat: no-repeat;
  background-position: 0px 500px;
`;

const PenImg = styled.picture`
  > source,
  img {
    width: 80px;

    @media screen and (max-width: 768px) {
      width: 50px;
    }
  }
`;

const CouchImg = styled.picture`
  > source,
  img {
    width: 400px;
    margin: 80px auto;

    @media screen and (max-width: 768px) {
      width: 250px;
    }
  }
`;
const BaroBtn = styled.button`
  background: linear-gradient(120deg, #f29816 20%, #f4c729 80%);
  color: #fff;
  font-family: NanumSquareBold;
  font-size: 40px;
  border-radius: 55px;
  text-align: center;
  padding: 20px 80px;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    padding: 20px;
  }
`;

const About3 = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');

  const FreeUse = () => {
    if (isLogin) {
      navigate('/service');
    }
    if (!isLogin) {
      navigate('/sign/login');
    }
  };

  return (
    <Box bg="#F8F9FA" mt="150px" p="150px 0 300px">
      <ContentContainer direction="column" align="center" w="100%">
        <h1 className="H1 textCenter squareBold lineHeight-72">
          {t('about_us.section3_heading1_chunk1')} <br />
          <span className="mainColor squareBold">
            {t('about_us.section3_heading1_chunk2')}
          </span>
          {t('about_us.section3_heading1_chunk3')} <br />{' '}
          {t('about_us.section3_heading1_chunk4')}
        </h1>
      </ContentContainer>

      <TriContainer mt="80px">
        <ContentContainer direction="column" align="center" w="100%" p="0 20px">
          <h3 className="H3 textCenter lineHeight-70">
            {t('about_us.section3_heading2_chunk1')}
            <br />
            {t('about_us.section3_heading2_chunk2')}
          </h3>
          <Box w="100%" maxW={'600px'} position={'relative'}>
            <Flex justify="center" gap="25px" className=" mt-5 ">
              <ShadowBox>
                <h1 className="H1 textCenter squareBold mainColor">
                  {t('about_us.section3_number_one')}
                </h1>
                <h4 className="H4 textCenter">
                  {t('about_us.section3_bigdata_users_chunk1')} <br />{' '}
                  {t('about_us.section3_bigdata_users_chunk2')}
                </h4>
              </ShadowBox>
              <ShadowBox>
                <h1 className="H1 textCenter squareBold mainColor">
                  {t('about_us.section3_number_one')}
                </h1>
                <h4 className="H4 textCenter">
                  {t('about_us.section3_awareness_chunk1')} <br />{' '}
                  {t('about_us.section3_awareness_chunk2')}
                </h4>
              </ShadowBox>
            </Flex>
            <ShadowBox className="mt-3">
              <h1 className="H1 textRight squareBold mainColor">
                {t('about_us.section3_parameter_count')}
              </h1>
              <h4 className="H4 textRight">
                {t('about_us.section3_parameter')}
              </h4>
            </ShadowBox>
            <TingelImg>
              <source srcSet="/images/tingWithStar.webp" type="image/webp" />
              <img src="/images/tingWithStar.png" alt="tingWithStar" />
            </TingelImg>
          </Box>
        </ContentContainer>
      </TriContainer>

      <ContentContainer direction="column" align="center" w="100%" mt="150px">
        <H1TitleText className="H1 textCenter squareBold lineHeight-72">
          {t('about_us.section3_heading3_chunk1')} <br />{' '}
          {t('about_us.section3_heading3_chunk2')}
        </H1TitleText>
        <h4 className="H4 textCenter lineHeight-70 mt-5">
          {t('about_us.section3_heading4_chunk1')} <br />
          {t('abous_us.section3_heading4_chunk2')}
        </h4>
      </ContentContainer>

      <ParallelContainer>
        <ContentContainer direction="column" align="center" w="100%">
          <Flex
            direction="column"
            align="center"
            w="100%"
            gap="10px"
            m="100px 0px 200px"
          >
            <SimpleGrid
              w={'100%'}
              maxW="700px"
              columns={{ base: 1, sm: 2 }}
              spacing="10px"
              p="0 20px"
            >
              <AboutCard background={'#fff'}>
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_novel_chunk1')}
                  <br />
                  {t('about_us.section3_novel_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background="#F8F9FA">
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_blog_chunk1')}
                  <br />
                  {t('about_us.sectoin3_blog_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background={'#F8F9FA'}>
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_fairy_tail_chunk1')}
                  <br />
                  {t('about_us.section3_fairy_tail_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background="#fff">
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_first_sentence_chunk1')}
                  <br />
                  {t('about_us.section3_first_sentence_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background={'#fff'}>
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_eng_lyrics_chunk1')}
                  <br />
                  {t('about_us.section3_eng_lyrics_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background="#F8F9FA">
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_business_idea_chunk1')}
                  <br />
                  {t('about_us.section3_business_idea_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background={'#F8F9FA'}>
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_discussion_chunk1')}
                  <br />
                  {t('about_us.section3_discussion_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background="#fff">
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_mbti_loveletter_chunk1')}
                  <br />
                  {t('about_us.section3_mbti_loveletter_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background={'#fff'}>
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_daily_question_chunk1')}
                  <br />
                  {t('about_us.section3_daily_question_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background="#F8F9FA">
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_story_material_chunk1')}
                  <br />
                  {t('about_us.section3_story_material_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background={'#F8F9FA'}>
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_admission_essay_chunk1')}
                  <br />
                  {t('about_us.section3_admission_essay_chunk2')}
                </h4>
              </AboutCard>
              <AboutCard background="#fff">
                <h4 className="H4 textCenter p-3">
                  {t('about_us.section3_novel_relay_chunk1')}
                  <br />
                  {t('about_us.section3_novel_replay_chunk2')}
                </h4>
              </AboutCard>
            </SimpleGrid>
            <Box w="100%" maxW="700px" p="0 20px">
              <AboutCard background={'#fff'}>
                <Flex justify={'center'} align="center">
                  <h4 className="H4 textCenter p-3">Coming Soon!</h4>
                  <PenImg>
                    <source srcSet="/images/aboutPen.webp" type="image/webp" />
                    <img src="/images/aboutPen.png" alt="aboutPen" />
                  </PenImg>
                </Flex>
              </AboutCard>
            </Box>
          </Flex>
          <h1 className="H1 textCenter squareBold">
            <span className="highLight squareBold">
              {t('about_us.section3_heading5_chunk1')}
            </span>{' '}
            <br /> {t('about_us.section3_heading5_chunk2')}
          </h1>
          <h3 className="H3 textCenter lineHeight-70 mt-5">
            {t('about_us.section3_heading6_chunk1')} <br />
            {t('about_us.section3_heading6_chunk2')} <br />
            {t('about_us.section3_heading6_chunk3')}
          </h3>
          <CouchImg>
            <source srcSet="/images/couch.webp" type="image/webp" />
            <img src="/images/couch.png" alt="couch" />
          </CouchImg>

          <h1 className="H1 textCenter squareBold mainColor">
            {t('about_us.section3_heading7_chunk1')} <br />
            {t('about_us.section3_heading7_chunk2')} <br />
            {t('about_us.section3_heading7_chunk3')}
          </h1>
          <BaroBtn onClick={FreeUse}>
            {t('about_us.section3_go_to_writingel')} <ChevronRightIcon />
          </BaroBtn>
        </ContentContainer>
      </ParallelContainer>
    </Box>
  );
};

export default About3;
