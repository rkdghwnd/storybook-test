import React, { useEffect, useState } from 'react';
import { Box, Text, useToast } from '@chakra-ui/react';
import * as server from 'Config/server';
import { t } from 'i18next';

const StreamOutput = () => {
  const [streamData, setStreamData] = useState('');
  const [eventSource, setEventSource] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const startStreaming = () => {
      const es = new EventSource(`${SERVER_URL}/user/prompt/stream`);

      es.onmessage = (event) => {
        const newContent = event.data;
        setStreamData((prev) => prev + newContent);
      };

      es.onerror = (error) => {
        console.error('EventSource failed:', error);
        toast({
          title: t('error.streaming_problem_title'),
          description: t('error.streaming_problem_description'),
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
        es.close();
      };

      setEventSource(es);
    };

    startStreaming();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  return (
    <Box>
      <Text>챕터만들기 출력:</Text>
      <Box border="1px" borderColor="gray.200" p={4}>
        {streamData.split('\n').map((line, index) => (
          <Text key={index}>{line}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default StreamOutput;
