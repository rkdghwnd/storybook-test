import ServiceDetailLayout from 'Components/Layout/ServiceDetailLayout';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { FcDocument, FcAddRow, FcStackOfPhotos } from 'react-icons/fc';
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from 'Components/Common/DetailCommon';

const LyricsDetail = () => {
  return (
    <Box>
      <Flex direction="column" align="center" p="70px 10px 0">
        <Heading as="h1" size={'lg'} textAlign="center" mb="15px">
          시(가사) 쓰기
        </Heading>
        <Heading as="h3" size="sm" textAlign="center">
          나도 랩이나 노래 속에 영어 가사 넣고 싶다.
          <br />
          문법, 맞춤법 틀릴 걱정없이 정확하게.
        </Heading>
      </Flex>
      <ServiceDetailLayout>
        <Box
          m="10px 0"
          p={{ base: '60px 20px', md: '100px 30px' }}
          bg="#fff"
          //boxShadow='3px 3px 5px rgba(175, 175, 175, 0.5)'
          border="1px solid #ededed"
          borderRadius="10px"
          wordBreak="keep-all"
        >
          <Flex direction={'column'} justify="center" align="center" gap="60px">
            <DetailExplainCard
              title={'래퍼들은 가사 쓸 때 번역기를 돌릴까?'}
              text={
                '다들 외국에 살다온 원어민처럼 랩이나 노래 가사를 쉽게 써내는데, 나만 어렵게 느껴지나요? 인공지능 영어 가사 쓰기로 도전해보세요. 맞춤법이나 문법 걱정 없이 가져다 쓰실 수 있습니다.'
              }
            />

            <DetailExplainCard
              title={'영어 실력을 키울 수 있습니다.'}
              text={
                ' 단어, 문법을 학습하는 차원을 넘어 실제 창작물에 적용된 영어를 만날 수 있습니다. 내 취향, 필요에 맞게 수정하면서 영어 실력을 더 향상해보세요.'
              }
            />
          </Flex>
          <Box textAlign="center">
            <Heading
              display="inline-block"
              bg="#fbf3da"
              color="#444"
              as="h3"
              size={'md'}
              m="100px 0"
            >
              누가 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align={{ base: 'center', md: 'flex-start' }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetTargetCardBox
                color="#3b2478"
                text="영어로 나만의 창작물을"
                boldText="만들어 보고 싶은 사람"
              />

              <DetailContetTargetCardBox
                color="#ffcc00"
                text="이제 막 배우기 시작한"
                boldText="영어의 감각을 키워보고 싶은 사람"
              />

              <DetailContetTargetCardBox
                color="#7d4cdb"
                text="영어로 가사를 넣고 싶은"
                boldText="크리에이터"
              />
            </Flex>
          </Box>
          <Box textAlign="center">
            <Heading
              display="inline-block"
              bg="#fbf3da"
              color="#444"
              as="h3"
              size={'md'}
              m="100px 0"
            >
              어떻게 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align={{ base: 'center', md: 'flex-start' }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetUseCardBox
                icon={<FcAddRow />}
                text={'창작하고자 하는 주제를 키워드로 간단히 입력해보세요.'}
              />

              <DetailContetUseCardBox
                icon={<FcDocument />}
                text={'결과물을 나의 취향, 필요에 맞게 수정해보세요.'}
              />

              <DetailContetUseCardBox
                icon={<FcStackOfPhotos />}
                text={'노래나 동영상, 블로그나 책 등 나의 콘텐츠에 담아보세요.'}
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default LyricsDetail;
