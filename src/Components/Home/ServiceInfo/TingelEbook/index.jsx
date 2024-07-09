import React from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EbookFlex = styled(Flex)`
  border-bottom: 1px solid #ededed;
  margin-bottom: 25px;
  padding-bottom: 25px;
  gap: 30px;
`;

const EbookDetailLink = styled(Link)`
  width: 100%;

  > button {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TingelEbook = () => {
  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        팅젤문고 시리즈
      </Heading>
      <Box maxW="960px" p="5rem 2rem" m="0 auto">
        <EbookFlex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'initial' }}>
          <Box>
            <picture>
              <source className="ebook-image" srcSet="/images/tingel_series_ebook_1_fantasy.webp" type="image/webp" />
              <img
                className="ebook-image"
                src="/images/tingel_series_ebook_1_fantasy.jpeg"
                alt="tingel_series_ebook_1_fantasy"
              />
            </picture>
          </Box>
          <Flex direction="column" justify="space-between" w="100%">
            <Box lineHeight={'30px'}>
              <Heading as="h4" size="md">
                [eBook] 팅젤문고 판타지 세계관
              </Heading>
              <Text>인공지능이 생성한 세계관 100여개로 맛보기</Text>
              <Text>20022년 7월</Text>
              <Text pt="30px">
                팅젤문고 100+ 모음집 시리즈의 첫 번째 주제는 &lt;판타지 세계관&gt;입니다. 어떻게 하면, 콘텐츠를 소비하는
                사용자들의 흥미를 유발하고 적극적인 참여까지도 유도할 수 있는 세계관의 창시자가 될 수 있을까요?
                라이팅젤이 사용자들을 사로잡을 판타지 세계관을 창조하는 데 기본적인 뼈대가 될 수 있는 영감을 무한
                제공합니다.
              </Text>
            </Box>
            <EbookDetailLink to="/ebook/fantasy">
              <Button>상세보기</Button>
            </EbookDetailLink>
          </Flex>
        </EbookFlex>
        <EbookFlex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'initial' }}>
          <Box>
            <picture>
              <source
                className="ebook-image"
                srcSet="/images/tingel_series_ebook_3_firstsentence.webp"
                type="image/webp"
              />
              <img
                className="ebook-image"
                src="/images/tingel_series_ebook_3_firstsentence.jpeg"
                alt="tingel_series_ebook_3_firstsentence"
              />
            </picture>
          </Box>
          <Flex direction="column" justify="space-between" w="100%">
            <Box lineHeight={'30px'}>
              <Heading as="h4" size="md">
                [eBook] 팅젤문고 첫문장 모음집
              </Heading>
              <Text>인공지능이 생성한 첫문장 100여개로 맛보기</Text>
              <Text>20022년 7월</Text>
              <Text pt="30px">
                당신의 이야기는 어떤 문장으로 시작하나요? 팅젤문고 100+ 모음집 시리즈의 두 번째 주제는
                &lt;첫문장&gt;입니다. 첫문장은 이야기의 첫인상입니다. 매력적인 첫문장은 독자가 계속 다음 문장에도 마음을
                열 수 있게 하는 힘을 가지고 있습니다. 수천억개의 데이터를 학습한 인공지능이 제안하는 첫문장은 이야기를
                매력적으로 이끌어줄 것입니다.
              </Text>
            </Box>
            <EbookDetailLink to="/ebook/firstsentence">
              <Button>상세보기</Button>
            </EbookDetailLink>
          </Flex>
        </EbookFlex>
      </Box>
    </Box>
  );
};

export default TingelEbook;
