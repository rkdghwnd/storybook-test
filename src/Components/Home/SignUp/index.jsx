import { Box, Divider, Flex, useToast } from '@chakra-ui/react';
import {
  browserLocalPersistence,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from '@firebase/auth';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { app } from '../../../Config/Firebase';
import { t } from 'i18next';
import { SERVER_URL } from '../../../Config/server';
import axios from 'axios';
import Loading from '../../Common/Loading';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai';

const SignUpTitle = styled(Flex)`
  > h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
  }

  > h4 {
    font-size: 15px;
  }
`;

const EmailSignLink = styled(Link)`
  width: 100%;
`;

const SignUp = () => {
  const [isInApp, SetInApp] = useState(false);
  const [loading, setLoading] = useState(false);
  const Toast = useToast();
  const navigate = useNavigate();
  const { Kakao } = window;

  const SignKaKao = () => {
    //간편 로그인 요청, 지정된 리디렉트 주소로 인가 코드 전달
    Kakao.Auth.authorize({
      redirectUri: 'https://tinytingel.ai/oauth',
      // redirectUri : 'https://tinytingel-renewal.vercel.app/oauth'
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

            await SendServer(token);
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

  const SendServer = async (token) => {
    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/signup`,
      data: {
        provider: 'firebase',
        token: token,
      },
    };
    await axios(config)
      .then(async (res) => {
        await AndLogin(token);
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
        setLoading(false);
        navigate('/service');
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
        <SignUpTitle direction="column">
          <h3>{t('common.signup')}</h3>
          <h4>{t('signup.description')}</h4>
        </SignUpTitle>

        <Divider m="35px 0" />
        <Box textAlign="center" mb="10px">
          <Flex direction={'column'} align="center" justify={'center'}>
            {!isInApp && (
              <button
                className="sign-btns google-btn"
                name="Google"
                onClick={SignGoogle}
              >
                <FcGoogle /> {t('signup.google')}
              </button>
            )}
            <button
              id="kakao-login-btn"
              className="sign-btns kakao-btn"
              name="kakao"
              onClick={SignKaKao}
            >
              <img src="/images/kakao_symbol.png" alt="kakao" />
              <span>{t('signup.kakao')}</span>
            </button>
            <button
              className="sign-btns facebook-btn"
              name="Facebook"
              onClick={SignFacebook}
            >
              <AiFillFacebook color="plain" /> {t('signup.facebook')}
            </button>
            {/* <div id="naverIdLogin"></div> */}
            {/* <div
              id='naverIdLogin'
              // ref={naverRef}
              style={{ display: "none" }}
            ></div>
            <button
              className='sign-btns naver-btn'
              name='naver'
              onClick={() => {
                //console.log(naverRef.current.children)
                //  naverRef.current.children[0].click();
              }}
            >
              <img src='/images/btnG_naver.png' alt='naver' />
              <span>네이버로 시작하기</span>
            </button> */}
            <EmailSignLink to="/sign/signup_email">
              <button className="sign-btns email-btn">
                <AiOutlineMail /> {t('signup.email')}
              </button>
            </EmailSignLink>
          </Flex>

          <div className="isChecked">
            <p>
              <a
                href="https://appplatform.notion.site/8be8232fff0341799cf8c13728610b6b"
                target="_blank"
                rel="noreferrer"
              >
                {t('signup.terms_of_service_chunk1')}
              </a>
              {t('signup.terms_of_service_chunk2')}&nbsp;
              <a
                href="https://www.notion.so/appplatform/d99f247a66d141bbbdf227739861a0a2"
                target="_blank"
                rel="noreferrer"
              >
                {t('signup.terms_of_service_chunk3')}
              </a>
              {t('signup.terms_of_service_chunk4')}
            </p>
          </div>
        </Box>
        <Box>
          <Box textAlign="center" m="35px 0">
            <Flex justify={'center'} align="center">
              <div className="line"></div>
              <p className="orLink">or</p>
              <div className="line"></div>
            </Flex>
          </Box>
          <Box className="sign-link">
            {t('signup.suggest_login')}
            <Link to="/sign/login">{t('common.login')}</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
