import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcNews } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const NovelDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        소설 패키지
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        도입부, 줄거리, 이어쓰기 <br/> 웹소설 창작 패키지로 해결해보세요
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
              title={
                "웹소설 써보고 싶은데 시작을 망설이고 있나요?"
              }
              text={
                "'틈만 나면 읽는 웹소설 장르에 나도 작가로 뛰어들 수는 없을까' 누구나 꿈은 꾸지만, 정작 시작해보면 쉽지 않죠. 누구나 웹소설 작가에 쉽게 도전해볼 수 있도록 이야기의 기본 요소만 입력하면 도입부, 줄거리를 제공합니다. "
              }
            />

            <DetailExplainCard
              title={
                "분당 500타 속도로 써내야 하는 웹소설 연재, 속도를 높여보세요!"
              }
              text={
                "웹소설 작가로는 입문했는데, 빠른 속도로 원고를 보내야 하는 현실 속에서 새로운 소재를 찾기란 쉽지 않습니다. 인공지능과의 색다른 경험을 통해 글 쓰는 속도를 업그레이드 해보세요."
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
                text='웹소설을 한번 써보고 싶은'
                boldText='초보 창작자, 작가'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='연재 마감에 쫓겨 매일 새로운 웹소설을 써내야 하는'
                boldText='창작자, 작가'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='한때 문학청년이 꿈이었던 '
                boldText='모든 어른'
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
                  "장르, 주인공, 장소, 소재, 주제 등 필수 입력 항목을 채워보세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcNews/>}
                text={
                  "인공지능이 이를 인식해 이야기의 도입부/줄거리를 만들어 줍니다."
                }
              />

               <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "인공지능이 완성한 도입부에 뒷 이야기를 이어써 보세요."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default NovelDetail;
