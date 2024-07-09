import axios from 'axios';
import { t } from 'i18next';

//config, setOutput, setLoading, Toast가 함수에 필요한 값인 매개변수
export default function MakeGPT_kr(config, setOutputKr, setLoading, Toast) {
  axios(config)
    .then((response) => {
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
        const resultKr = data.kr.split(/\n|\n\n+/);

        let Kr = [...new Set(resultKr)];

        setOutputKr(Kr);
      }
    })
    .catch((error) => {
      console.log(error);

      const errorStatus = error.response
        ? error.response.status
        : 'response.status 없음'; // 확인하기
      const errorResMessage = error.response
        ? error.response.data.message
        : 'error.response.data 없음'; // 확인하기
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
