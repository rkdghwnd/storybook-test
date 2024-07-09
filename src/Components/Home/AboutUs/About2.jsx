import React from 'react';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';
import { CircleIcon } from 'Components/Common/CircleIcon';
import { t } from 'i18next';

const ContentContainer = styled(Flex)`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  font-family: NanumSquare;
`;

const TitleImg = styled.picture`
  > source,
  img {
    width: 200px;
  }
`;

const TitleH2 = styled.h2`
  font-family: 'Neo둥근모', 'neodgm';
  color: #372874;
  font-size: 2rem;

  > span {
    color: #ffce1f;
  }
`;

const TriContainer = styled(Flex)`
  background-image: url('/images/tri4x.png');
  background-size: 100% 88%;
  background-repeat: no-repeat;
  background-position: 0px 0px;
`;

const StarBox = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 120px;

  > picture > source,
  img {
    width: 90px;
  }
`;

const ParallelContainer = styled(Box)`
  background-image: url('/images/whitePara.png');
  background-size: 100% 74%;
  background-repeat: no-repeat;
  background-position: 100% 600px;

  @media screen and (max-width: 768px) {
    background-size: 100% 70%;
  }
`;

const Introduction = styled(Box)`
  width: 100%;
  box-shadow: 3px 3px 5px rgba(175, 175, 175, 0.75);
  background-color: #fff;
  border-radius: 16px;

  position: relative;
`;

const CardHeader = styled(Flex)`
  width: 100%;
  height: 40px;
  background-color: #f3f6f9;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  padding: 20px;

  > p {
    background-color: #fff;
    color: #444;
    font-size: 10px;
    width: 400px;
    margin-left: 30px;
    padding: 2px 15px;

    border-radius: 3px;
  }
`;

const CardFooter = styled(Box)`
  width: 100%;
  height: 50px;
  background-color: #f3f6f9;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Img = styled.picture`
  > source,
  img {
    width: 100%;
  }
  // > source,img {
  //   width: 50%;

  //   @media screen and (max-width: 768px) {
  //     width: 100%;
  //   }
  // }
`;

const AboutCopyRight = styled.p`
  width: 100%;
  font-size: 22px;
  text-align: right;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const TingelImg = styled.picture`
  > source,
  img {
    width: 200px;
    position: absolute;
    bottom: -25px;
    left: -20px;

    @media screen and (max-width: 768px) {
      width: 160px;
      left: -15px;
    }
  }
`;

const ImgCircle = styled.picture`
  > source,
  img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ImgPhoneTing = styled.picture`
  > source,
  img {
    width: 150px;
    position: absolute;
    right: 25px;
    bottom: 0;

    -webkit-transform: rotateY(180deg); //사파리 & 크롬
    -moz-transform: rotateY(180deg); // 파이어폭스
    -ms-transform: rotateY(180deg); //익스
    -o-transform: rotateY(180deg); //오페라
    transform: rotateY(180deg);

    @media screen and (max-width: 768px) {
      width: 60px;
      right: 5px;
      bottom: 55px;
    }
  }
