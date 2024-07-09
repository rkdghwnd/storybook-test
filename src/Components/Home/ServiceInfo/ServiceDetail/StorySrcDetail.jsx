import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcKindle } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";
import { QuoteBox } from "Styles/CommonStyled";

const StorySrcDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        이야기 재료 찾기
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        모든 이야기는 점에서 시작합니다. <br/>점을 선으로, 선을 면으로 확장해보세요
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
          <QuoteBox
                bg='#f7f6f3'
                p='15px'
                mb='25px'
              >
                  <h4>
                  🖊 Creativity is just connecting things.
                  </h4>
                  <p>창의력은 단지 점들을 연결하는 것이다.</p>
                  <p>- 스티브 잡스</p>
                </QuoteBox>

            <DetailExplainCard
              title={
                "거창한 이야기가 아닌, 아주 작은 단위에서 시작해보세요."
              }
              text={
                "이 세상에 완전히 새로운 이야기는 없습니다. 우리에게 익숙한 단어들을 조합하다가 뜻밖의 이야기를 만나실지도 몰라요."
              }
            />

            <DetailExplainCard
              title={
                "언어 감각이 자연스럽게 자극되면서 창의력이 생길 거에요."
              }
              text={
                " 서로 상관 없어 보이는 단어들을 잇는 것만으로 언어 감각이 좋아집니다. 잠들어 있는 당신의 언어감각을 깨워보세요!고 환상적인 여행으로 이끄는 스토리텔러가 될 수 있습니다."
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
                text='새로운 이야기 소재가'
                boldText='필요한 창작자들'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='오래동안 안 써서 굳어진 언어 감각을'
                boldText='유연하게 스트레칭하고 싶은 사람들'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='언어 기반의 게임으로 아동, 청소년들의 언어 능력을'
                boldText='향상시키고 싶은 교사, 부모들'
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
                icon={<FcAddRow />}
                text={
                  "무작위로 뽑힌 단어 세 개를 활용해 자신만의 이야기를 엮어보세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcKindle/>}
                text={
                  "함께 제시되는 예시를 보면서 힌트를 얻을 수 있습니다. 자신이 쓴 이야기와 비교해봐도 좋아요."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default StorySrcDetail;
