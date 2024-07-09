import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {FcDocument, FcVoicePresentation,FcStackOfPhotos,} from "react-icons/fc";
import { DetailExplainCard, DetailContetTargetCardBox,DetailContetUseCardBox } from "Components/Common/DetailCommon";
import { QuoteBox } from "Styles/CommonStyled";

const MaterialDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
            글감 찾기 질문 카드
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        일상 기록은 영감의 원천입니다.<br/>익숙하고 평범한 일상을 새로운 관점으로 바라보세요!
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

              <Box maxW='800px' w='100%'>
              <Heading as='h3' size='md' mb='15px'>
              몇몇 유명 작가들은 일기 쓰기가 창의력에 미치는 영향을 보여줍니다.
              </Heading>
              <Text>
              헨리 데이비드 소로, 앤 프랭크, 버지니아 울프, 앙드레 지드,
                  오스카 와일드, 알베르 카뮈 등
                  <a
                    href='https://www.themarginalian.org/2014/09/04/famous-writers-on-keeping-a-diary/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    일상을 기록하며 자신의 작품 세계를 완성한 작가들
                  </a>
                  이 많습니다.
              </Text>
            </Box>
            <QuoteBox
                bg='#f7f6f3'
                p='15px'
                mt='15px'
                mb='25px'
              >
                  <h4>
                    🖊 The habit of writing thus for my own eye only is good
                    practice.
                  </h4>
                  <p>나만의 시각을 위해 쓰는 습관은 좋은 연습이다.</p>
                  <p>- 버지니아 울프</p>
                </QuoteBox>

            <DetailExplainCard
              title={"나의 사소한 일상 속에 이미 숨어있는 이야기를 발견해보세요."}
              text={
                "나의 삶, 일상 속에서 글쓰기 소재를 발견할 수 있도록 질문을 랜덤으로 제시합니다. 예기치 못한 질문의 답을 글로 써보면, 나만의 이야기가 하나씩 쌓일 거에요."
              }
            />

            <DetailExplainCard
              title={
                "관점만 바꿔도 이야기가 됩니다."
              }
              text={
                "별 생각 없이 당연하게 살았던 일상을 지금까지와는 다른 관점에서 바라볼 수 있습니다. 새로운 관점은 삶의 생기를 갖게 하고, 당신의 창의력을 자극시킬 거에요."
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
              flexWrap={'wrap'}
            >
              <DetailContetTargetCardBox
                color='#3b2478'
                text='셀프 브랜딩, 자아 성장을 목적으로'
                boldText='나 자신을 만나고 싶은 사람들'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text=' 나, 그리고 나의 일상을'
                boldText='콘텐츠로 표현하고 싶은 사람들'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='평범하고 익숙한 일상 속에서'
                boldText='새로운 관점을 가지고 싶은 사람'
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
               icon={<FcStackOfPhotos />}
                text={
                  "매일 아침이나 저녁 일정한 시간에 글감찾기 질문 카드를 활용해 자신을 돌아볼 수 있습니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcVoicePresentation />}
                text={
                  "하나 둘 씩 쌓이는 이야기를 활용해 하나의 콘텐츠로 발행할 수 있습니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcDocument />}
                text={
                  "글을 쓰면서 얻은 영감을 바탕으로 새로운 이야기를 만들어낼 수 있습니다."
                }
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default MaterialDetail;
