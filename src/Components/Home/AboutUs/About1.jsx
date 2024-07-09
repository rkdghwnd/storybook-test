import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { CircleIcon } from 'Components/Common/CircleIcon';
import { t } from 'i18next';

const WrapContainer = styled(Box)`
  background-image: url('/images/modifyParallel.png');
  background-size: 100% 70%;
  background-repeat: no-repeat;
  background-position: 0px 80px;
  font-family: NanumSquare;
`;

const ContentContainer = styled(Flex)`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
`;

const Img = styled.picture`
  > source,
  img {
    width: 95px;
    margin-bottom: 10px;
  }
`;

const FirstH1 = styled.h1`
  text-align: center;
  color: #ff9300;

  > span {
    font-family: NanumSquareExtraBold;
    color: #372874;
  }
`;
const Introduction = styled(Box)`
  width: 100%;
  box-shadow: 3px 3px 5px rgba(175, 175, 175, 0.75);
  background-color: #fff;
  border-radius: 16px;
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

const Img2 = styled.picture`
  > source,
  img {
    width: 200px;
    height: 200px;
  }
`;

const ParaGraph = styled(Flex)`
  max-width: 380px;
  word-break: keep-all;

  > h4 {
    font-family: NanumSquareBold;
    font-size: 26px;
  }

  > p {
    font-size: 20px;
    line-height: 32px;
    color: #444;

    > span {
      background-color: #f3f6f9;
    }
  }

  @media screen and (max-width: 768px) {
    > h4 {
      font-size: 20px;
      margin-top: 30px;
    }

    > p {
      font-size: 16px;
    }
  }
`;

const BaroBtn = styled.button`
  background: linear-gradient(120deg, #f29816 20%, #f4c729 80%);
  color: #fff;
  font-size: 40px;
  font-family: NanumSquareBold;
  border-radius: 55px;
  text-align: center;

  padding: 20px 80px;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding: 20px 50px;
  }
`;

const About1 = () => {
  return (
    <WrapContainer>
      <ContentContainer
        direction="column"
        justify="center"
        align="center"
        p="100px 30px"
      >
        <Img>
          <source srcSet="/images/aboutPen.webp" type="image/webp" />
          <img src="/images/aboutPen.png" alt="aboutPen" />
        </Img>
        <h2 className="H2 textCenter squareBold">
          <span className="highLight">
            {t('about_us.section1_hightlight_heading')}
          </span>
        </h2>
        <FirstH1 className="H1 textCenter squareBold">
          {t('about_us.section1_orange_heading')} <br />
          <span>{t('about_us.section1_puple_heading')}</span>
        </FirstH1>
        <h2 className="H2 textCenter mt-5">
          {t('about_us.section1_heading1_chunk1')}
          <br />
          {t('about_us.section1_heading1_chunk2')} <br />
          {t('about_us.section1_heading1_chunk3')} <br />
          {t('about_us.section1_heading1_chunk4')} <br />
        </h2>
        <Introduction mt="50px">
          <CardHeader align="center">
            <Flex gap="10px">
              <CircleIcon color="#E2E9F5" />
              <CircleIcon color="#E2E9F5" />
              <CircleIcon color="#E2E9F5" />
            </Flex>
            <p>https://tinytingel.ai</p>
          </CardHeader>
          <Flex
            w="100%"
            p={'40px 30px'}
            direction={{ base: 'column', md: 'row' }}
            justify={{ base: 'center', md: 'space-evenly' }}
            align={'center'}
          >
            <Img2>
              <source srcSet="/images/tingel.webp" type="image/webp" />
              <img src="/images/tingel.png" alt="설명용_로고" />
            </Img2>
            <ParaGraph direction="column" align="flex-start" gap="20px">
              <h4>{t('about_us.section1_writingel_name')}</h4>
              <p>
                {t('about_us.section1_writingel_description_chunk1')}{' '}
                <span>
                  {t('about_us.section1_writingel_description_chunk2')}
                </span>{' '}
                {t('about_us.section1_writingel_description_chunk3')}
                <span>
                  {' '}
                  {t('about_us.section1_writingel_description_chunk4')}
                </span>{' '}
                {t('about_us.section1_writingel_description_chunk5')} <br />
                {t('about_us.section1_writingel_description_chunk6')}
              </p>
            </ParaGraph>
          </Flex>
          <CardFooter />
        </Introduction>
        <Link to="/sign/signup">
          <BaroBtn>
            {t('about_us.section1_go_to_writingel')} <ChevronRightIcon />
          </BaroBtn>
        </Link>
        <Flex
          direction={'column'}
          justify="center"
          align="center"
          gap="30px"
          mt="100px"
        >
          <h1 className="H1 textCenter squareBold lineHeight-70">
            {t('about_us.section1_heading2_chunk1')} <br />
            {t('about_us.section1_heading2_chunk2')} <br />
            {t('about_us.section1_heading2_chunk3')}
          </h1>
          <h2 className="H2 textCenter lineHeight-72">
            {t('about_us.section1_heading3_chunk1')}
            <br />
            {t('about_us.section1_heading3_chunk2')}
          </h2>
        </Flex>
      </ContentContainer>
    </WrapContainer>
  );
};

export default About1;
