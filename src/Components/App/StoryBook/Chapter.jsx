import { Box, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import useCheckMembership from '../../../Hook/useCheckMembership';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ChapterState, TopicIntroState } from '../../../Config/recoil';
import useStreamGPT from './Hooks/useStreamGPT';
import { SERVER_URL } from '../../../Config/server';
import { throttle } from '../../../utill/throttle';
import SavenewFns from '../../../Hook/SavenewFns';
import { t } from 'i18next';
import OutletContentLayout from '../../Layout/OutletContentLayout';
import ServiceContentHeader from '../../Common/ServiceContentHeader';
import NextChapterButton from './Components/NextChapterButton';
import ChapterInputForm from './Components/ChapterInputForm';
import ResultLayoutKr from './Components/ResultLayoutKr';
import { GenericModal } from './Components/GenericModal';
import CheckMembershipModal from '../../Common/CheckMembershipModal';
import { Link } from 'react-router-dom';

const Chapter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState('');
  const [outputKr, setOutputKr] = useState('');
  const [nextOpen, setNectOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const isMembership = useCheckMembership();

  const RecoilTopicIntro = useRecoilValue(TopicIntroState);
  const setRecoilTopicIntro = useSetRecoilState(TopicIntroState);

  const setRecoilChapter = useSetRecoilState(ChapterState);

  const isBlank = isDisabled && !(RecoilTopicIntro || input);
  const Toast = useToast();
  const token = localStorage.getItem('token');

  const streamGPT = useStreamGPT(setOutputKr);

  const handleChapter = async () => {
    setOutputKr('');
    setDisabled(false);

    const result = await streamGPT(SERVER_URL, token, {
      retry: true,
      repeat: 1,
      name: 'storybook_chapter',
      values: {
        topicFollow: RecoilTopicIntro || input,
      },
    });

    setDisabled(true);
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
    SavenewFns(config, contentKr, Toast);
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
    setRecoilChapter(chapter);
  };

  const formattedOutput = outputKr
    .split(/챕터\s*\d+\)./) // 챕터 번호와 함께 나오는 패턴을 사용하여 분리
    .filter(Boolean) // 빈 문자열 제거
    .map((chapter, index) => `챕터 ${index + 1}) ${chapter.trim()}`) // 챕터 번호를 추가하고 문자열 공백 제거
    .join('\n');

  const nextStep = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('outputKr_')) {
        localStorage.removeItem(key);
      }
    });
  };

  return (
    <OutletContentLayout>
      <Box w="100%">
        <ServiceContentHeader
          title={t('service.storybook_chapter_title')}
          label={t('service.storybook_chapter_tooltip')}
        />
        <Box
          w="100%"
          maxW="960px"
          p={{ base: '60px 30px', sm: '60px' }}
          m="0 auto"
        >
          <Flex w="100%" minH="50vh" direction="column">
            <Flex direction={'column'} gap="30px">
              <ChapterInputForm
                value={RecoilTopicIntro ? RecoilTopicIntro : input}
                onChange={handleChange}
              />
              <Box textAlign={'center'} mt="30px">
                <NextChapterButton
                  isBlank={!isDisabled}
                  create={() => (isMembership ? handleChapter() : onOpen())}
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <ResultLayoutKr
        outputKr={formattedOutput}
        RepeatContent={handleRepeat}
        SaveContent={saveContent}
        nextStep={
          <Box>
            {outputKr && (
              <Text
                display="inline-block"
                bg="#E8D9FF"
                color="#353535"
                borderRadius={'7px'}
                p="3px 8px"
                ml="10px"
                fontSize={'xs'}
                cursor="pointer"
                m="10px 0px"
                onClick={() => handleNextStep(outputKr)}
              >
                {t('service.storybook_chapter_next_step')}
              </Text>
            )}
            <GenericModal
              isOpen={nextOpen}
              onClose={handleCloseReset}
              children={t('service.storybook_chapter_next_step_alert')}
              footerButtons={[
                {
                  label: t('service.storybook_chapter_next_step_button'),
                  props: {
                    onClick: nextStep,
                    colorScheme: 'purple',
                    as: Link,
                    to: '/story',
                  },
                },
              ]}
            />
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
            <Text fontWeight="bold">
              💡 {t('service.storybook_chapter_tip_title')}
            </Text>
            <Text>
              <br />
              {t('service.storybook_chapter_tip_sequence1_title')} <br />
              {t('service.storybook_chapter_tip_sequence1_description1')} <br />
              {t('service.storybook_chapter_tip_sequence1_description2')}
              <br />
              <br />
              {t('service.storybook_chapter_tip_sequence2_title')} <br />
              {t('service.storybook_chapter_tip_sequence2_description1')} <br />
              {t('service.storybook_chapter_tip_sequence2_description2')} <br />
            </Text>
          </Box>
        }
      />
      <CheckMembershipModal isOpen={isOpen} onClose={onClose} />
    </OutletContentLayout>
  );
};

export default Chapter;
