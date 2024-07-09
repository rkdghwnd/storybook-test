import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import useCheckMembership from 'Hook/useCheckMembership';
import ResultLayoutKr from './Components/ResultLayoutKr';
import DefaultLottie from './Components/DefaultLottie';
import { t } from 'i18next';
import { ChapterState, TopicIntroState } from '../../../../Config/recoil';
import { SERVER_URL } from '../../../../Config/server';
import MakeGPT_kr from '../../../../Hook/MakeGPT_kr';
import { throttle } from '../../../../utill/throttle';
import SavenewFns from '../../../../Hook/SavenewFns';
import OutletContentLayout from '../../../Layout/OutletContentLayout';
import ServiceContentHeader from '../../../Common/ServiceContentHeader';
import CheckMembershipModal from '../../../Common/CheckMembershipModal';

const Chapter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState('');
  const [outputKr, setOutputKr] = useState('');
  const [nextOpen, setNectOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const isMembership = useCheckMembership();

  const RecoilTopicIntro = useRecoilValue(TopicIntroState);
  const setRecoilTopicIntro = useSetRecoilState(TopicIntroState);

  const setRecoilChapter = useSetRecoilState(ChapterState);

  const isBlank = !(RecoilTopicIntro || input);
  const Toast = useToast();
  const token = localStorage.getItem('token');

  const handleChapter = () => {
    setLoading(true);

    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/prompt/stream`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        retry: true,
        repeat: 1,
        name: 'storybook_chapter',
        values: {
          topicFollow: RecoilTopicIntro || input,
        },
      },
    };
    MakeGPT_kr(config, setOutputKr, setLoading, Toast);
  };

  const handleRepeat = throttle(() => {
    if (isBlank) {
      Toast({
        position: 'top-right',
        title: t('error.empty_title'),
        description: t('error.empty_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
    if (!isBlank) {
      handleChapter();
    }
  }, 3000);

  const saveContent = throttle(() => {
    const contentKr = RecoilTopicIntro
      ? RecoilTopicIntro + outputKr
      : input + outputKr;

    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/prompt/save`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        name: '챕터 만들기',
        content_kr: contentKr,
        content_en: '',
      },
    };
    SavenewFns(config, contentKr, Toast); //확인하기!!!
  }, 3000);

  const handleChange = (e) => {
    if (RecoilTopicIntro) {
      setRecoilTopicIntro(e.target.value);
    } else {
      setInput(e.target.value);
    }
  };

  const handleCloseReset = () => {
    setRecoilChapter('');
    setNectOpen(false);
  };
  const handleNextStep = (chapter) => {
    setNectOpen(true);
    // recoil state에 넣기
    setRecoilChapter(chapter);
  };

  return (
    <OutletContentLayout>
      {isLoading && <DefaultLottie />}
      <Box w="100%">
        <ServiceContentHeader
          title="동화책 출간하기_챕터 만들기"
          label="창의적인 챕터 10가지를 추천해 드리겠습니다."
        />
        <Box
          w="100%"
          maxW="960px"
          p={{ base: '60px 30px', sm: '60px' }}
          m="0 auto"
        >
          <Flex
            w="100%"
            minH="50vh"
            direction="column"
            justify={'space-between'}
          >
            <Flex direction={'column'} gap="15px">
              <label className="label-flex">
                동화책의 주제나 메시지를 입력해주세요.
              </label>
              <Textarea
                resize="none"
                onChange={handleChange}
                value={RecoilTopicIntro ? RecoilTopicIntro : input}
                minH="300px"
              />
              <Text textAlign="right" mt="10px" fontSize={'sm'}>
                {' '}
                {RecoilTopicIntro ? RecoilTopicIntro.length : input.length} /
                3000
              </Text>
            </Flex>
            <Box textAlign={'center'} mt="30px">
              <Button
                isDisabled={isBlank}
                onClick={() => (isMembership ? handleChapter() : onOpen)}
              >
                만들기
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
      <ResultLayoutKr
        outputKr={outputKr}
        RepeatContent={handleRepeat}
        SaveContent={saveContent}
        nextStep={
          <Box>
            {outputKr && (
              <Text
                display="inline-block"
                bg="#7d4cdb"
                color="#fff"
                borderRadius={'10px'}
                p="0px 8px"
                fontSize={'xs'}
                mb="20px"
                cursor="pointer"
                onClick={() => handleNextStep(outputKr)}
              >
                챕터가 마음에 드신다면 클릭해주세요.
              </Text>
            )}
            <Modal onClose={handleCloseReset} size={'sm'} isOpen={nextOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                  출력된 챕터가 자동 입력되며, 수정이 가능합니다.
                </ModalBody>
                <ModalFooter>
                  <Link to="/service/storybook/story">
                    <Button colorScheme={'purple'}>스토리 만들기로 이동</Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        }
        additionalContent={
          <Box
            bg="gray.100"
            border="1px"
            borderColor="gray.200"
            p={6}
            borderRadius="md"
            mb={4}
          >
            <Text fontWeight="bold">💡 챕터 만들기 Tip</Text>
            <Text>
              <br />
              1. 주제와 교훈을 명확히 하기. <br />
              동화책의 중심이 될 주제와 교훈을 명확하게 정의하세요. <br />
              이는 챕터들을 구성하는 데 있어 기반을 제공하며, 각 챕터가 전체적인
              메시지와 일관성을 유지하도록 돕습니다.
              <br />
              <br />
              2. 주제에 대한 세부 사항 추가하기. <br />
              각 주제의 교훈과 함께 구체적인 내용을 제시하세요. <br />
              예를 들어 {"'우정'"}이라는 주제를 다룬다면, 우정의 중요성, 우정이
              시련을 겪을 때의 상황, 그리고 우정을 통해 어려움을 극복하는 방법
              등에 대해 자세히 설명할 수 있습니다. <br />
              <br />
              3. 챕터별 목적 설정하기. <br />각 챕터가 동화책 내에서 어떤 역할을
              하는지, 어떤 메시지를 전달하려는지에 대한 목적을 설정하세요. 이는
              각 챕터의 구성을 더욱 목적에 맞게 조정하는 데 도움이 됩니다.
            </Text>
          </Box>
        }
      />
      <CheckMembershipModal isOpen={isOpen} onClose={onClose} />
    </OutletContentLayout>
  );
};

export default Chapter;
