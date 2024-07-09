import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, useToast } from '@chakra-ui/react';
import styled from 'styled-components';

import Loading from 'Components/Common/Loading';
import * as server from 'Config/server';
import TingelSaveData from './TingelSaveData';

const TingNoContent = styled(Flex)`
  > p {
    padding: 40px 0;
    font-size: 1.4rem;
    font-weight: 600;
    word-break: keep-all;
  }

  > picture > source,
  img {
    width: 180px;
    opacity: 0.5;

    @media screen and (max-width: 680px) {
      width: 200px;
    }
  }
`;

const TingelBox = () => {
  const token = localStorage.getItem('token');
  const Toast = useToast();
  const [isLoading, SetLoading] = useState(false);
  const [savedata, setData] = useState('');

  const getSaveContent = async () => {
    SetLoading(true);
    const config = {
      method: 'get',
      url: `${SERVER_URL}/user/prompt/save`,
      headers: { Authorization: 'Bearer ' + token },
    };

    await axios(config)
      .then((response) => {
        const data = response.data.data; //array
        if (data.length === 0) {
          return;
        }

        if (data.length > 0) {
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
        const errorStatus = error.response.status;
        const errorResMessage = error.response.data.message;
        Toast({
          position: 'top-right',
          title: 'Fail',
          description: `[${errorStatus}] ${errorResMessage}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        SetLoading(false);
      });
  };

  useEffect(() => {
    getSaveContent();
  }, []);

  return (
    <Box minH="calc(100vh - 71px)" h="100%">
      {isLoading && <Loading />}
      <Flex
        justify={'center'}
        align="center"
        p={{ base: '5em 2em', md: '5em' }}
        minH={!savedata ? '100vh' : null}
      >
        {savedata && <TingelSaveData savedata={savedata} />}
        {!savedata && (
          <Flex direction={'column'} justify="center" align="center">
            <TingNoContent direction={'column'} align="center">
              <picture>
                <source srcSet="/images/couch.webp" type="image/webp" />
                <img src="/images/couch.png" alt="couch" />
              </picture>
              <p>보관된 내용이 없습니다!</p>
            </TingNoContent>
            <Link to="/service">
              <Button colorScheme={'blue'}>서비스 이용하러 가기</Button>
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default TingelBox;
