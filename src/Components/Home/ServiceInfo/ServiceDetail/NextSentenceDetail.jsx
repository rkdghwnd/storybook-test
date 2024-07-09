import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcNews } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const NextSentenceDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        뒷문장 자판기
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        자꾸만 문장이 막히나요?<br/>뒷문장 자판기로 다음 문장을 이어보세요
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
                "포기하지 마세요, 계속 이어나가세요"
              }
              text={
                "일단 글 창작은 시작했는데, 자꾸만 막히나요? 답답해서 포기하기 직전인가요? 창작자의 괴로운 고통 앞에서 물러서지 마세요. 라이팅젤의 뒷문장 자판기 버튼을 누르면, 다음 문장이 나옵니다. 라이팅젤은 당신의 창작활동이 끊기지 않도록 최선을 다해서 응원할 거에요."
              }
            />

            <DetailExplainCard
              title={
                "마음에 드는 문장이 나올 때까지 무한 클릭해보세요"
              }
              text={
                "버튼을 눌러 나오는 문장이 마음에 안 드시나요? 뒷문장 자판기는 끊임없이 새로운 뒷문장을 생성합니다. 마음에 드는 문장이 나올 때까지 자판기를 무제한 눌러보세요. 꽉 막혀있는 이야기의 물꼬를 틀 수 있는 문장이 꼭 나오기를 바라는 진심을 담아서요. "
              }
            />

              <DetailExplainCard
              title={
                "이야기가 술술 풀리는 마법"
              }
              text={
                "쓰고 있는 이야기나 글에서 어느 문장에서라도 막히면, 뒷문장 자판기에 입력해보세요. 그렇게 한 문장씩 이어나가다 보면, 이야기가 술술 풀리는 라이팅젤의 마법이 통할 거에요."
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
                text='쓰고 있는 이야기, 글에서 문장이 계속 막혀서'
                boldText='답답한 창작자'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='첫문장 자판기로는 이야기를 이어나갈 힘이'
                boldText='아직 부족한 라이팅젤 사용자'
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
                  "그 다음이 계속 막히는 문장을 첫문장 입력 칸에 적어보세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcNews/>}
                text={
                  "랜덤으로 나오는 결과 중에 당신의 이야기에 어울리는 뒷문장을 골라보세요."
                }
              />

               <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "뒷문장 뒤에 이어지는 이야기를 상상하면서 세 문장을 추가로 써보세요."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default NextSentenceDetail;
