import React from 'react';
import axios from 'axios';

import { Box, Flex, Heading, useToast, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as server from 'Config/server';
import { t } from 'i18next';

const SaveList = styled(Flex)`
  padding: 28px 20px;
  border-bottom: 1px solid #999;
  gap: 15px;

  &:last-child {
    border-bottom: 0;
  }
`;

const ListTitle = styled(Box)`
  padding: 18px 15px;
  background-color: #eee;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #000;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  gap: 10px;

  > h3 {
    font-weight: 600;
  }

  > p {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    border-bottom: 0;
    flex-direction: column;
  }
`;

const BoxLeft = styled(Flex)`

  > button {
    width: 80px;
    height: 30px;
    padding: 2px 8px;
    cursor: pointer;
    font-size: 14px;
  
    transition: all 300ms ease;
  }

  > button:first-child {
    background-color:#372874;
    border: 1px solid:#372874;
    color: #fff;
    
    &:hover {
        background-color: #4046b7;
        border: 1px solid #4046b7;
      }
  }

  @media screen and (max-width: 480px) {
    width: 100%
  }


`;

const TingelSaveData = ({ savedata }) => {
  const Toast = useToast();

  const onCopied = () => {
    if (!savedata) {
      Toast({
        position: 'top-right',
        title: t('error.empty_copy_content_title'),
        description: t('error.empty_copy_content_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
    if (savedata) {
      Toast({
        position: 'top-right',
        title: '성공!',
        description: `내용을 복사했어요.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const DeleteSave = async (uid) => {
    const token = localStorage.getItem('token');
    const config = {
      method: 'delete',
      url: `${SERVER_URL}/user/prompt/save/${uid}`,
      headers: { Authorization: 'Bearer ' + token },
    };
    await axios(config)
      .then(async (response) => {
        await window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      border="1px solid #999"
      w="100%"
      maxW="1200px"
      bg="#fff"
      borderRadius="10px"
    >
      <ListTitle>
        <h3>{t('tingelbox.recently_saved_contents')}</h3>
        <p>{t('tingelbox.maximum_saved')}</p>
      </ListTitle>
      {savedata.map((item) => (
        <SaveList direction="column" key={item.uid}>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align="center"
            justify="space-between"
            gap={{ base: '10px', sm: '0' }}
          >
            <Heading
              as="h3"
              size="sm"
              textAlign={{ base: 'left', md: 'center' }}
              wordBreak="keep-all"
              fontWeight={'600'}
            >
              {item.name}
            </Heading>
            <BoxLeft align="center" justify="center" gap={'5px'}>
              <CopyToClipboard
                text={item.content_kr + '\n' + item.content_en}
                onCopy={onCopied}
              >
                <Button>{t('tingelbox.copy_button')}</Button>
              </CopyToClipboard>

              <Button colorScheme={'red'} onClick={() => DeleteSave(item.uid)}>
                {t('tingelbox.delete_button')}
              </Button>
            </BoxLeft>
          </Flex>

          <Box w="100%">
            {item.content_kr}
            <hr style={{ margin: '5px 0' }} />
            {item.content_en}
          </Box>
        </SaveList>
      ))}
    </Box>
  );
};

export default TingelSaveData;
