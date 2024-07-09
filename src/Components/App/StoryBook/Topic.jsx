import { Box, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import { t } from 'i18next';
import OutletContentLayout from '../../Layout/OutletContentLayout';
import ServiceContentHeader from '../../Common/ServiceContentHeader';
import CheckMembershipModal from '../../Common/CheckMembershipModal';
import useCheckMembership from '../../../Hook/useCheckMembership';
import { useSetRecoilState } from 'recoil';
import { TopicIntroState } from '../../../Config/recoil';
import { throttle } from '../../../utill/throttle';
import { SERVER_URL } from '../../../Config/server';
import SavenewFns from '../../../Hook/SavenewFns';
import useStreamGPT from './Hooks/useStreamGPT';
import CategorySelector from './Components/CategorySelector';
import TopicMessageInput from './Components/TopicMessageInput';
import NextChapterButton from './Components/NextChapterButton';
import ResultLayoutKr from './Components/ResultLayoutKr';
import { GenericModal } from './Components/GenericModal';
import { Link, useNavigate } from 'react-router-dom';

const Topic = () => {
  const [nextOpen, setNextOpen] = useState(false);
  const [outputKr, setOutputKr] = useState('');
  const [category, setCategory] = useState({
    selectOption: '',
    topicMessage: '',
    customInput: '\n',
  });
  const [isDisabled, setDisabled] = useState(true);

  const { selectOption, topicMessage, customInput } = category;
  const isBlank =
    selectOption &&
    topicMessage &&
    (selectOption !== '기타' || customInput) &&
    isDisabled;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem('token');
  const isMembership = useCheckMembership();
  const Toast = useToast();
  const setRecoilTopicIntro = useSetRecoilState(TopicIntroState);

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
    if (name === 'selectOption' && value === '기타') {
      setCategory((prevCategories) => ({ ...prevCategories, customInput: '' }));
    }
  };

  const saveContent = throttle(() => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/prompt/save`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        name: '주제 선정하기',
        content_kr: outputKr,
        content_en: '',
      },
    };
    SavenewFns(config, outputKr, Toast);
  }, 3000);

  const streamGPT = useStreamGPT(setOutputKr);
  const navigate = useNavigate();

  const handleTopic = useCallback(async () => {
    setOutputKr('');
    setDisabled(false);

    const result = await streamGPT(SERVER_URL, token, {
      retry: true,
      repeat: 1,
      name: 'storybook_topic',
      values: {
        selectOption: selectOption,
        topicMessage: topicMessage,
        customInput: customInput,
      },
    });

    setDisabled(true);
  }, [selectOption, topicMessage, customInput, streamGPT, setDisabled, token]);

  const handleRepeat = throttle(() => {
    if (!isBlank) {
      Toast({
        position: 'top-right',
        title: t('error.empty_title'),
        description: t('error.empty_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
    if (isBlank) {
      handleTopic();
    }
  });

  const handleCloseReset = () => {
    setRecoilTopicIntro('');
    setNextOpen(false);
  };
  const handleNextStep = (intro) => {
    setNextOpen(true);
    // recoil state에 넣기
    setRecoilTopicIntro(intro);
  };

  return (
    <OutletContentLayout>
      <Box w="100%">
        <ServiceContentHeader
          title={t('service.storybook_topic_title')}
          label={t('service.storybook_topic_title_tooltip')}
        />

        <Box
          w="100%"
          maxW="960px"
          p={{ base: '60px 30px', sm: '60px' }}
          m="0 auto"
        >
          <Flex w="100%" minH="50vh" direction="column" justify="space-between">
            <Flex direction="column">
              <Text className="service-simpleDes">
                {t('service.storybook_topic_category_label')}
              </Text>
              <CategorySelector
                selectOption={selectOption}
                handleCategoryChange={handleCategoryChange}
                customInput={customInput}
              />
              <Text mt={6} className="service-simpleDes">
                {t('service.storybook_topic_message_label')}
              </Text>
              <TopicMessageInput
                topicMessage={topicMessage}
                handleCategoryChange={handleCategoryChange}
              />
            </Flex>
            <Box textAlign={'center'} mt="30px">
              <NextChapterButton
                isBlank={!isBlank}
                create={() => (isMembership ? handleTopic() : onOpen())}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <ResultLayoutKr
        outputKr={outputKr}
        RepeatContent={handleRepeat}
        SaveContent={saveContent}
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
              💡 {t('service.storybook_topic_tip_title')}
            </Text>
            <Text>
              <br />
              {t('service.storybook_topic_tip_sequence1_title')} <br />
              {t('service.storybook_topic_tip_sequence1_description')}
              <br />
              <br />
              {t('service.storybook_topic_tip_sequence2_title')} <br />
              {t('service.storybook_topic_tip_sequence2_description')}
            </Text>
          </Box>
        }
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
                m="10px 0px"
                fontSize={'xs'}
                cursor="pointer"
                onClick={() => handleNextStep(outputKr)}
              >
                {t('service.storybook_topic_next_step')}
              </Text>
            )}
            <GenericModal
              isOpen={nextOpen}
              onClose={handleCloseReset}
              children={t('service.storybook_topic_next_step_alert')}
              footerButtons={[
                {
                  label: t('service.storybook_topic_next_step_button'),
                  props: {
                    colorScheme: 'purple',
                    as: Link,
                    to: '/service/storybook/chapter',
                  },
                },
              ]}
            />
          </Box>
        }
      />
      <CheckMembershipModal isOpen={isOpen} onClose={onClose} />
    </OutletContentLayout>
  );
};

export default Topic;
