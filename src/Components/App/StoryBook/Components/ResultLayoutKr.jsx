import React, { useState } from 'react';
import { Box, Flex, Tooltip, Text } from '@chakra-ui/react';
import { DownloadIcon, RepeatIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { DrawModal } from '../../../Common/DrawModal';

const ResultLayoutKr = ({
  text,
  outputKr,
  RepeatContent,
  SaveContent,
  nextStep,
  additionalContent,
  story,
  drawMessage,
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
          justify="flex-start"
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
          {drawMessage && outputKr && (
            <Link to="/service/drawing_gel">
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Text
                  display="inline-block"
                  bg="#7d4cdb"
                  color="#fff"
                  borderRadius={'10px'}
                  p="0px 8px"
                  fontSize={'xs'}
                  cursor="pointer"
                >
                  {drawMessage}
                </Text>
              </li>
            </Link>
          )}
        </Flex>
      </Flex>
      {text && outputKr && (
        <Text margin="10px 20px" fontSize="sm">
          {text}
        </Text>
      )}
      <Box className="result-box">
        {nextStep}
        <p style={{ whiteSpace: 'pre-line' }}>{outputKr}</p>
        <hr />
        {additionalContent}
      </Box>
      {openDrawing && (
        <DrawModal
          outputKr={outputKr}
          isOpen={openDrawing}
          prompt={outputKr}
          onClose={HandleDrawing}
        />
      )}
    </Box>
  );
};

export default ResultLayoutKr;
