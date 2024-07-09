import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcNews } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const FairyDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        릴레이 동화 창작
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        인공지능과 바통을 주고 받으며 완성해보는 '릴레이 동화'
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
                "동화는 위대한 상상력의 장소입니다."
              }
              text={
                "동화 속 세계는 글쓰는 여러분이 자신의 삶에 대한 영감을 찾을 수 있는 좋은 방법입니다. 실생활에서 경험할 수 없는 마법의 세계를 탐험하고 금기를 깨거나 처음으로 경험했던 동화 기억을 떠올리며, 상상력을 자극해보세요. "
              }
            />

            <DetailExplainCard
              title={
                "나이에 상관없이 우리는 모두 스토리텔러입니다."
              }
              text={
                "우리가 이야기를 하는 것은 세상을 아름답게 변화시키기 위해 할 수 있는 일 중 하나입니다. 아이부터 어른까지, 우리는 모두 각자 품고 있는 아름다운 이야기로 재미있고 환상적인 여행으로 이끄는 스토리텔러가 될 수 있습니다."
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
                text='동화를 한번 써보고 싶은'
                boldText='초보 창작자, 작가'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='스토리텔링을 훈련해보고 싶은'
                boldText='청소년, 크리에이터'
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
                  "인공지능이 이를 인식해 이야기의 도입부를 만들어 줍니다."
                }
              />

               <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "인공지능과 번갈아가며 동화를 전개해 보세요."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default FairyDetail;
