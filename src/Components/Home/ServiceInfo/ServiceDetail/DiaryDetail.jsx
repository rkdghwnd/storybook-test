import ServiceDetailLayout from 'Components/Layout/ServiceDetailLayout';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { FcDocument, FcAddRow, FcKindle } from 'react-icons/fc';
import { DetailExplainCard, DetailContetTargetCardBox, DetailContetUseCardBox } from 'Components/Common/DetailCommon';

const DiaryDetail = () => {
  return (
    <Box>
      <Flex direction="column" align="center" p="70px 10px 0">
        <Heading as="h1" size={'lg'} textAlign="center" mb="15px">
          일기 쓰기
        </Heading>
        <Heading as="h3" size="sm" textAlign="center">
          재미있게 글쓰는 훈련의 시작,
          <br />
          일상 기록을 쌓아 만드는 한편의 이야기
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
              title={'요즘 애들의 문해력, 어떻게 키울 수 있을까'}
              text={
                '동영상, 게임, 숏폼 콘텐츠에 익숙해져버린 ‘요즘 애들’에게 글쓰기가 어려운 건 당연합니다. 하지만, 문해력은 기술이 발달해도, 아니 발달할수록 더 중요합니다. 너무나도 흥미진진한 동영상, 게임, 콘텐츠의 유혹을 넘어서는 재미를 느끼면서 글쓰기 근육을 키울 수 있다면, 얼마나 좋을까요?'
              }
            />

            <DetailExplainCard
              title={'복잡한 생각과 막연한 마음이 글이 되는 경험'}
              text={
                '글쓰기에 대한 흥미는 자신의 생각이나 말이 글로 쓰일 수 있다는 점을 체감하면서 부터 생깁니다. 글이 나와는 상관없는 별개의 무언가가 아니라, 막연한 마음과 복잡한 생각을 제일 잘 표현할 수 있는 소통 수단이라는 점을 알 수 있으려면, 자기 안에서 무형으로 존재하던 마음과 생각이 눈에 보이는 글로 완성되는 경험이 중요합니다.'
              }
            />

            <DetailExplainCard
              title={'평범한 일상의 기록이 쌓이면 한편의 이야기가 됩니다'}
              text={
                '일기로 쓸 소재, 글감을 키워드 형태로 입력해보세요. 인공지능이 키워드들을 연결해 한 편의 일기를 자동 완성해줍니다. 별 일 없었던 하루도 글자로 옮기면 특별해집니다. 간편하게 완성되는 하루 하루의 일상 기록을 모아 한 편의 이야기로 만들어보세요.'
              }
            />
          </Flex>
          <Box textAlign="center">
            <Heading display="inline-block" bg="#fbf3da" color="#444" as="h3" size={'md'} m="100px 0">
              누가 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align={{ base: 'center', md: 'flex-start' }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetTargetCardBox color="#3b2478" text="매일 일기 쓰기 숙제가" boldText="힘든 초등학생" />

              <DetailContetTargetCardBox
                color="#ffcc00"
                text="일기 쓰기를 가르치고 있는"
                boldText="학교 교사, 글쓰기 기관 교육자, 학부모"
              />

              <DetailContetTargetCardBox
                color="#7d4cdb"
                text="하루의 일상을 간단하게 기록을 남기고 싶은데,"
                boldText="시간을 내기 어려운 어른들"
              />
            </Flex>
          </Box>
          <Box textAlign="center">
            <Heading display="inline-block" bg="#fbf3da" color="#444" as="h3" size={'md'} m="100px 0">
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
                text={' 일기에 쓸 소재, 글감을 키워드 형태로 입력해보세요.(세 개 이상)'}
              />

              <DetailContetUseCardBox
                icon={<FcDocument />}
                text={'입력한 키워드를 연결해 대여섯 문장으로 구성된 일기 전문을 자동완성합니다.'}
              />

              <DetailContetUseCardBox
                icon={<FcKindle />}
                text={
                  '마음에 쏙 드는 결과가 완성될 때까지 새로고침해보세요. 같은 키워드로 다른 결과물이 계속 완성될 거에요.'
                }
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default DiaryDetail;
