import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcDocument, FcVoicePresentation,FcKindle } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";
import { QuoteBox } from "Styles/CommonStyled";

const DiscussionDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
          찬반 논거 찾기
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
          특정 이슈에 대한 자신만의 의견을 갖고 싶나요? <br />
          탄탄하고 균형잡힌 글을 쓸 수 있습니다
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
            <QuoteBox bg='#f7f6f3' p='15px' mb='25px'>
              <h4>
                🖊 I think I have found a balance partly due to a different
                perspective.
              </h4>
              <p>나는 다른 관점을 가진 덕분에 균형을 찾은 것 같다.</p>
              <p>- 제임스 블레이크</p>
            </QuoteBox>

            <DetailExplainCard
              title={
                "나의 의견과 관점이 담긴 글을 더 탄탄하게 만들 수 있습니다."
              }
              text={
                "글을 탄탄하게 하려면 양쪽의 입장을 다 알아야 합니다. 균형잡힌 시각을 바탕으로 나만의 의견을 표현해보세요."
              }
            />

            <DetailExplainCard
              title={
                "관점이 넓어질 수 있습니다."
              }
              text={
                "다양한 매체를 통해 개인이 미디어 권력을 가진 요즘, 더 경각심을 가지고 정보를 수집해야 합니다. 가짜뉴스나 편향된 의견이 아닌 양쪽의 의견을 두루 살펴보세요."
              }
            />
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
              flexWrap={"wrap"}
            >
              <DetailContetTargetCardBox
                color='#3b2478'
                text='논술, 토론 등 특정 이슈에'
                boldText='찬반 논거가 필요한 청소년'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='청소년에게 논술 종류의 글쓰기나'
                boldText='토론을 지도하는 교사, 부모'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='시사 및 사회 이슈에 대해'
                boldText='글로 써보고 싶은 블로거, 기자 등'
              />

              <DetailContetTargetCardBox
                color='gray'
                text='특정 이슈에 대해 찬성/반대하는 측의'
                boldText='논지가 궁금한 사람'
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
              flexWrap={"wrap"}
            >
              <DetailContetUseCardBox
                icon={<FcDocument />}
                text={
                  "논술이나 토론 등을 대비해 논거가 필요한 이슈를 입력합니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcKindle/>}
                text={
                  "결과로 나온 찬성, 반대 의견을 정리해 글에 담아보세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcVoicePresentation />}
                text={
                  "상대 측 의견에 반박하면서 나의 의견이 더 탄탄해질 수도 있습니다."
                }
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default DiscussionDetail;
