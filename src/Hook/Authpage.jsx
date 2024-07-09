//카카오 로그인용 Authpage

import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from 'Components/Common/Loading';

import * as server from 'Config/server';
import { useToast } from '@chakra-ui/react';
import { t } from 'i18next';

const AuthPage = () => {
  const { Kakao } = window;
  const navigate = useNavigate();
  const Toast = useToast();

  const kakaoRequest = (access) => {
    Kakao.API.request({
      url: '/v2/user/me',
      success: async (response) => {
        serverLoginKakao(access, response);
      },
      fail: (error) => {
        console.log(error);
        navigate('/sign/signup');
        setTimeout(
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: t('error.cant_get_user_info'),
            status: 'error',
            duration: 3000,
            isClosable: true,
          }),
          3000,
        );
      },
    });
  };

  const serverLoginKakao = async (access, response) => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/login`,
      data: {
        provider: 'kakao',
        token: access,
      },
    };
    await axios(config)
      .then(async (response) => {
        const token = response.data.data.token;

        localStorage.setItem('isLogin', true);
        localStorage.setItem('token', token);
        setTimeout(navigate('/service', { replace: true }), 3000);
      })
      .catch((err) => {
        console.log(err);
        navigate('/sign/login');
        setTimeout(
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: t('error.cant_get_user_info'),
            status: 'error',
            duration: 3000,
            isClosable: true,
          }),
          3000,
        );
      });
  };

  const redirectKakao = () => {
    const search = new URL(window.location.href);
    const code = search.searchParams.get('code');
    const error = search.searchParams.get('error');

    if (error) {
      Toast({
        position: 'top-right',
        title: 'Fail',
        description: 'No AuthorizeCodeFromKakao',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (code) {
      let grant_type = 'authorization_code';
      let client_id = 'cc67916adadf130f20e79f6d4a622909';
      let redirect_uri = 'https://tinytingel.ai/oauth';
      //let redirect_uri = 'https://tinytingel-renewal.vercel.app/oauth';
      // let client_secret= "새로 발급받아서 넣기";

      const config = {
        method: 'post',
        url: `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      };

      axios(config)
        .then(async (res) => {
          const Access_token = res.data.access_token;
          await Kakao.Auth.setAccessToken(Access_token);
          const config = {
            method: 'post',
            url: `${SERVER_URL}/user/signup`,
            data: {
              provider: 'kakao',
              token: Access_token,
            },
          };

          await axios(config)
            .then(async (res) => {
              kakaoRequest(Access_token);
            })
            .catch((error) => {
              if (error.response.status === 403) {
                kakaoRequest(Access_token);
              }
            });
        })
        .catch((error) => {
          console.log(error);
          const errorResponse = error.response.data;
        });
    }
  };

  useEffect(() => {
    //리디렉트 주소로 받은 인가 코드로 토큰 받기 요청하기
    redirectKakao();
  }, []);
  return <Loading />;
};

export default AuthPage;
