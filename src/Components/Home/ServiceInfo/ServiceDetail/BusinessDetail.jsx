import ServiceDetailLayout from 'Components/Layout/ServiceDetailLayout';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { FcDocument, FcVoicePresentation, FcBriefcase } from 'react-icons/fc';
import { DetailExplainCard, DetailContetTargetCardBox, DetailContetUseCardBox } from 'Components/Common/DetailCommon';

const BusinessDetail = () => {
  return (
    <Box>
      <Flex direction="column" align="center" p="70px 10px 0">
        <Heading as="h1" size={'lg'} textAlign="center" mb="15px">
          비즈니스 아이디어
        </Heading>
        <Heading as="h3" size="sm" textAlign="center">
          콘텐츠를 상품으로 만드는 법.
          <br />
          나만의 콘텐츠, 나만의 비즈니스. 어떻게 준비할 수 있을까요?
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
              title={'콘텐츠가 사업과 이어질 수 있는 연결고리를 먼저 설계해보세요.'}
              text={
                '내가 좋아서 만드는 콘텐츠로 돈을 벌 수 있는 있는 방법은 없을까요? 콘텐츠를 만들기 전, 장기적인 계획을 세워볼 수 있습니다.'
              }
            />

            <DetailExplainCard
              title={'내가 만들어온 콘텐츠를 바탕으로 사업 아이템을 만들어보세요.'}
              text={
                '블로그, 유튜브 등 콘텐츠 플랫폼에 이미 상당한 양의 콘텐츠를 쌓아만 두고 있나요? 수익화할 수 있는 새로운 경로를 모색해보세요.'
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
              <DetailContetTargetCardBox
                color="#3b2478"
                text="나만의 콘텐츠를 상품화할 방법을"
                boldText="모색하고 있는 사람"
              />

              <DetailContetTargetCardBox
                color="#ffcc00"
                text="새로운 비즈니스 아이디어를 위한"
                boldText="영감이 필요한 사람"
              />

              <DetailContetTargetCardBox
                color="#7d4cdb"
                text="외부 지원사업이나 사내 신사업 기획을 위한"
                boldText="사업계획서를 쓰고 있는 사람"
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
                icon={<FcDocument />}
                text={'상품화하고 싶은 분야나 주제를 입력하면, 관련 비즈니스 아이디어를 제시합니다.'}
              />

              <DetailContetUseCardBox
                icon={<FcVoicePresentation />}
                text={'여러 아이디어 중 실제 사업으로 연계할 수 있는 아이템이 뭔지 생각해보세요.'}
              />

              <DetailContetUseCardBox
                icon={<FcBriefcase />}
                text={'비즈니스 관점에서 내 콘텐츠의 방향과 지향점을 살펴보세요.'}
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default BusinessDetail;
