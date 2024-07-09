import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Select,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as server from 'Config/server';
import axios from 'axios';
import { throttle } from '../../../utill/throttle.js';
import { t } from 'i18next';

const GoFaqBox = styled(Flex)`
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #edf2f7;
  padding: 20px;
  word-break: keep-all;
  gap: 15px;
`;
const FaqLink = styled(Link)`
  @media screen and (max-width: 480px) {
    width: 100%;

    > button {
      width: 100%;
    }
  }
`;
const InquiryBox = styled(Flex)`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 60px 35px;
  background-color: #fff;
  margin-top: 30px;

  .InquiryLabel {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
  }

  .textarea-placeholder {
    &::placeholder {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    background-color: transparent;
    padding: 60px 10px;
    border: 0;
  }
`;

const Contact = () => {
  const isError = '';
  const Toast = useToast();
  const token = localStorage.getItem('token');
  //const navigate = useNavigate();

  const [categories, setCategory] = useState('default');
  const [titles, setTitle] = useState('');
  const [content, setContent] = useState('');

  const sendInquiry = throttle(() => {
    if (!token) {
      Toast({
        position: 'top-right',
        title: t('error.not_logined_title'),
        description: t('error.not_logined_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }

    if (token) {
      const data = [categories, titles, content];
      const isBlank = data.includes('');

      if (isBlank) {
        Toast({
          position: 'top-right',
          title: '빈 칸이 남아있습니다.',
          description: `빈 칸을 먼저 채워주세요!`,
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      }

      if (!isBlank) {
        const config = {
          method: 'post',
          url: `${SERVER_URL}/user/basic/inquiry`,
          headers: { Authorization: 'Bearer ' + token },
          data: {
            category: categories,
            title: titles,
            content: content,
          },
        };

        axios(config)
          .then((response) => {
            Toast({
              position: 'top-right',
              title: '성공!',
              description: `📬 문의사항이 전송 되었습니다.`,
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            //navigate('/contact/sent');
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
    }
  }, 3000);

  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        {t('contact.title')}
      </Heading>
      <Box maxW="960px" p="20px" m="0 auto">
        <GoFaqBox
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Text maxW="550px" textAlign={{ base: 'ceneter', md: 'left' }}>
            {t('contact.description')}
          </Text>
          <FaqLink to="/faq">
            <Button colorScheme={'purple'}>{t('contact.faq_button')}</Button>
          </FaqLink>
        </GoFaqBox>

        <InquiryBox direction="column" gap="15px">
          <FormControl>
            <FormLabel htmlFor="category" className="InquiryLabel">
              {t('contact.type')}
            </FormLabel>
            <Select
              isRequired
              focusBorderColor={'purple.400'}
              id="categories"
              defaultValue={'default'}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="default">{t('contact.type_default')}</option>
              <option value="이용 문의">
                {t('contact.type_option1')}이용 문의
              </option>
              <option value="오류 신고">
                {t('contact.type_option2')}오류 신고
              </option>
              <option value="서비스 제안">
                {t('contact.type_option3')}서비스 제안
              </option>
              <option value="환불">{t('contact.type_option4')}환불</option>
              <option value="탈퇴">{t('contact.type_option5')}탈퇴</option>
              <option value="기타">{t('contact.type_option6')}기타</option>
            </Select>
            {isError && (
              <FormErrorMessage>{t('contact.type_error')}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="title" className="InquiryLabel">
              {t('contact.inquiry_title')}
            </FormLabel>
            <Input
              isRequired
              focusBorderColor={'purple.400'}
              type="text"
              id="titles"
              placeholder={t('contact.inquiry_title_placeholder')}
              onChange={(e) => setTitle(e.target.value)}
            />
            {categories === '오류 신고' && (
              <Box
                pl="5px"
                py="15px"
                mt="30px"
                borderTop={'1px solid #ededed'}
                borderBottom={'1px solid #ededed'}
              >
                <Text mb="10px" fontSize={'sm'} fontWeight={600}>
                  📌 {t('contact.inquiry_of_error_notice')}
                </Text>
                <UnorderedList fontSize={'sm'}>
                  <ListItem>{t('contact.inquiry_of_error_text1')}</ListItem>
                  <ListItem>{t('contact.inquiry_of_error_text2')}</ListItem>
                  <ListItem>{t('contact.inquiry_of_error_text3')}</ListItem>
                </UnorderedList>
              </Box>
            )}
            <FormLabel htmlFor="content" className="InquiryLabel" />
            <Textarea
              isRequired
              focusBorderColor={'purple.400'}
              mt="10px"
              size="lg"
              minH="300px"
              resize="none"
              id="content"
              placeholder={t('contact.inquiry_text_placeholder')}
              className="textarea-placeholder"
              onChange={(e) => setContent(e.target.value)}
            />
            {isError && (
              <FormErrorMessage>
                {t('contact.inquiery_text_error')}
              </FormErrorMessage>
            )}
          </FormControl>
          <Box textAlign={'center'}>
            <Button
              color="#fff"
              bg="#372874"
              _hover={{ bg: '#805AD5' }}
              w="200px"
              onClick={sendInquiry}
            >
              {t('contact.send_button')}
            </Button>
          </Box>
        </InquiryBox>
      </Box>
    </Box>
  );
};

export default Contact;
