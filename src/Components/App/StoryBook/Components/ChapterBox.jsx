import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Spinner,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { SERVER_URL } from '../../../../Config/server';
import { useRecoilState, useRecoilValue } from 'recoil';
import { drawOutputsState, ProfileState } from '../../../../Config/recoil';
import axios from 'axios';
import { t } from 'i18next';
import styled from 'styled-components';
import { LoadingText } from '../../../Common/Loading';

const BoxLoading = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChapterBox = ({
  chapter,
  index,
  handleClickStory,
  outputKr,
  isActive,
  isDisabled,
  setChapterResults,
  handleRepeat,
}) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const profile = useRecoilValue(ProfileState);
  const [drawOutputs, setDrawOutputs] = useRecoilState(drawOutputsState);

  const savedContent = localStorage.getItem(
    `outputKr_${chapter.chapterNumber}`,
  );

  const [chapterText, setChapterText] = useState(() => {
    return savedContent ?? outputKr ?? '';
  });

  const handleMakeButtonClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    handleClickStory();
  };

  const HandleDrawing = useCallback(async () => {
    if (!profile.user.draw_count || profile.user.draw_count === 0) {
      toast({
        position: 'top-right',
        title: t('error.not_enough_token_title'),
        description: t('error.not_ebough_token_description'),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    if (profile.user.draw_count > 0) {
      setLoading(true);

      const config = {
        method: 'post',
        url: `${SERVER_URL}/user/prompt/drawingel`,
        headers: { Authorization: 'Bearer ' + token },
        data: {
          prompt: outputKr || savedContent,
          size: '1024x1024',
          n: 1,
          response_format: 'b64_json',
        },
      };

      await axios(config)
        .then(async (response) => {
          const pictures = response.data.data.data;
          const newDrawOutputs = { ...drawOutputs };
          newDrawOutputs[index] = pictures[0];
          setDrawOutputs(newDrawOutputs);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
          let errorDataMessage = `${error}`.includes('undefined');
          if (errorDataMessage) {
            toast({
              position: 'top-right',
              title: 'Fail',
              description: t('error.not_draw_description'),
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
          const errorStatus = error.response?.status;
          const errorResMessage = error.response.data.message;

          toast({
            position: 'top-right',
            title: 'Fail',
            description: `[${errorStatus}] ${errorResMessage}`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token, savedContent, outputKr, profile, toast, setDrawOutputs, index]);

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    setChapterText(newValue);
    localStorage.setItem(`outputKr_${chapter.chapterNumber}`, newValue);
    setChapterResults((prevResults) => ({
      ...prevResults,
      [prevResults.index !== chapter.chapterNumber &&
      `${chapter.chapterNumber.replace('챕터 ', '') - 1}`]: newValue,
    }));
  };

  useEffect(() => {
    const storedText =
      localStorage.getItem(`outputKr_${chapter.chapterNumber}`) ||
      outputKr ||
      '';
    setChapterText(storedText);
  }, [chapter.chapterNumber, outputKr]);

  return (
    <section>
      {loading && (
        <BoxLoading>
          <Flex direction={'column'} align="center" gap="20px">
            <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="#fff"
              color="#000"
              size="xl"
            />
            <LoadingText direction="row">
              <div className="wave">L</div>
              <div className="wave">o</div>
              <div className="wave">a</div>
              <div className="wave">d</div>
              <div className="wave">i</div>
              <div className="wave">n</div>
              <div className="wave">g</div>
              <div className="wave">...</div>
            </LoadingText>
          </Flex>
        </BoxLoading>
      )}

      {drawOutputs[index] && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 1s ease-in',
            marginBottom: '40px',
            position: 'relative',
            zIndex: '20',
            height: 500,
          }}
        >
          <img
            key={drawOutputs[index]?.b64_json}
            src={`data:image/png;base64,${drawOutputs[index]?.b64_json}`}
            style={{
              border: '2px dashed black',
              borderRadius: '10px',
              transition: 'all 1s ease-in',
            }}
          />
        </div>
      )}

      <Box
        border={`2px ${isActive ? 'solid' : 'dashed'} #CBAACB`}
        padding={{ base: '16px', md: '20px' }}
        borderRadius="2xl"
        minW={{ base: '100%', sm: '260px' }}
      >
        <Stack spacing="4">
          <Box>{`${chapter.chapterNumber}. ${chapter.title} - ${chapter.content}`}</Box>
          <Flex
            direction="row"
            alignItems="center"
            mt={4}
            gap={4}
            justifyContent="right"
          >
            <Button
              size="md"
              onClick={handleMakeButtonClick}
              isDisabled={!!outputKr || isDisabled[index]}
              fontSize="sm"
            >
              만들기
            </Button>
            <Button onClick={handleRepeat} isDisabled={isDisabled[index]}>
              <RepeatIcon w={4} h={4} />
            </Button>
            <Button
              size="md"
              bg="#E8D9FF"
              color="#353535"
              isDisabled={isDisabled[index] || !outputKr}
              fontSize="sm"
              onClick={HandleDrawing}
            >
              이미지 생성
            </Button>
          </Flex>
          <Textarea
            resize="none"
            h="400px"
            maxLength="10000"
            value={chapterText ?? ''}
            onChange={handleTextChange}
          />
        </Stack>
        {/* <DrawModal
        outputKr={outputKr || savedContent}
        isOpen={openDrawing}
        prompt={outputKr || savedContent}
        onClose={HandleDrawing}
      /> */}
      </Box>
    </section>
  );
};

export default React.memo(ChapterBox);
