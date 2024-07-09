import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function useStreamGPT(setOutputKr) {
  const Toast = useToast();
  const navigate = useNavigate();

  const streamGPT = async (
    serverURL,
    token,
    postData,
    setDisabled,
    engine = 'stream',
  ) => {
    try {
      const response = await fetch(`${serverURL}/user/prompt/${engine}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.status === 412) {
        navigate('/sign/login');
      }

      if (!response.body || !response.body.getReader) {
        throw new Error(
          '스트리밍이 지원되지 않거나 응답을 읽을 수 없습니다. 잠시 후 재시도 해주세요.',
        );
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let partialData = '';

      let result = '';

      while (true) {
        const { value, done } = await reader.read();

        let textChunk = decoder.decode(value, { stream: true });
        partialData += textChunk;

        if (done) {
          // 스트림이 종료되었을 때, 남은 partialData 처리
          if (partialData.trim() && !partialData.includes('data: undefined')) {
            const trimmedData = partialData.trim();

            // "data: undefined"가 아닌 경우에만 처리
            if (
              trimmedData.startsWith('data: ') &&
              trimmedData !== 'data: undefined'
            ) {
              result = result
                ? `${result}\n${trimmedData.replace('data: ', '')}`
                : trimmedData.replace('data: ', '');

              setOutputKr((prev) =>
                prev
                  ? `${prev}\n${trimmedData.replace('data: ', '')}`
                  : trimmedData.replace('data: ', ''),
              );
            }
          }

          return result;
        }

        let events = partialData.split('\n\n');

        partialData = events.pop();
        events.forEach((event) => {
          if (event.startsWith('data:') && !event.includes('data: undefined')) {
            const dataContent = event.replace('data: ', '');

            result = result ? result + dataContent : dataContent;

            setOutputKr((prev) => {
              return prev ? prev + dataContent : dataContent;
            });
          }

          if (event === '') {
            result = result + '\n';

            setOutputKr((prev) => {
              return prev + '\n';
            });
          }
        });
      }
    } catch (error) {
      console.error('Error during data streaming:', error);

      Toast({
        position: 'top-right',
        title: 'Streaming Error',
        description: 'An error occurred during data streaming.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return streamGPT;
}
