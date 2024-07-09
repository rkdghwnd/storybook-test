import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {FcServices, FcPhotoReel,} from "react-icons/fc";
import { DetailExplainCard, DetailContetTargetCardBox,DetailContetUseCardBox } from "Components/Common/DetailCommon";


const FantasyDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
            판타지 세계관 생성
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        판타지 세계관 만들기, 어렵지 않아요 <br /> 새로운 세계가 무제한 &amp; 자동 생성됩니다
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
              title={"성공하는 콘텐츠의 비결, 탄탄한 세계관에 있다."}
              text={
                "드라마, 영화, 게임, 소설, 만화 부터 노래 가사, 캐릭터, 브랜드에 이르기까지 성공하는 콘텐츠 뒤에는 탄탄한 세계관이 있습니다. 특히, 판타지 장르에서 이야기의 탄탄한 배경이 되는 세계관이 중요하다는 건 알지만, 처음부터 혼자 힘으로 거대한 세계를 새롭게 창조하는 게 쉽지만은 않죠."
              }
            />

            <DetailExplainCard
              title={"판타지 세계관의 뼈대를 세워드립니다 (무제한 생성)"}
              text={"어떻게 하면, 콘텐츠를 소비하는 사용자들의 흥미를 유발하고 적극적인 참여까지도 유도할 수 있는 세계관의 창시자가 될 수 있을까요? 라이팅젤이 사용자들을 사로잡을 판타지 세계관을 창조하는 데 기본적인 뼈대가 될 수 있는 영감을 무한 제공합니다."}
            />
            
            <Box bg='#f7f6f3' p='15px' mt='15px' mb='25px' maxW='650px' wordBreak='keep-all'>
                <Text>
                  👉🏼 알라개시아는 알라개시아 행성에 위치한 큰 대륙이다. 이
                  대륙에는 네 개의 알려진 국가가 있다: 인간과 요정의 본거지인
                  제국, 남쪽에 위치한 수르다, 제국과 맞서 싸우는 반란군인 바덴,
                  그리고 인간 제국인 브로드링 제국.  알라개시아에는 드워프,
                  우랄, 고양이, 용 등 여러 비인간적인 인종이 살고 있다. 마법은
                  또한 이 시리즈의 많은 주요 등장인물들이 마법 능력을 가지고
                  있는 세계의 중요한 부분이다.
                </Text>
            </Box>

            <DetailExplainCard
            title={"클릭만 해보세요. 새로운 세계관이 자동으로 생성됩니다."}
            text={"라이팅젤이 제공하는 판타지 세계관 뼈대에 살을 붙여 보세요. 멋진 신세계를 당신의 손 안에서 탄생시킬 수 있는 좋은 기회입니다. 새로운 세계관을 세우고 싶지만 어떻게 해야 할지 몰라서 막막하기만 한 창작자를 위해 라이팅젤이  구체적인 상상력을 자극하는 세계관을 자동으로 만들어드립니다."}
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
                text=' 판타지 장르 이야기를 (웹툰, 웹소설, 드라마 영화 등)'
                boldText='새로 시작해야 하는 창작자'
              />

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='새로운 판타지 게임을'
                boldText='준비하는 기획자'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='새로운 스토리를 쓰기 막막한'
                boldText='작가 지망생'
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
               icon={<FcServices />}
                text={
                  "버튼만 클릭하면, 판타지 세계관이 자동 완성됩니다."
                }
              />

              <DetailContetUseCardBox
                icon={<FcPhotoReel />}
                text={
                  "자동 생성되는 세계관에 살을 붙여서 게임이나 이야기를 창작할 수 있습니다."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default FantasyDetail;