`;

const About2 = () => {
  return (
    <Box mt="100px">
      <ContentContainer>
        <Flex w="100%" direction="column" align="center" gap="10px">
          <TitleImg>
            <source srcSet="/images/light.webp" type="image/webp" />
            <img src="/images/light.png" alt="light" />
          </TitleImg>
          <TitleH2 className="textCenter">
            We Lighten up your <span>writing!</span>
          </TitleH2>
        </Flex>
      </ContentContainer>

      <TriContainer w="100%" direction="column" align="center" className="mt-5">
        <ContentContainer direction="column" align="center" w="100%">
          <h1 className="H1 textCenter squareBold lineHeight-72">
            <span className="highLight squareBold">
              {t('about_us.section2_heading1_chunk1')}
            </span>{' '}
            {t('about_us.section2_heading1_chunk2')} <br />{' '}
            {t('about_us.section2_heading1_chunk3')}
          </h1>

          <h3 className="H3 textCenter mt-5 lineHeight-70">
            {t('about_us.section2_heading2_chunk1')}
            <br />
            {t('about_us.section2_heading2_chunk2')} <br />
            {t('about_us.section2_heading2_chunk3')}
          </h3>
          <StarBox>
            <picture>
              <source srcSet="/images/star1.webp" type="image/webp" />
              <img src="/images/star1.png" alt="star1" />
            </picture>
            <h1 className="H1 textCenter squareBold lineHeight-72">
              {t('about_us.section2_sequence1_title_chunk1')} <br />{' '}
              {t('about_us.section2_sequence1_title_chunk2')}
            </h1>
            <h3 className="H3 textCenter lineHeight-70">
              {t('about_us.section2_sequence1_description_chunk1')} <br />
              {t('about_us.section2_sequence1_description_chunk2')}
            </h3>
            <SimpleGrid w={'100%'} columns={2} spacing="10px">
              <div className="StarBtns textCenter">
                {t('about_us.section2_sequence1_keyword1')}
              </div>
              <div className="StarBtns textCenter">
                {t('about_us.section2_sequence1_keyword2')}
              </div>
              <div className="StarBtns textCenter">
                {t('about_us.section2_sequence1_keyword3')}
              </div>
              <div className="StarBtns textCenter">
                {t('about_us.section2_sequence1_keyword4')}
              </div>
            </SimpleGrid>
          </StarBox>
        </ContentContainer>
      </TriContainer>

      <ParallelContainer>
        <ContentContainer direction="column" align="center" w="100%">
          <StarBox p="0 30px" w="100%">
            <picture>
              <source srcSet="/images/star2.webp" type="image/webp" />
              <img src="/images/star2.png" alt="star2" />
            </picture>
            <h1 className="H1 textCenter squareBold lineHeight-72">
              {t('about_us.section2_sequence2_title_chunk1')} <br />{' '}
              {t('about_us.section2_sequence2_title_chunk2')}
            </h1>
            <h3 className="H3 textCenter lineHeight-70 mb-3">
              {t('about_us.section2_sequence2_description_chunk1')} <br />
              {t('about_us.section2_sequence2_desciprition_chunk2')}
            </h3>
            <Introduction>
              <CardHeader align="center">
                <Flex gap="10px">
                  <CircleIcon color="#E4E9F2" />
                  <CircleIcon color="#E4E9F2" />
                  <CircleIcon color="#E4E9F2" />
                </Flex>
                <p>https://tinytingel.ai</p>
              </CardHeader>
              <Flex w="100%" p={{ base: '20px 10px', md: '40px 30px' }}>
                <Flex
                  bg="#F9F8F9"
                  direction="column"
                  justify={'center'}
                  align={'center'}
                >
                  <h3 className="H3 textCenter squareBold p-3">
                    {t('about_us.section2_sequence2_example_title')}
                  </h3>
                  <Flex
                    w="100%"
                    direction={{ base: 'column', md: 'row' }}
                    justify="center"
                    align={'center'}
                  >
                    <Img>
                      <source srcSet="/images/mbtiEx1.webp" type="image/webp" />
                      <img src="/images/mbtiEx1.png" alt="mbti예시1" />
                    </Img>
                    <Img>
                      <source srcSet="/images/mbtiEx2.webp" type="image/webp" />
                      <img src="/images/mbtiEx2.png" alt="mbti예시2" />
                    </Img>
                  </Flex>
                </Flex>
              </Flex>
              <CardFooter />
              <TingelImg>
                <source srcSet="/images/tingLetter.webp" type="image/webp" />
                <img src="/images/tingLetter.png" alt="팅젤레터" />
              </TingelImg>
            </Introduction>
            <AboutCopyRight>
              {t('about_us.section2_sequence2_copyright')}
            </AboutCopyRight>
          </StarBox>

          <StarBox p="0 10px">
            <picture>
              <source srcSet="/images/star3.webp" type="image/webp" />
              <img src="/images/star3.png" alt="star3" />
            </picture>
            <h1 className="H1 textCenter squareBold lineHeight-72">
              {t('about_us.section2_sequence3_title_chunk1')} <br />{' '}
              {t('about_us.section2_sequence3_title_chunk2')}
            </h1>
            <h3 className="H3 textCenter lineHeight-70">
              {t('about_us.section2_sequence3_description_chunk1')} <br />
              {t('about_us.section2_sequence3_description_chunk2')}
            </h3>
          </StarBox>
          <Box w="100%" p="60px 20px" position={'relative'}>
            <ImgCircle>
              <source srcSet="/images/circles.webp" type="image/webp" />
              <img src="/images/circles.png" alt="circles" />
            </ImgCircle>
            <ImgPhoneTing>
              <source srcSet="/images/long_ting.webp" type="image/webp" />
              <img src="/images/long_ting.png" alt="long_ting" />
            </ImgPhoneTing>
          </Box>
        </ContentContainer>
      </ParallelContainer>
    </Box>
  );
};

export default About2;
