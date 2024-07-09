import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useToast } from '@chakra-ui/react';
import MainHeader from './MainHeader';
import { getAuth } from '@firebase/auth';
import { authService } from '../../Config/Firebase';

import axios from 'axios';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProfileState } from '../../Config/recoil';
import { SERVER_URL } from '../../Config/server';

const MainLayout = () => {
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
  }, [token]);

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
          navigate('/');
        });
      } else {
        localStorage.clear();
        authService.signOut();
        navigate('/');
      }
    }
  };

  //유저 프로필 가져오기
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

        const User = {
          email: dataUser.email,
          create: dataUser.create_at,
          provider: dataUser.provider,
          userName: dataUser.name,
          userImage: dataUser.picture,
        };
        localStorage.setItem('token', token);
        localStorage.setItem('User', JSON.stringify(User));

        setProfile({
          ...profile,
          user: dataUser,
          membership: dataMembership,
        });
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

  //발급받은 토큰으로 로그인
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
      <MainHeader isLogin={isLogin} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
