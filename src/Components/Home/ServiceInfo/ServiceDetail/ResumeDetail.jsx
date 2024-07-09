import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcKindle, FcVoicePresentation } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const ResumeDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        취업 자소서 자동 완성
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
                "어떻게 써야 할지 몰라서 망설여질 뿐이죠. 팅젤이 자동 완성하는 자소서 답안에서 당신이 이미 가지고 있는 실력과 능력, 경험과 자원 중에 어떤 것들을 골라 쓸 수 있을지, 힌트를 얻어 보세요. 자소서 답안을 당신에게 어울리게 다듬어서 이미 완성형인 당신을 멋지게 소개해보세요."
              }
            />

            <DetailExplainCard
              title={
                "당신의 꿈 앞에서 작아지지 마세요."
              }
              text={
                "취업하고 싶은 꿈의 직장이 있는데, 자소서에 막혀서 꿈을 포기하는 일이 있어서는 안 되죠. 취업하고 싶은 회사에 관련된 정보(회사명, 인재상, 직무)와 자기소개서 질문을 입력하면, 알맞은 답안을 제시합니다. 당신의 역량을 어필해서 꿈을 이뤄보세요."
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
                text='취업을 코앞에 두고'
                boldText='자기소개서를 작성해야 하는 취준생'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='자기소개서를 잘 쓸 수 있도록'
                boldText='코칭하는 교육 컨설턴트'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='자기소개서를 대비해 대내/대외 활동을 준비하고 싶은'
                boldText='준비하고 싶은 대학생, 청년'
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
                  "취업하고자 하는 회사와 관련된 정보(회사명, 인재상, 직무)를 입력하세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "자기소개서에 작성해야 할 질문을 직접 작성해주세요."
                }
              />

               <DetailContetUseCardBox
                icon={<FcKindle/>}
                text={
                  "입력한 내용을 바탕으로 자기소개서 답변을 자동 완성 합니다."
                }
              />

               <DetailContetUseCardBox
                icon={<FcVoicePresentation/>}
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

export default ResumeDetail;
