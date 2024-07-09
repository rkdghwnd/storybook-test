import React from 'react';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import styled from 'styled-components';
import useToggle from 'Hook/useToggle';
import { motion } from 'framer-motion';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { t } from 'i18next';

const NoticeToggle = styled(Flex)`
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px 10px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 15px;
  cursor: pointer;

  > h4 {
    font-size: 18px;
    font-weight: 600;
  }

  > p {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const NoticeBox = styled(Box)`
  background-color: #fff;

  border: 1px solid #ededed;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const Paragraph = styled(Box)`
  > p {
    line-height: 30px;
    margin-bottom: 1rem;
    word-break: keep-all;
  }
`;

const Notice = () => {
  const [toggle1, setToggle1] = useToggle();
  const [toggle2, setToggle2] = useToggle();

  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        {t('notice.title')}
      </Heading>
      <Box maxW="960px" m="0 auto" minH="100vh" h="100%" p="20px">
        <NoticeToggle onClick={setToggle1}>
          <h4>{t('notice.post1_headline')}</h4>
          <p>{t('notice.post1_created_at')}</p>
        </NoticeToggle>
        {toggle1 && (
          <NoticeBox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Paragraph>
              <br />
              <p>{t('notice.post1_text1')}</p>
              <p>{t('notice.post1_text2')}</p>
              <Box p="15px 0">
                <OrderedList spacing={6}>
                  <ListItem>
                    {t('notice.post1_text3')}
                    <UnorderedList mt={3} spacing={1}>
                      <ListItem>{t('notice.post1_text4')}</ListItem>
                      <ListItem>{t('notice.post1_text5')}</ListItem>
                    </UnorderedList>
                  </ListItem>

                  <ListItem>
                    {t('notice.post1_text6')}
                    <UnorderedList mt={3} spacing={1}>
                      <ListItem>{t('notice.post1_text7')}</ListItem>
                      <ListItem>
                        {t('notice.post1_text8')}{' '}
                        <QuestionOutlineIcon w={6} h={6} color="#3b2478" />{' '}
                        {t('notice.post1_text9')}
                      </ListItem>
                    </UnorderedList>
                  </ListItem>

                  <ListItem>
                    {t('notice.post1_text10')}
                    <UnorderedList mt={3} spacing={1}>
                      <ListItem>{t('notice.post1_text11')}</ListItem>
                    </UnorderedList>
                  </ListItem>

                  <ListItem>
                    {t('notice.post1_text12')}

                    <UnorderedList mt={3} spacing={1}>
                      <ListItem>{t('notice.post1_text13')}</ListItem>
                      <ListItem>{t('notice.post1_text14')}</ListItem>
                    </UnorderedList>
                  </ListItem>

                  <ListItem>
                    {t('notice.post1_text15')}

                    <UnorderedList mt={3} spacing={1}>
                      <ListItem>{t('notice.post1_text16')}</ListItem>
                      <ListItem>{t('notice.post1_text17')}</ListItem>
                    </UnorderedList>
                  </ListItem>
                </OrderedList>
              </Box>
              <br />
              <p>{t('notice.post1_text18')}</p>
              <p>{t('notice.post1_text19')}감사합니다.</p>
            </Paragraph>
          </NoticeBox>
        )}
        <NoticeToggle onClick={setToggle2}>
          <h4>{t('notice.post2_headline')}</h4>
          <p>{t('notice.post2_created_at')}</p>
        </NoticeToggle>
        {toggle2 && (
          <NoticeBox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Paragraph>
              <br />
              <p>{t('notice.post2_text1')}</p>
              <p> {t('notice.post2_text2')}</p>
              <p>
                {' '}
                {t('notice.post2_text3')} <br /> {t('notice.post2_text4')}
              </p>
              <p> {t('notice.post2_text5')} </p>
              <p>
                {t('notice.post2_text6')} <br />→
                <b>{t('notice.post2_text7')}</b>
              </p>
              <p>
                {' '}
                {t('notice.post2_text8')}
                <br /> {t('notice.post2_text9')}
              </p>
              <p>{t('notice.post2_text10')}</p>
            </Paragraph>
          </NoticeBox>
        )}
      </Box>
    </Box>
  );
};

export default Notice;
