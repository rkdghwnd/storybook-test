import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box, Flex, useMediaQuery, useToast } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAuth } from '@firebase/auth';
import axios from 'axios';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProfileState } from '../../Config/recoil';
import { SERVER_URL } from '../../Config/server';
import { authService } from '../../Config/Firebase';
import ServiceSider from './ServiceSider';
import ServiceHeader from './ServiceHeader';

const Content = styled(Box)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const ServiceLayout = () => {
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const { Kakao } = window;
  const isLogin = localStorage.getItem('isLogin');
  const token = localStorage.getItem('token');
  const User = JSON.parse(localStorage.getItem('User'));
  const Toast = useToast();
  const navigate = useNavigate();

  const profile = useRecoilValue(ProfileState);
  const setProfile = useSetRecoilState(ProfileState);

  useEffect(() => {
    if (isLogin) {
      getProfile(token);
    }

    if (!isLogin) navigate('/sign/login');
  }, [token, profile.membership.count]);

  const getProfile = async (token) => {
    const config = {
      method: 'get',
      url: `${SERVER_URL}/user/profile`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    await axios(config)
      .then((response) => {
        const dataUser = response.data.data.user;
        const dataMembership = response.data.data.membership;

        setProfile({
          ...profile,
          user: dataUser,
          membership: dataMembership,
        });

        const User = {
          email: dataUser.email,
          create: dataUser.create_at,
          provider: dataUser.provider,
          userName: dataUser.name,
          userImage: dataUser.picture,
        };
        localStorage.setItem('User', JSON.stringify(User));
      })
      .catch((error) => {
        const errorStatus = error.response.status;
        const errorResMessage = error.response.data.message;
        if (errorStatus === 412) {
          //토큰 만료 됐으면
          UserGetIdToken();
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
  };

  // 토큰 사용해 재로그인
  const UserGetIdToken = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      user
        .getIdToken(true)
        .then(async (token) => {
          await GetLogin(token);
        })
        .catch((error) => {
          console.log(error);
          const errorMessage = error.message;
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: errorMessage,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        });
    }

    if (!user) {
      if (User?.provider === 'kakao') {
        Kakao.Auth.logout(() => {
          localStorage.clear();
          navigate('/sign/login');
        });
      } else {
        localStorage.clear();
        authService.signOut();
        navigate('/sign/login');
      }
    }
  };

  //발급 받은 토큰으로 로그인
  const GetLogin = async (token) => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/login`,
      data: {
        provider: 'firebase',
        token: token,
      },
    };
    await axios(config)
      .then(async (response) => {
        const LOGIN_TOKEN = response.data.data.token;
        await getProfile(LOGIN_TOKEN);
      })
      .catch((error) => {
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
      });
  };
  return (
    <>
      <Flex>
        {isLargerThan960 && <ServiceSider />}
        <Content>
          <ServiceHeader User={User} />
          <Outlet />
        </Content>
      </Flex>
    </>
  );
};

export default ServiceLayout;
