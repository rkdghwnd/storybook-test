import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Stack,
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { DrawModal } from '../../../Common/DrawModal';

const ChapterBox = ({
  chapter,
  index,
  handleClickStory,
  outputKr,
  isActive,
  onBoxClick,
  isDisabled,
  setChapterResults,
  handleRepeat,
}) => {
  const [openDrawing, setOpenDrawing] = useState(false);

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

  const HandleDrawing = () => {
    setOpenDrawing(!openDrawing);
  };

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
    <Box
      border={`2px ${isActive ? 'solid' : 'dashed'} #CBAACB`}
      padding={{ base: '16px', md: '20px' }}
      borderRadius="2xl"
      // onClick={(e) => onBoxClick(index)}
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
            disabled={isDisabled[index]}
            fontSize="sm"
          >
            만들기
          </Button>
          <Button onClick={handleRepeat}>
            <RepeatIcon w={4} h={4} />
          </Button>
          <Button
            size="md"
            bg="#E8D9FF"
            color="#353535"
            disabled={!(outputKr || savedContent)}
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
      <DrawModal
        outputKr={outputKr || savedContent}
        isOpen={openDrawing}
        prompt={outputKr || savedContent}
        onClose={HandleDrawing}
      />
    </Box>
  );
};

export default React.memo(ChapterBox);
