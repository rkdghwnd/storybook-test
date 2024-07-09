import React from 'react';
import {
  Box,
  Heading,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
  Text,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as server from 'Config/server';

const LetterBox = styled(Flex)`
  border-radius: 10px;

  .letter-image {
    max-width: 240px;

    @media screen and (max-width: 768px) {
      max-width: 200px;
    }
  }

  .letter-label {
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 16px;
  }
`;

const PrevLetter = styled(Flex)`
  background-color: #edf2f6;
  border-radius: 10px;
  padding: 20px;
  word-break: keep-all;
  margin-top: 30px;
  gap: 15px;
  position: relative;

  > p {
    max-width: 550px;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  &::after {
    content: '';
    position: absolute;
    border: 20px solid transparent;
    border-bottom-color: #edf2f6;
    top: -40px;
    left: 40px;
  }
`;

const PrevLink = styled.a`
  @media screen and (max-width: 480px) {
    width: 100%;

    > button {
      width: 100%;
    }
  }
`;

const SubsLetter = () => {
  const token = localStorage.getItem('token');
  const Toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    const name = values.nickname;
    const email = values.subsEmail;

    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/basic/email?email=${email}&name=${name}`,
      headers: { authentication: token },
    };
    await axios(config)
      .then((response) => {
        Toast({
          position: 'top-right',
          title: '성공!',
          description: `구독신청이 완료 되었습니다.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
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
  }

  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0 100px">
        뉴스레터
      </Heading>
      <Box maxW="960px" m="0 auto" p="60px 20px">
        <LetterBox
          direction={{ base: 'column', md: 'row' }}
          justify="space-around"
          align="center"
        >
          <picture>
            <source
              className="letter-image"
              srcSet="/images/tingLetter.webp"
              type="image/webp"
            />
            <img
              className="letter-image"
              src="/images/tingLetter.png"
              alt="tingLetter"
            />
          </picture>
          <Box
            w="100%"
            maxW="500px"
            p="30px"
            mt={{ base: '25px', md: '0' }}
            wordBreak={'keep-all'}
            border="1px solid #ddd"
            borderRadius="10px"
          >
            <p>
              라이팅젤이 인공지능 글쓰기 트렌드, 인공지능이 창작한 글, 라이팅젤
              주요 소식, 사용 방법 등을 알려 드립니다. 뉴스레터를 구독하고
              인공지능 관련 소식을 받아보세요!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.nickname}>
                <FormLabel htmlFor="nickname" className="letter-label">
                  이름
                </FormLabel>
                <Input
                  id="nickname"
                  placeholder="이름 혹은 닉네임을 적어주세요!"
                  {...register('nickname', {
                    required: '이름을 적어주세요!',
                  })}
                />
                <FormErrorMessage>
                  {errors.nickname && errors.nickname.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.subsEmail}>
                <FormLabel htmlFor="subsEmail" className="letter-label">
                  이메일
                </FormLabel>
                <Input
                  id="subsEmail"
                  placeholder="구독할 이메일을 적어주세요"
                  {...register('subsEmail', {
                    required: '구독할 이메일을 적어주세요!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '유효한 이메일을 적어주세요!',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.subsEmail && errors.subsEmail.message}
                </FormErrorMessage>
              </FormControl>
              <Box className="isChecked" m="10px 0">
                <p>
                  <a
                    href="https://appplatform.notion.site/8be8232fff0341799cf8c13728610b6b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    이용약관
                  </a>
                  과&nbsp;
                  <a
                    href="https://www.notion.so/appplatform/d99f247a66d141bbbdf227739861a0a2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    개인정보처리방침
                  </a>
                  을 확인하였고&nbsp;동의합니다.
                </p>
              </Box>
              <Button
                w="100%"
                mt={4}
                colorScheme="purple"
                isLoading={isSubmitting}
                type="submit"
              >
                구독하기
              </Button>
            </form>
          </Box>
        </LetterBox>
        <PrevLetter
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Text fontWeight={600}>라이팅젤의 지난 레터가 궁금하신가요?</Text>
          <PrevLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://page.stibee.com/archives/149676"
          >
            <Button colorScheme={'yellow'}>지난레터 보러가기</Button>
          </PrevLink>
        </PrevLetter>
      </Box>
    </Box>
  );
};

export default SubsLetter;
