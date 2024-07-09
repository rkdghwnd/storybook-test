import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const CoverLetterDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        대입 자소서 완성
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        자기소개서 질문 앞에만 서면 작아지나요? <br/>자동 완성으로 자신감을 높여보세요. 
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
                "당신의 자소서는 이미 완성되어 있습니다."
              }
              text={
                " 어떻게 써야 할지 몰라서 망설여질 뿐이죠. 팅젤이 자동 완성하는 자소서 답안에서 당신이 이미 가지고 있는 실력과 능력, 경험과 자원 중에 어떤 것들을 골라 쓸 수 있을지, 힌트를 얻어 보세요. 자소서 답안을 당신에게 어울리게 다듬어서 이미 완성형인 당신을 멋지게 소개해보세요."
              }
            />

            <DetailExplainCard
              title={
                "당신의 꿈 앞에서 작아지지 마세요."
              }
              text={
                "대학교에 진학해서 원하는 공부를 하고 싶은데, 자소서에 막혀서 꿈을 포기하는 일이 있어서는 안 되죠. 희망하는 전공을 입력하면, 전공에 필요한 역량에 맞는 답안을 제시합니다. 전공에 필요한 당신의 역량을 발견해서 꿈을 이뤄보세요."
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
                text='대학 입학을 코앞에 두고 자기소개서를 작성해야 하는'
                boldText='고3 청소년, N수생, 그리고 부모'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='자기소개서를 잘 쓸 수 있도록'
                boldText='코칭하는 교육 컨설턴트'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='자기소개서를 대비해 교내외 생활을'
                boldText='미리 설계하고 싶은 청소년, 부모'
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
                  " 대학교 공통질문 세 개 중에 원하는 질문과 희망 전공을 선택합니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "인공지능이 제안하는 답변을 자신의 상황에 맞게 다듬어서 자기소개서를 작성합니다."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default CoverLetterDetail;
