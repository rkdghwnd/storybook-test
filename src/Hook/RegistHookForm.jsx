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
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { SERVER_URL } from '../Config/server';
import { app } from '../Config/Firebase';

export default function RegistHookForm({ setLoading }) {
  const Toast = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  function onSubmit(values) {
    setLoading(true);

    const name = values.regist_name;
    const email = values.regist_email;
    const password = values.regist_password;

    const auth = getAuth(app);
    auth.languageCode = 'ko';

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = user.accessToken;

        // displayname 없어서 updateProfile로 넣어줌
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            SendVerifyAndRegistServer(token, auth.currentUser);
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
            setLoading(false);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorIndex = errorMessage.indexOf('email-already-in-us');

        if (errorIndex !== -1) {
          Toast({
            position: 'top-right',
            title: 'Fail',
            description: t('error.email_already_use'),
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
  }

  const SendVerifyAndRegistServer = async (token, user) => {
    await sendEmailVerification(user)
      .then(async () => {
        console.log('성공!');
        const config = {
          method: 'post',
          url: `${SERVER_URL}/user/signup`,
          data: {
            provider: 'firebase',
            token: token,
          },
        };

        await axios(config)
          .then((response) => {
            setLoading(false);
            navigate('/sign/welcome');
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
        setLoading(false);
      });
  };

  let checked = watch('regist_password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.regist_name} mb="15px">
        <FormLabel htmlFor="regist_name">이름</FormLabel>
        <Input
          type={'name'}
          id="regist_name"
          placeholder="이름 혹은 닉네임을 적어주세요"
          {...register('regist_name', {
            required: '이름 혹은 닉네임을 적어주세요!',
          })}
        />
        <FormErrorMessage>
          {errors.regist_name && errors.regist_name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.regist_email} mb="15px">
        <FormLabel htmlFor="regist_email">이메일</FormLabel>
        <Input
          type={'email'}
          id="regist_email"
          placeholder="xxxx@xxxx.com"
          {...register('regist_email', {
            required: '메일 주소를 적어주세요.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '유효한 이메일을 적어주세요!',
            },
          })}
        />
        <FormErrorMessage>
          {errors.regist_email && errors.regist_email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.regist_password} mb="15px">
        <FormLabel htmlFor="regist_password">비밀번호</FormLabel>
        <Input
          type={'password'}
          id="regist_password"
          placeholder="password"
          {...register('regist_password', {
            required: '비밀번호를 적어주세요.',
            minLength: {
              value: 8,
              message:
                '비밀번호는 특수문자, 숫자를 혼합해 8자 이상(최대 20자) 입력해주세요!',
            },
            pattern: {
              value:
                /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
              message:
                '비밀번호는 특수문자, 숫자를 혼합해 8자 이상(최대 20자) 입력해주세요!',
            },
          })}
        />
        <FormErrorMessage>
          {errors.regist_password && errors.regist_password.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.check_regist_password} mb="15px">
        <FormLabel htmlFor="check_regist_password">비밀번호 확인</FormLabel>
        <Input
          type={'password'}
          id="check_regist_password"
          placeholder="비밀번호 확인"
          {...register('check_regist_password', {
            required: '비밀번호가 맞는지 확인해주세요!',
            validate: {
              CheckedPassWord: (value) =>
                value === checked || '비밀번호가 일치하지 않습니다.',
            },
          })}
        />
        <FormErrorMessage>
          {errors.check_regist_password && errors.check_regist_password.message}
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
        이메일로 가입
      </Button>
    </form>
  );
}
