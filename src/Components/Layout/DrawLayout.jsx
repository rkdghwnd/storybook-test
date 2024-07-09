// import DrawHeader from './DrawHeader';
import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from '@firebase/auth';
import * as server from 'Config/server';
import axios from 'axios';
import { authService } from 'Config/Firebase';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProfileState } from 'Config/recoil';

const DrawLayout = ({ children }) => {
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
  }, [token, profile.membership.count, profile.user.draw_count]);

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
          navigate('/');
        });
      } else {
        localStorage.clear();
        authService.signOut();
        navigate('/');
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
      {/* <DrawHeader User={User} /> */}
      {children}
    </>
  );
};

export default DrawLayout;
