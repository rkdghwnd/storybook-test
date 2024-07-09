import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as server from 'Config/server';
import { Flex, Heading, Text, Button, useToast } from '@chakra-ui/react';
import Loading from 'Components/Common/Loading';
import { CheckedToken } from './CheckedToken';
import { t } from 'i18next';

// 카카오페이 모바일 리디렉트 /pay_redirect
const KakaoPayRedirect = () => {
  const navigate = useNavigate();
  const Toast = useToast();
  const search = new URL(window.location.href);
  const merchant_uid = search.searchParams.get('merchant_uid');
  const imp_uid = search.searchParams.get('imp_uid');
  const imp_success = search.searchParams.get('imp_success');
  const error_msg = search.searchParams.get('error_msg');
  const token = localStorage.getItem('token');
  const [isLoading, SetLoading] = useState(false);

  const redirect = async () => {
    const valid = await CheckedToken(token);

    if (imp_success === 'false') {
      SetLoading(false);
      navigate('/membership');

      Toast({
        position: 'top-right',
        title: 'error',
        description: ` ${error_msg}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (imp_success === 'true' && !valid) {
        Toast({
          position: 'top-right',
          title: t('error.payment_fail_login_expired_title'),
          description: t('error.payment_fail_login_expired_description'),
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      if (imp_success === 'true' && valid) {
        const check_plan_uid = merchant_uid.split('_')[1];
        let plan_uid = check_plan_uid;
        const apiMap = {
          WritingPlan: 'user/pay/writingel/new',
          DrawingPlan: 'user/pay/drawingel',
          ChatingPlan: 'user/pay/chatingel',
        };

        let apiPath;
        if (plan_uid < 10) {
          apiPath = apiMap['WritingPlan'];
        } else if (plan_uid >= 80) {
          apiPath = apiMap['DrawingPlan'];
        } else if (plan_uid === 'c') {
          apiPath = apiMap['ChatingPlan'];
          plan_uid = 100000;
        }

        const data =
          apiPath === apiMap['WritingPlan']
            ? {
                service: 'kakao',
                imp_uid: imp_uid,
                merchant_uid: merchant_uid,
                plan_uid: parseInt(plan_uid),
              }
            : {
                service: 'kakao',
                imp_uid: imp_uid,
                merchant_uid: merchant_uid,
                plan: parseInt(plan_uid),
              };

        const config = {
          method: 'post',
          url: `${SERVER_URL}/${apiPath}`,
          headers: { Authorization: 'Bearer ' + token },
          data: data,
        };

        await axios(config)
          .then((res) => {
            SetLoading(false);
            return navigate('/paydone');
          })

          .catch((error) => {
            SetLoading(false);
            const errorStatus = error.response.status;
            const errorResMessage = error.response.data.message;
            return navigate('/failpay', {
              state: {
                errorStatus: errorStatus,
                errorResMessage: errorResMessage,
              },
            });
          });
      }
    }
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Flex
        bg="#edf2f6"
        h="100vh"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading as="h3" textAlign={'center'}>
          결제가 진행 중입니다.{' '}
        </Heading>
        <Text m="20px 0" textAlign={'center'}>
          3분이 지나도 결제가 되지 않으면 <br /> 아래 버튼을 클릭해주세요
        </Text>
        <Link to="/membership">
          <Button colorScheme={'purple'}>다시 멤버십 가입하기</Button>
        </Link>
      </Flex>
    </>
  );
};

export default KakaoPayRedirect;
