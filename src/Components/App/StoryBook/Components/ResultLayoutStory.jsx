import React, { useState } from 'react';
import { Box, Flex, Tooltip, Text } from '@chakra-ui/react';
import { DownloadIcon, RepeatIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { DrawModal } from 'Components/Common/DrawModal';

const ResultLayoutStory = ({
  text,
  outputKr,
  RepeatContent,
  SaveContent,
  nextStep,
  additionalContent,
  drawText,
  story,
}) => {
  const [openDrawing, setOpenDrawing] = useState(false);

  const HandleDrawing = () => {
    setOpenDrawing(!openDrawing);
  };

  return (
    <Box className="result-zone">
      {story}
      <Flex align="center">
        <Flex
          p="15px"
          align="center"
          justify="space-between"
          gap="20px"
          w="100%"
          maxW={{ base: null, '2xl': '500px' }}
          className="result-icons"
        >
          <Text>
            <Tooltip label="누르면 새로운 이야기가 나타납니다.">
              <RepeatIcon w={6} h={6} onClick={RepeatContent} mr="10px" />
            </Tooltip>

            <Tooltip label="아래 결과를 저장할 수 있습니다.">
              <DownloadIcon w={6} h={6} onClick={SaveContent} />
            </Tooltip>
          </Text>
          {outputKr && drawText && (
            <Text
              as="span"
              fontSize={'sm'}
              cursor="pointer"
              onClick={HandleDrawing}
              _hover={{ textDecoration: 'underline' }}
            >
              {drawText} <ArrowForwardIcon />
            </Text>
          )}
        </Flex>
      </Flex>
      {text && outputKr && (
        <Text margin="10px 20px" fontSize="sm">
          {text}
        </Text>
      )}
      <Box className="result-box">
        {outputKr}
        <br />
        {nextStep}
        <hr />
        {additionalContent}
      </Box>
      {openDrawing && <DrawModal outputKr={outputKr} isOpen={openDrawing} prompt={outputKr} onClose={HandleDrawing} />}
    </Box>
  );
};

export default ResultLayoutStory;
