import React, { useState, useEffect } from 'react';
import { Box, Flex, useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { t } from 'i18next';
import { app } from '../../../Config/Firebase';
import { SERVER_URL } from '../../../Config/server';
import Loading from '../../Common/Loading';
import LoginHookForm from '../../../Hook/LoginHookForm';

const LoginTitle = styled(Flex)`
  > h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 35px;
  }

  > p {
    font-size: 15px;
    margin-bottom: 35px;
  }
`;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isInApp, SetInApp] = useState(false);
  const Toast = useToast();
  const navigate = useNavigate();
  const { Kakao } = window;

  const LoginKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'https://tinytingel.ai/oauth',
    });
  };

  const SignGoogle = () => {
    let provider = new GoogleAuthProvider();
    SignInGoogleFB(provider);
  };

  const SignFacebook = () => {
    let provider = new FacebookAuthProvider();
    SignInGoogleFB(provider);
  };

  const SignInGoogleFB = (provider) => {
    const auth = getAuth(app);
    auth.languageCode = 'ko';
    setLoading(true);

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithPopup(auth, provider)
          .then(async (data) => {
            const user = data.user;
            const token = user.accessToken;

            await AndLogin(token);
          })
          .catch((error) => {
            console.log(error);
            const errorMessage = error.message;
            const popupBlocked = errorMessage.includes('auth/popup-blocked');
            if (popupBlocked) {
              Toast({
                position: 'top-right',
                title: t('error.blocked_popup_title'),
                description: t('error.blocked_popup_description'),
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
              setLoading(false);
            } else {
              Toast({
                position: 'top-right',
                title: 'Fail',
                description: errorMessage,
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
              setLoading(false);
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Toast({
          position: 'top-right',
          title: 'Fail',
          description: `[${errorCode}] ${errorMessage}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const AndLogin = async (token) => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/login`,
      data: {
        provider: 'firebase',
        token: token,
      },
    };
    await axios(config)
      .then((response) => {
        const LOGIN_TOKEN = response.data.data.token;
        localStorage.setItem('isLogin', true);
        localStorage.setItem('token', LOGIN_TOKEN);
        setLoading(false);
        navigate('/service/storybook/topic');
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
        setLoading(false);
      });
  };

  useEffect(() => {
    let userAgent = navigator.userAgent;
    let check = userAgent.indexOf('KAKAOTALK');
    let checkNaver = userAgent.indexOf('NAVER');
    let checkInsta = userAgent.indexOf('Instagram');
    let checkFB = userAgent.indexOf('FB');

    if (
      check !== -1 ||
      checkNaver !== -1 ||
      checkInsta !== -1 ||
      checkFB !== -1
    ) {
      SetInApp(true);
    } else {
      return;
    }
  }, [isInApp]);

  return (
    <>
      {loading && <Loading />}
      <Box
        maxW="480px"
        m="0 auto"
        p={{ base: '40px 20px', md: '40px' }}
        bg="#fff"
        border="1px solid #dedede"
        borderRadius={'10px'}
      >
        <LoginTitle direction="column">
          <h3>{t('common.login')}</h3>
          <p>{t('login.description')}</p>
        </LoginTitle>
        <Box>
          {/* 이메일로 로그인 */}
          <LoginHookForm setLoading={setLoading} />

          <Box className="sign-link">
            {t('login.suggest_signup')}{' '}
            <Link to="/sign/signup">{t('common.signup')}</Link>
          </Box>
          <Box textAlign="center" m="35px 0">
            <Flex justify={'center'} align="center">
              <div className="line"></div>
              <p className="orLink">or</p>
              <div className="line"></div>
            </Flex>
          </Box>
        </Box>
        <Box textAlign="center" mb="10px">
          <Flex direction={'column'} align="center" justify={'center'}>
            {!isInApp && (
              <button
                className="sign-btns google-btn"
                name="Google"
                onClick={SignGoogle}
              >
                <FcGoogle /> {t('login.google_login')}
              </button>
            )}
            <button
              id="kakao-login-btn"
              className="sign-btns kakao-btn"
              name="kakao"
              onClick={LoginKakao}
            >
              <img src="/images/kakao_symbol.png" alt="kakao" />
              <span>{t('login.kakao_login')}</span>
            </button>
            <button
              className="sign-btns facebook-btn"
              name="Facebook"
              onClick={SignFacebook}
            >
              <AiFillFacebook color="plain" /> {t('login.facebook_login')}
            </button>
            {/* <div id="naverIdLogin"></div> */}
            {/* <div
                  id='naverIdLogin'
                 // ref={naverRef}
                  style={{ display: "none" }}
                ></div>{" "}
                <button
                  className='sign-btns naver-btn'
                  name='naver'
                  onClick={() => {
                    //console.log(naverRef.current.children)
                  //  naverRef.current.children[0].click();
                  }}
                >
                  <img src='/images/btnG_naver.png' alt='naver' />
                  <span>네이버 로그인</span>
                </button> */}
          </Flex>

          <div className="isChecked">
            <p>
              <a
                href="https://appplatform.notion.site/8be8232fff0341799cf8c13728610b6b"
                target="_blank"
                rel="noreferrer"
              >
                {t('login.agree_terms_chunk1')}
              </a>
              {t('login.agree_terms_chunk2')}&nbsp;
              <a
                href="https://www.notion.so/appplatform/d99f247a66d141bbbdf227739861a0a2"
                target="_blank"
                rel="noreferrer"
              >
                {t('login.agree_terms_chunk3')}
              </a>
              {t('login.agree_terms_chunk4')}&nbsp;
              {t('login.agree_terms_chunk5')}
            </p>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Login;
