import { Box, Flex, Textarea, useDisclosure, useToast } from '@chakra-ui/react';
import useStreamGPT from './Hooks/useStreamGPT';
import { SERVER_URL } from '../../../Config/server';
import { useState } from 'react';
import useCheckMembership from '../../../Hook/useCheckMembership';
import { throttle } from '../../../utill/throttle';
import SavenewFns from '../../../Hook/SavenewFns';
import OutletContentLayout from '../../Layout/OutletContentLayout';
import ServiceContentHeader from '../../Common/ServiceContentHeader';
import NextChapterButton from './Components/NextChapterButton';
import ResultLayoutKr from './Components/ResultLayoutKr';
import CheckMembershipModal from '../../Common/CheckMembershipModal';
import { t } from 'i18next';

const Proofread = () => {
  const isMembership = useCheckMembership();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [story, setStory] = useState('');
  const [outputKr, setOutputKr] = useState('');
  const token = localStorage.getItem('token');
  const [isDisabled, setDisabled] = useState(true);

  const isBlank = !(isDisabled && story);
  const Toast = useToast();

  const handleChange = (e) => {
    setStory(e.target.value);
  };

  const streamGPT = useStreamGPT(setOutputKr);

  const handleProofread = () => {
    setOutputKr('');
    setDisabled(false);

    streamGPT(
      SERVER_URL,
      token,
      {
        retry: true,
        repeat: 1,
        name: 'storybook_proofread',
        values: {
          story: story,
        },
      },
      setDisabled,
    );
  };

  const formattedOutput = outputKr
    .split(/챕터\s*\d+\)./) // 챕터 번호와 함께 나오는 패턴을 사용하여 분리
    .filter(Boolean) // 빈 문자열 제거
    .map((chapter, index) => `챕터 ${index + 1}) ${chapter.trim()}`) // 챕터 번호를 추가하고 문자열 공백 제거
    .join('\n');

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
      handleProofread();
    }
  }, 3000);

  const saveContent = throttle(() => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/prompt/save`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        name: '스토리 교정하기',
        content_kr: outputKr,
        content_en: '',
      },
    };
    SavenewFns(config, outputKr, Toast);
  }, 3000);

  return (
    <OutletContentLayout>
      <Box w="100%">
        <ServiceContentHeader
          title="동화책 출간하기_스토리 교정하기"
          label="챕터와 스토리를 완성한 후, 이야기가 더욱 완벽하게 독자에게 전달될 수 있도록 내용을 세심하게 교정합니다. 맞춤법과 띄어쓰기는 물론, 이야기의 흐름과 문맥을 보완하여 동화책의 품질을 높이는 데 중점을 둡니다."
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
                챕터 1부터 10까지의 스토리를 순서대로 모두 입력해주세요.(반드시,
                챕터도 포함하여 주세요.)
              </label>
              <Textarea
                resize="none"
                onChange={handleChange}
                value={story}
                minH="500px"
              />
              <Box textAlign={'center'} mt="30px">
                <NextChapterButton
                  isBlank={isBlank}
                  create={() => (isMembership ? handleProofread() : onOpen())}
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
      />
      <CheckMembershipModal isOpen={isOpen} onClose={onClose} />
    </OutletContentLayout>
  );
};

export default Proofread;
