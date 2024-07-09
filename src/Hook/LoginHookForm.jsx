import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import dayjs from 'dayjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { SERVER_URL } from '../Config/server';
import { app } from '../Config/Firebase';

export default function LoginHookForm({ setLoading }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const Toast = useToast();
  const navigate = useNavigate();

  function onSubmit(values) {
    setLoading(true);

    const email = values.login_email;
    const password = values.login_password;
    const auth = getAuth(app);

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        LoginEmail(auth, email, password);
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
        setLoading(false);
      });
  }

  const LoginEmail = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const emailVerified = user.emailVerified;
        //계정 생성 날짜
        const formatCreation = dayjs(user.metadata.creationTime).format(
          'YYYY-MM-DD',
        );
        //이메일 인증 시작 날짜
        const startVerifyDate = dayjs('09 Feb 2022').format('YYYY-MM-DD');

        if (startVerifyDate <= formatCreation && !emailVerified) {
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: t('error.email_not_certified'),
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        } else {
          const token = user.accessToken;
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
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        const userNotFound = errorMessage.indexOf('user-not-found');
        const invalidEmail = errorMessage.indexOf('invalid-email');
        const wrongPassword = errorMessage.indexOf('wrong-password');
        // console.log(errorMessage, userNotFound, invalidEmail);
        setLoading(false);

        if (userNotFound !== -1) {
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: t('error.not_found_user'),
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        }

        if (invalidEmail !== -1) {
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: t('error.incorrect_email'),
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        }

        if (wrongPassword !== -1) {
          Toast({
            position: 'top-right',
            title: t('error.incorrect_password_title'),
            description: t('error.incorrect_password_description'),
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.login_email} mb="15px">
        <FormLabel htmlFor="login_email">{t('login.email_label')}</FormLabel>
        <Input
          type={'email'}
          id="login_email"
          placeholder="xxxx@xxxx.com"
          {...register('login_email', {
            required: t('login.email_required'),
          })}
        />
        <FormErrorMessage>
          {errors.login_email && errors.login_email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.login_password} mb="15px">
        <FormLabel htmlFor="login_password">
          {t('login.password_label')}
        </FormLabel>
        <Input
          type={'password'}
          id="login_password"
          placeholder="password"
          {...register('login_password', {
            required: t('login.password_required'),
          })}
        />
        <FormErrorMessage>
          {errors.login_password && errors.login_password.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        w="100%"
        mt={4}
        colorScheme="gray"
        isLoading={isSubmitting}
        type="submit"
        m="25px 0 15px 0"
      >
        {t('common.login')}
      </Button>
    </form>
  );
}
