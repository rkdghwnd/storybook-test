import axios from 'axios';
import { t } from 'i18next';

//config, output, setOutput, setLoading, Toast가 함수에 필요한 값인 매개변수
export default async function MakeServiceSingleGPT(
  config,
  output,
  setOutput,
  setLoading,
  Toast,
) {
  return await axios(config)
    .then(async (response) => {
      const responses = response.data.data;
      const data = response.data.data[0];

      if (responses.length === 0) {
        Toast({
          position: 'top-right',
          title: t('error.retry'),
          description: t('error.retry_description'),
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }

      if (responses.length > 0) {
        setOutput({
          ...output,
          outputKr: data.kr,
          outputEn: data.en,
        });
      }

      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
      const errorStatus = error.response.status;
      const errorResMessage = error.response.data.message;
      if (errorStatus === 412) {
        Toast({
          position: 'top-right',
          title: 'Fail',
          description: `[${errorStatus}] ${t('error.retry_login_description')}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else if (errorStatus === 429) {
        Toast({
          position: 'top-right',
          title: 'Fail',
          description: `[${errorStatus}]  ${t(
            'error.wait_1_minute_description',
          )}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        Toast({
          position: 'top-right',
          title: 'Fail',
          description: `[${errorStatus}] ${errorResMessage}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    })
    .finally(() => {
      setLoading(false);
    });
}
