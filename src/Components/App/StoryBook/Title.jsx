import {
  Box,
  Flex,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import useStreamGPT from './Hooks/useStreamGPT';
import useCheckMembership from '../../../Hook/useCheckMembership';
import { SERVER_URL } from '../../../Config/server';
import { throttle } from '../../../utill/throttle';
import SavenewFns from '../../../Hook/SavenewFns';
import OutletContentLayout from '../../Layout/OutletContentLayout';
import ServiceContentHeader from '../../Common/ServiceContentHeader';
import { t } from 'i18next';
import NextChapterButton from './Components/NextChapterButton';
import ResultLayoutKr from './Components/ResultLayoutKr';
import CheckMembershipModal from '../../Common/CheckMembershipModal';

const Title = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [outputKr, setOutputKr] = useState('');
  const [text, setText] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const Toast = useToast();
  const isMembership = useCheckMembership();
  const token = localStorage.getItem('token');

  const streamGPT = useStreamGPT(setOutputKr);

  const handleTitle = async () => {
    setOutputKr('');
    setDisabled(false);

    const result = await streamGPT(SERVER_URL, token, {
      retry: true,
      repeat: 1,
      name: 'storybook_title',
      values: {
        storyText: text,
      },
    });

    setDisabled(true);
  };

  const saveContent = throttle(() => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/prompt/save`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        name: '제목 선정하기',
        content_kr: outputKr,
        content_en: '',
      },
    };
    SavenewFns(config, outputKr, Toast);
  }, 3000);

  const handleRepeat = throttle(() => {
    if (!text) {
      Toast({
        position: 'top-right',
        title: t('error.empty_title'),
        description: t('error.empty_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
    if (text) {
      handleTitle();
    }
  }, 3000);

  return (
    <OutletContentLayout>
      <Box w="100%">
        <ServiceContentHeader
          title={t('service.storybook_title_title')}
          label={t('service.storybook_title_tooltip')}
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
            <Flex direction={'column'}>
              <p className="service-simpleDes">
                {t('service.storybook_title_description')}
              </p>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="10"
                cols="50"
                resize="none"
              />
              <Box textAlign={'center'} mt="30px">
                <NextChapterButton
                  isBlank={!(text && isDisabled)}
                  create={() => (isMembership ? handleTitle() : onOpen())}
                />
              </Box>
            </Flex>
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
            <Text fontWeight="bold">💡 {t('service.storybook_title_tip')}</Text>
            <Text>
              <br />
              {t('service.storybook_title_tip_sequence1')}
              <br />
              {t('service.storybook_title_tip_sequence2')}
              <br />
              {t('service.storybook_title_tip_sequence3')}
            </Text>
          </Box>
        }
      ></ResultLayoutKr>
      <CheckMembershipModal isOpen={isOpen} onClose={onClose} />
    </OutletContentLayout>
  );
};

export default Title;
