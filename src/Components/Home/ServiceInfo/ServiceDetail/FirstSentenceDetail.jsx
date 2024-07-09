import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  FcDocument,
  FcVoicePresentation,
  FcStackOfPhotos,
} from "react-icons/fc";
import { DetailExplainCard, DetailContetTargetCardBox,DetailContetUseCardBox } from "Components/Common/DetailCommon";

const FirstSenteceDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
          첫문장 자판기
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
          당신의 이야기는 어떤 문장으로 시작하나요? <br /> 숏폼 콘텐츠에
          익숙해진 독자들의 시선을 사로잡아보세요.
        </Heading>
      </Flex>
      <ServiceDetailLayout>
        <Box
          m='10px 0'
          p={{ base: "60px 20px", md: "100px 30px" }}
          bg='#fff'
          //boxShadow='3px 3px 5px rgba(175, 175, 175, 0.5)'
          border='1px solid #ededed'
          borderRadius='10px'
          wordBreak='keep-all'
        >
          <Flex direction={"column"} justify='center' align='center' gap='60px'>

            <DetailExplainCard
              title={"첫문장은 이야기의 첫인상입니다."}
              text={
                "매력적인 첫문장은 독자가 계속 다음 문장에도 마음을 열 수 있게 하는 힘을 가지고 있습니다. 수천억개의 데이터를 학습한 인공지능이 제안하는 첫문장은 이야기를 매력적으로 이끌어줄 거에요."
              }
            />

            <DetailExplainCard
              title={
                "이야기의 첫 단추를 잘 꿰면 이야기가 술술 풀리기도 합니다."
              }
              text={
                "훌륭한 첫 문장은 앞으로 전개할 이야기를 상상하게 합니다. 상상력을 자극하는 첫문장 뒤 이어지는 당신만의 이야기를 덧붙여보세요."
              }
            />
            <Box maxW='800px' w='100%'>
              <Heading as='h3' size='md' mb='15px'>
                숏폼 콘텐츠에 익숙해진 독자들의 시선 사로잡기
              </Heading>
              <Text>
                웹 페이지 하나에 소비하는 시간은 딱{" "}
                <a
                  href='https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/'
                  target='_blank'
                  rel='noreferrer'
                >
                  10초.
                </a>
                독자들을 더 오랫동안 머물게 하기 위해서는 시선을 사로잡는
                첫인상이 필요합니다
              </Text>
            </Box>
          </Flex>
          <Box textAlign='center'>
            <Heading
              display='inline-block'
              bg='#fbf3da'
              color='#444'
              as='h3'
              size={"md"}
              m='100px 0'
            >
              누가 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify='center'
              align={{ base: "center", md: "flex-start" }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetTargetCardBox
                color='#3b2478'
                text='글 쓰려고 앉으면,'
                boldText='첫문장에서 막히는 사람'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='새로운 이야기에'
                boldText='상상력이 필요한 사람'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='쓰기 모임을 이끌거나'
                boldText='참여하는 사람'
              />
              
                <DetailContetTargetCardBox
                color='gray'
                text='  독자들을 더 오랫동안'
                boldText='붙잡아 두고 싶은 콘텐츠 크리에이터'
              />
            </Flex>
          </Box>
          <Box textAlign='center'>
            <Heading
              display='inline-block'
              bg='#fbf3da'
              color='#444'
              as='h3'
              size={"md"}
              m='100px 0'
            >
              어떻게 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify='center'
              align={{ base: "center", md: "flex-start" }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetUseCardBox
                icon={<FcDocument />}
                text={
                  "랜덤으로 나오는 결과 중에 당신의 이야기에 어울리는 첫 문장을 골라보세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcVoicePresentation />}
                text={
                  "첫문장 뒤에 이어지는 이야기를 상상하면서 세 문장을 써보세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcStackOfPhotos />}
                text={
                  "첫문장 자판기를 활용해 매일매일 꾸준히 글쓰는 모임을 이끌어 보세요. "
                }
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default FirstSenteceDetail;
