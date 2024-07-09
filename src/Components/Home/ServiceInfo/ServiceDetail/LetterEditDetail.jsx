import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcKindle } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const LetterEditDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        뉴스레터 에디터
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        콘텐츠의 꽃, 뉴스레터의 <br/> 제목, 내용, 리드글을 손쉽게 완성해보세요
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
                "매주, 격주로 발송하는 뉴스레터 콘텐츠 어떻게 구성해야 할까"
              }
              text={
                "기업/개인 브랜드의 알짜배기 콘텐츠를 꾹꾹 담아 보내야 하는 뉴스레터, 발송 주기에 맞춰 매번 새로운 주제와 내용을 기획하기 어려운 분(소규모 기업의 콘텐츠 담당자 및 퍼스널 브랜딩)들을 위해 준비했습니다."
              }
            />

            <DetailExplainCard
              title={
                "뉴스레터 발송 목적에 맞춘 인공지능의 똑똑한 제안"
              }
              text={
                "뉴스레터를 보내는 목적을 달성할 수 있도록 구독자의 클릭을 결정할 뉴스레터 제목, 구독자의 눈길을 사로잡을 가독성 높은 구성과 리드글을 단계별로 인공지능이 제안합니다. "
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
                text='소규모 브랜드의 뉴스레터 콘텐츠'
                boldText='기획 운영 담당자'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='퍼스널 브랜딩 등의 목적을 위해'
                boldText='뉴스레터를 기획하는 개인'
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
                  "뉴스레터의 기본사항(뉴스레터 이름, 목적, 수신인, 발신인)을 입력합니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "발송 예정인 해당 호의 주제를 입력합니다."
                }
              />

               <DetailContetUseCardBox
                icon={<FcKindle/>}
                text={
                  "뉴스레터의 제목, 주요 내용(개요), 리드글을 단계별로 구성할 수 있습니다."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default LetterEditDetail;
