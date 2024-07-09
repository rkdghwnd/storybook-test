import axios from 'axios';
import { t } from 'i18next';

export default function SaveFns(config, output, Toast) {
  if (!output) {
    Toast({
      position: 'top-right',
      title: t('error.empty_result_title'),
      description: t('error.empty_result_description'),
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  }

  if (output) {
    axios(config)
      .then(() => {
        Toast({
          position: 'top-right',
          title: '성공!',
          description: `팅젤보관함에 저장됐어요!`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        const errorStatus = error.response.status;
        const errorResMessage = error.response.data.message;
        if (errorStatus === 412) {
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: `[${errorStatus}] ${t(
              'error.retry_login_description',
            )}`,
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
      });
  }
}
