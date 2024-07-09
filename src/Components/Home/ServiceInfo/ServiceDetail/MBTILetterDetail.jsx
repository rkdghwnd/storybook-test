import ServiceDetailLayout from 'Components/Layout/ServiceDetailLayout';
import { Box, Flex, Heading } from '@chakra-ui/react';
import {
  FcDocument,
  FcVoicePresentation,
  FcStackOfPhotos,
} from 'react-icons/fc';
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from 'Components/Common/DetailCommon';

const MBTILetterDetail = () => {
  return (
    <Box>
      <Flex direction="column" align="center" p="70px 10px 0">
        <Heading as="h1" size={'lg'} textAlign="center" mb="15px">
          MBTI 연애편지
        </Heading>
        <Heading as="h3" size="sm" textAlign="center">
          사랑에 빠지면, 창의력이 높아집니다. <br /> 글로 마음을 전달해보세요.
        </Heading>
      </Flex>
      <ServiceDetailLayout>
        <Box
          m="10px 0"
          p={{ base: '60px 20px', md: '100px 30px' }}
          bg="#fff"
          //boxShadow='3px 3px 5px rgba(175, 175, 175, 0.5)'
          border="1px solid #ededed"
          borderRadius="10px"
          wordBreak="keep-all"
        >
          <Flex direction={'column'} justify="center" align="center" gap="60px">
            <DetailExplainCard
              title={
                '사랑에 빠진 사람과 함께 산책하는 상상을 하기만 해도 창의력이 높아진다는 연구가 있습니다.'
              }
              text={
                '창의력과 신경화학적으로 연결되어 있는 도파민을 자극하기 때문입니다. 고대에도 창의적인 사람들은 자신의 창의력을 파트너를 유혹하는 데 썼다고 하는데요. 당신의 파트너에게 보내는 연애편지로 창의력을 자극시켜보는 건 어떨까요?'
              }
            />

            <DetailExplainCard
              title={
                '한창 썸타고 있는, 혹은 연애 중인 파트너에게 마음을 어떻게 전달할 수 있을까?'
              }
              text={
                '글로 마음을 전달하기 막막할 때, MBTI 연애편지 서비스에서 팁을 얻을 수 있습니다. 꼭 글로 전달하지 않더라도 나의 매력이 무엇인지, 상대방이 나에게 어떤 의미인지 돋보이게 할지 힌트를 얻을 수 있습니다.'
              }
            />
          </Flex>
          <Box textAlign="center">
            <Heading
              display="inline-block"
              bg="#fbf3da"
              color="#444"
              as="h3"
              size={'md'}
              m="100px 0"
            >
              누가 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align={{ base: 'center', md: 'flex-start' }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetTargetCardBox
                color="#3b2478"
                text=" 잠자는 연애세포와 창의력을"
                boldText="동시에 자극하고 싶은 사람들"
              />

              <DetailContetTargetCardBox
                color="#ffcc00"
                text="썸 타고 있는 파트너에게"
                boldText="마음을 전달할 방법을 찾고 있는 사람들"
              />

              <DetailContetTargetCardBox
                color="#7d4cdb"
                text="MBTI 기반으로 이야기 속 캐릭터를 만들어내고 싶은 사람들,"
                boldText="MBTI 관련 콘텐츠 제작자"
              />
            </Flex>
          </Box>
          <Box textAlign="center">
            <Heading
              display="inline-block"
              bg="#fbf3da"
              color="#444"
              as="h3"
              size={'md'}
              m="100px 0"
            >
              어떻게 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align={{ base: 'center', md: 'flex-start' }}
              gap={10}
              flexWrap={'wrap'}
            >
              <DetailContetUseCardBox
                icon={<FcDocument />}
                text={
                  '연애편지를 보내는 사용자, 그리고 받아볼 상대의 MBTI를 알고 있어야 합니다.'
                }
              />

              <DetailContetUseCardBox
                icon={<FcVoicePresentation />}
                text={
                  ' MBTI를 각각 입력한 후 결과로 나오는 연애편지를 참고해 상대방에게 편지를 쓸 수 있습니다.'
                }
              />

              <DetailContetUseCardBox
                icon={<FcStackOfPhotos />}
                text={
                  'MBTI 관련 콘텐츠를 제작하는 사람들은 이를 활용하여 다양한 콘텐츠(글, 카드뉴스, 동영상)를 제작할 수 있습니다.'
                }
              />
            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default MBTILetterDetail;
