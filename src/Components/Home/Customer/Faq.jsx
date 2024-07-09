import React from 'react';
import { Box, Heading, Flex, Accordion, Text } from '@chakra-ui/react';
import { FaqItem } from './FaqItem';
import { QuestionOutlineIcon, QuestionIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { t } from 'i18next';

const FaqBox = styled(Box)`
  border: 1px solid #444;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 25px;
`;

const FaqHeader = styled(Flex)`
  padding: 1.3em;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-weight: 600;
  color: #000;

  > p {
    font-weight: 900;
    font-size: 1.25rem;
  }
`;

const FaqMore = styled(Box)`
  background-color: #ededed;
  border: 1px solid #444;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 36px;
  margin-top: 30px;
  workd-break: keep-all;

  > p {
    > a {
      cursor: pointer;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

const Faq = () => {
  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        {t('faq.title')}
      </Heading>

      <Box maxW="960px" p="20px" m="0 auto">
        {/* 계정 */}
        <FaqBox>
          <FaqHeader align={'center'} gap={2} bg="#ededed">
            <QuestionOutlineIcon w={6} h={6} /> <p>{t('faq.faq_account')}</p>
          </FaqHeader>
          <Accordion allowToggle>
            <FaqItem
              Question={t('faq.faq_account_question1')}
              content={t('faq.faq_account_answer1')}
            />
          </Accordion>
        </FaqBox>

        {/*  멤버십 */}
        <FaqBox>
          <FaqHeader align={'center'} gap={2} bg="#ededed">
            <QuestionOutlineIcon w={6} h={6} /> <p>{t('faq.faq_membership')}</p>
          </FaqHeader>
          <Accordion allowToggle>
            <FaqItem
              Question={t('faq.faq_membership_question1')}
              content={t('faq.faq_membership_answer1')}
            />
            <FaqItem
              Question={t('faq.faq_membership_question2')}
              content={t('faq.faq_membership_answer2')}
            />
            <FaqItem
              Question={t('faq.faq_membership_question3')}
              content={t('faq.faq_membership_answer3')}
            />
            <FaqItem
              Question={t('faq.faq_membership_question4')}
              content={t('faq.faq_membership_answer4')}
            />
            <FaqItem
              Question={t('faq.faq_membership_question5')}
              content={t('faq.faq_membership_answer5')}
            />
          </Accordion>
        </FaqBox>

        {/* 결제 */}
        <FaqBox>
          <FaqHeader align={'center'} gap={2} bg="#ededed">
            <QuestionOutlineIcon w={6} h={6} /> <p>{t('faq.faq_payment')}</p>
          </FaqHeader>
          <Accordion allowToggle>
            <FaqItem
              Question={t('faq.faq_payment_question1')}
              content={t('faq.faq_payment_answer1')}
            />
            <FaqItem
              Question={t('faq.faq_payment_question2')}
              content={t('faq.faq_payment_answer2')}
            />
            <FaqItem
              Question={t('faq.faq_payment_question3')}
              content={t('faq.faq_payment_answer3')}
            />
          </Accordion>
        </FaqBox>
        {/* 이용문의 */}
        <FaqBox>
          <FaqHeader align={'center'} gap={2} bg="#ededed">
            <QuestionOutlineIcon w={6} h={6} /> <p>{t('faq.faq_inquiry')}</p>
          </FaqHeader>
          <Accordion allowToggle>
            <FaqItem
              Question={t('faq.faq_inquiry_question1')}
              content={t('faq.faq_inquiry_answer1')}
            />
          </Accordion>
        </FaqBox>

        {/* 기타 문의 */}
        <FaqMore>
          <Flex
            align="center"
            gap={'8px'}
            direction={{ base: 'column', md: 'row' }}
          >
            <QuestionIcon w={6} h={6} />
            <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }}>
              {t('faq.faq_etc_heading')}
            </Heading>
          </Flex>
          <Text fontSize={'lg'} pt={{ base: '15px', md: '25px' }}>
            <a
              href="mailto:support@appplatform.co.kr"
              style={{ textDecoration: 'underline', color: '#444' }}
            >
              support@appplatform.co.kr
            </a>
            {t('faq.faq_etc_description_chunk')}
          </Text>
        </FaqMore>
      </Box>
    </Box>
  );
};

export default Faq;
