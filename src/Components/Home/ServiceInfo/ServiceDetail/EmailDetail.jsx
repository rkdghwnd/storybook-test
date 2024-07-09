import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcNews, FcKindle } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const EmailDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        이메일 작성
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        직장인의 필수적인 글쓰기 <br /> 이메일도 똑똑하게 쓸 필요가 있다
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
                "일 잘하는 사람들은 실전 글쓰기에 강합니다"
              }
              text={
                "이메일 쓰려고 할 때, 막막했던 경험 있으신가요? 글을 읽고 쓸 수만 있다면 누구나 이메일을 능숙하게 쓸 수 있을까요? 이메일 쓰기가 어려운 이유는 기본적인 양식과 기술이 필요하기 때문입니다. 이메일에 능숙한 인공지능이 똑똑하게 완성한 이메일을 활용해 일 초보자에서 일잘러로 당신의 포지션을 업그레이드 되보세요."
              }
            />

            <DetailExplainCard
              title={
                "이메일의 필수요소만 입력하면, 내용을 자동완성합니다"
              }
              text={
                "이메일의 필수요소, 발신자, 수신자, 목적, 어조만 입력하면, 한 통의 이메일이 순식간에 자동완성됩니다. 라이팅젤이 작성한 이메일을 뼈대 삼아 아주 살짝 살을 붙여 업무의 효율성을 높여 보세요. 간편한 방식으로 업무의 부담을 줄일 수 있습니다."
              }
            />

               <DetailExplainCard
              title={
                "하루종일 이메일만 쓰다 일이 끝나는 사람이라면"
              }
              text={
                "업무의 8, 9할이 이메일 작성인 사람들에게는 라이팅젤의 이메일 작성 서비스를 강추합니다. 고객들에게 반복적으로 이메일을 보내야 하는 담당자는 목적과 상황에 따라 보내는 이메일의 양식을 만드는 데 참고할 수 있습니다."
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
                text='이제 막 일을 시작해'
                boldText='이메일 쓰기가 막막한 신입사원'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='연차는 쌓였지만 이메일 쓰기를'
                boldText='제대로 배워본 적 없는 주니어'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text=' 이메일 작성이'
                boldText='업무의 8할 이상인 직장인'
              />

                <DetailContetTargetCardBox
                color='gray'
                text='고객에게 반복적으로 보내는'
                boldText='이메일이 많은 CRM 담당자'
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
                  "발신자, 수신자, 목적, 어조를 입력하면 전체 이메일이 완성됩니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcNews/>}
                text={
                  "자동 완성된 이메일에 살을 붙여 이메일을 완성해보세요."
                }
              />

               <DetailContetUseCardBox
                icon={<FcKindle/>}
                text={
                  "입력한 내용을 바탕으로 자기소개서 답변을 자동 완성 합니다."
                }
              />

               <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "반복적으로 보내야 하는 이메일의 양식을 만드는 데도 유용합니다."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default EmailDetail;
