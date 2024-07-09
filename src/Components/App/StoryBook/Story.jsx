import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import useCheckMembership from '../../../Hook/useCheckMembership';
import { useRecoilValue } from 'recoil';
import { ChapterState } from '../../../Config/recoil';
import { SERVER_URL } from '../../../Config/server';
import { throttle } from '../../../utill/throttle';
import { t } from 'i18next';
import ServiceContentHeader from '../../Common/ServiceContentHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ChapterBox from './Components/ChapterBox';
import { saveDocxFile } from './Hooks/saveDocxFile';
import CheckMembershipModal from '../../Common/CheckMembershipModal';

const Story = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chapterResults, setChapterResults] = useState({});
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isDisabled, setDisabled] = useState({});

  const downloadLinkRef = useRef(null);

  const isMembership = useCheckMembership();

  const RecoilChapterIntro = useRecoilValue(ChapterState);

  const token = localStorage.getItem('token');
  const Toast = useToast();

  const chaptersArray = RecoilChapterIntro
    ? RecoilChapterIntro.match(/챕터 \d+\)[^]+?(?=챕터 \d+\)|$)/g)
    : [];

  // const chaptersArray = RecoilChapterIntro ? RecoilChapterIntro.match(/챕터 [1-9]\)\./g) : [];

  const chaptersDetails = chaptersArray
    ? chaptersArray.map((chapterText) => {
        // console.log(chapterText)
        const [chapterHeader, rest] = chapterText?.split(').', 2);

        const chapterNumber = chapterHeader.match(/챕터 (\d+)/)[1];
        // const chapterNumber = chapterHeader.match(/챕터/g)[1];
        // console.log(rest)
        const [titleWithPrefix, content] = rest?.split(/[-]\s*/, 2);

        const title = titleWithPrefix.trim();

        return {
          chapterNumber: `챕터 ${chapterNumber}`,
          title,
          content: content.trim(),
        };
      })
    : [];

  const streamChapterContent = async (chapterInfo, index) => {
    try {
      const response = await fetch(`${SERVER_URL}/user/prompt/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          retry: true,
          repeat: 1,
          name: 'storybook_story',
          values: { chapterFollow: chapterInfo },
        }),
      });

      if (!response.body || !response.body.getReader) {
        throw new Error(
          '스트리밍이 지원되지 않거나 응답을 읽을 수 없습니다. 잠시 후 재시도 해주세요.',
        );
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let chapterContent = '';
      let result = {};

      while (true) {
        const { value, done } = await reader.read();

        let textChunk = decoder.decode(value, { stream: true });
        chapterContent += textChunk;

        if (done) {
          if (
            chapterContent.trim() &&
            !chapterContent.includes('data: undefined')
          ) {
            const trimmedData = chapterContent.trim();
            if (
              trimmedData.startsWith('data:') &&
              trimmedData !== 'data: undefined'
            ) {
              result[index] = result[index]
                ? `${result[index]}\n${trimmedData.replace('data: ', '')}`
                : trimmedData.replace('data: ', '');

              setChapterResults((prevResults) => ({
                ...prevResults,
                [index]: prevResults[index]
                  ? `${prevResults[index]}\n${trimmedData.replace(
                      'data: ',
                      '',
                    )}`
                  : trimmedData.replace('data: ', ''),
              }));
            }
          }

          break;
        }

        let events = chapterContent.split('\n\n');
        chapterContent = events.pop();
        events.forEach((event) => {
          if (event.startsWith('data:') && !event.includes('data: undefined')) {
            // const dataContent = event.replace('data: ', '').trimEnd();
            const dataContent = event.replace('data: ', '');

            result[index] = result[index]
              ? `${result[index]}${dataContent}`
              : dataContent;

            setChapterResults((prevResults) => ({
              ...prevResults,
              [index]: prevResults[index]
                ? `${prevResults[index]}${dataContent}`
                : dataContent,
            }));
          }
        });
      }
    } catch (error) {
      Toast({
        title: 'Error',
        description: t('error.chapter_streaming_error'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleStory = throttle((chapterInfo, index) => {
    if (isMembership) {
      disableChapterButton(index);
      streamChapterContent(chapterInfo, index);
    } else {
      onOpen();
    }
  }, 3000);

  const handleRepeat = throttle(() => {
    if (chapterResults[currentChapterIndex]) {
      // 현재 챕터의 내용을 지우고 상태를 업데이트
      setChapterResults((prevResults) => ({
        ...prevResults,
        [currentChapterIndex]: '', // 현재 챕터의 내용을 초기화
      }));

      const currentChapterInfo = chaptersDetails[currentChapterIndex];
      if (currentChapterInfo) {
        const chapterInfo = `${currentChapterInfo.chapterNumber}) ${currentChapterInfo.title} - ${currentChapterInfo.content}`;
        handleStory(chapterInfo, currentChapterIndex);
      }
    } else {
      Toast({
        position: 'top-right',
        title: t('error.empty_content_title'),
        description: t('error.empty_content_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  }, 3000);

  const disableChapterButton = (index) => {
    setDisabled((prev) => ({ ...prev, [index]: true }));
  };

  // 다음 챕터로 이동
  const handleNextChapter = () => {
    setCurrentChapterIndex((prevIndex) =>
      Math.min(prevIndex + 1, chaptersDetails.length - 1),
    );
  };

  // 이전 챕터로 이동
  const handlePrevChapter = () => {
    setCurrentChapterIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <Flex
      w="100%"
      direction={{ base: 'column', lg: 'row' }}
      justify="space-between"
      minH="calc(100vh - 71px)"
    >
      <Box w="100%">
        <ServiceContentHeader
          title={t('service.storybook_story_title')}
          label={t('service.storybook_story_tooltip')}
        />
        <Box
          w="100%"
          maxW={{ base: '100%', md: '750px', lg: '1000px', xl: '1500px' }}
          p={{ base: '60px 30px', md: '60px' }}
          m="0 auto"
        >
          <Flex
            w="100%"
            minH="50vh"
            direction="column"
            justify={'space-between'}
          >
            <Flex direction={'column'}>
              <Text className="service-simpleDes">
                {t('service.storybook_story_description')}
              </Text>
              <Flex justifyContent="center" alignItems="center">
                <Button
                  onClick={handlePrevChapter}
                  isDisabled={currentChapterIndex === 0}
                  m={{ base: '0 10px', sm: '0 50px' }}
                >
                  <ChevronLeftIcon w={6} h={6} />
                </Button>
                <Box w="100%">
                  {chaptersDetails.map(
                    (chapter, index) =>
                      index === currentChapterIndex && (
                        <ChapterBox
                          key={index}
                          chapter={chapter}
                          index={index}
                          handleClickStory={() => {
                            const chapterInfo = `${chapter.chapterNumber}) ${chapter.title} - ${chapter.content}`;
                            handleStory(chapterInfo, index);
                          }}
                          outputKr={chapterResults[index]}
                          isDisabled={isDisabled}
                          setDisabled={setDisabled}
                          setChapterResults={setChapterResults}
                          handleRepeat={handleRepeat}
                        />
                      ),
                  )}
                </Box>

                <Button
                  onClick={handleNextChapter}
                  isDisabled={
                    currentChapterIndex === chaptersDetails.length - 1
                  }
                  m={{ base: '0 10px', sm: '0 50px' }}
                >
                  <ChevronRightIcon w={6} h={6} />
                </Button>
              </Flex>
            </Flex>
            <Text
              textAlign="center"
              fontSize="md"
              fontWeight="bold"
              margin="15px"
            >
              {currentChapterIndex + 1}/10
            </Text>
            <Flex justifyContent="center" alignItems="center">
              <Button
                margin="30px"
                onClick={() => saveDocxFile(chapterResults, chaptersDetails)}
              >
                {t('service.storybook_story_download_button')}
              </Button>
              <a ref={downloadLinkRef} style={{ display: 'none' }}></a>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <CheckMembershipModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Story;
