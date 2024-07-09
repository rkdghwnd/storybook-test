import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcNews } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const BlogDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        블로그 쓰기 A to Z
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        파워 블로거로 가는 똑똑한 지름길! <br/> 독자의 이목을 끄는 매력적인 콘텐츠를 만들어보세요. 
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
                "나만의 콘텐츠로 독자의 이목을 끌어보세요."
              }
              text={
                "특정 주제/분야 안에서 자신만의 콘텐츠로 자리매김하려면 어떻게 해야 할까요? 인공지능의 도움으로 독자의 이목을 끄는 매력적인 콘텐츠를 만들어보세요."
              }
            />

            <DetailExplainCard
              title={
                "하루에도 여러 개 포스팅해야 하는 블로그, 인공지능으로 해결하세요."
              }
              text={
                "방문자 유입, 방문자 체류시간 증대를 위해 다양한 콘텐츠를 만들기 어려우시죠? 인공지능의 도움으로 콘텐츠 제작의 수고를 덜어보세요."
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
                text='블로그를 시작하고 싶은'
                boldText='초보 블로거'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='매일 새로운 콘텐츠를 만들어'
                boldText='많은 방문자 유입이 필요한 파워블로거'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='한 주제/분야 안에서'
                boldText='자신만의 콘텐츠를 쌓아나가고 싶은 사람'
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
                  "기본적으로 블로그로 쓰고 싶은 대주제를 입력하면 제목, 개요, 도입부 등을 제시합니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcNews/>}
                text={
                  "블로그 연관 검색어를 활용해 주제를 더 독자의 관심에 맞춰 구체화해보세요."
                }
              />

               <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "이어쓰기를 활용해 블로그 콘텐츠를 채우는 수고를 덜어보세요."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default BlogDetail;
