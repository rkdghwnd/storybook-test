import React, { useState } from 'react';
import { Box, Flex, Tooltip, Text } from '@chakra-ui/react';
import { DownloadIcon, RepeatIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { DrawModal } from 'Components/Common/DrawModal';
import { t } from 'i18next';

const ResultLayout = ({ outputKr, outputEn, RepeatContent, SaveContent }) => {
  const [openDrawing, setOpenDrawing] = useState(false);

  const HandleDrawing = () => {
    setOpenDrawing(!openDrawing);
  };
  return (
    <Box className="result-zone">
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
            <Tooltip label={t('common.rewrite_tooltip')}>
              <RepeatIcon w={6} h={6} onClick={RepeatContent} mr="10px" />
            </Tooltip>

            <Tooltip label={t('common.download_tooltip')}>
              <DownloadIcon w={6} h={6} onClick={SaveContent} />
            </Tooltip>
          </Text>
          {outputKr && (
            <Text
              as="span"
              fontSize={'sm'}
              cursor="pointer"
              onClick={HandleDrawing}
              _hover={{ textDecoration: 'underline' }}
            >
              {t('common.drawing_from_result')} <ArrowForwardIcon />
            </Text>
          )}
        </Flex>
      </Flex>
      <Box className="result-box" style={{ whiteSpace: 'pre-line' }}>
        {outputKr}
        <hr />
      </Box>
      {openDrawing && (
        <DrawModal
          outputKr={outputKr}
          outputEng={outputEn}
          isOpen={openDrawing}
          prompt={outputKr}
          onClose={HandleDrawing}
        />
      )}
    </Box>
  );
};

export default ResultLayout;
