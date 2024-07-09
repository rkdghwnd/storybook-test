import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Flex,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { useRecoilValue } from 'recoil';
import { ProfileUser } from 'Config/recoil';
import Loading from 'Components/Common/Loading';
import LoginCheckModal from 'Components/Common/LoginCheckModal';
import { CheckedToken } from 'Hook/CheckedToken';
import { t } from 'i18next';

const CreditCardButton = styled.button`
  background-color: #30009c;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 10px 30px;
  text-align: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-top: 15px;
  transition: all 300ms ease;

  &:hover {
    background-color: #517fe6;
    font-weight: 600;
  }
  &:disabled {
    background-color: #eee;
  }
`;

const PayInfo = styled(Flex)`
  background-color: #fff;
  border: 1px solid #372874;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  > h4 {
    font-weight: 600;
  }
`;

export default function MembershipHookForm({
  Price,
  payComment,
  setPayComment,
  MembershipName,
  createPayment,
  isLoading,
  serviceToken,
  paymentMap,
  planUid,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { IMP } = window;
  const RecoilUser = useRecoilValue(ProfileUser);
  const Toast = useToast();
  const isLogin = localStorage.getItem('isLogin');
  const token = localStorage.getItem('token');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const PaymentFunc = {
    All_PAYMENT(valid, name, email, addLineTel) {
      console.log('writing');
      WritingPay(valid, name, email, addLineTel);
    },
    WRITING_PAYMENT(valid, name, email, addLineTel) {
      console.log('writing');
      WritingPay(valid, name, email, addLineTel);
    },
    DRAWING_PAYMENT(valid, name, email, addLineTel) {
      console.log('drawing');
      TokenPay(valid, name, email, addLineTel);
    },
    CHAT_PAYMENT(valid, name, email, addLineTel) {
      console.log('chatting');
      TokenPay(valid, name, email, addLineTel);
    },
  };

  const TokenPay = async (valid, name, email, addLineTel) => {
    const now = new Date();
    const moidNum = dayjs(now).unix();
    const uid = RecoilUser.user_uid;

    IMP.init('imp33624147');
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: `${uid}_${
          serviceToken >= 100000 ? 'c' : serviceToken
        }_${moidNum}`, // 상점에서 관리하는 주문 번호를 전달
        name: `${MembershipName}`,
        amount: Price,
        buyer_email: email,
        buyer_name: name,
        buyer_tel: addLineTel,
        m_redirect_url: 'https://tinytingel.ai/cardpay', //모바일 전용 -> cardPayDone으로 이동
      },
      async (rsp) => {
        if (!rsp.success) {
          setPayComment('결제하기');
          Toast({
            position: 'top-right',
            title: t('error.imp_problem'),
            description: `${rsp.error_msg}`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }

        if (rsp.success) {
          if (!valid) {
            Toast({
              position: 'top-right',
              title: t('error.payment_fail_login_expired_title'),
              description: t('error.payment_fail_login_expired_description'),
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }

          if (valid) {
            const plan_uid = serviceToken;
            createPayment('inicis', token, rsp, plan_uid);
          }
        }
      },
    );
  };

  const WritingPay = async (valid, name, email, addLineTel) => {
    // console.log(planUid, Price);
    const now = new Date();
    const moidNum = dayjs(now).unix();
    const uid = RecoilUser.user_uid;

    IMP.init('imp33624147');
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: `${uid}_${planUid}_${moidNum}`, // 상점에서 관리하는 주문 번호를 전달
        name: `${MembershipName}`,
        amount: Price,
        buyer_email: email,
        buyer_name: name,
        buyer_tel: addLineTel,
        m_redirect_url: 'https://tinytingel.ai/cardpay', //모바일 전용 -> cardPayDone으로 이동
      },
      async (rsp) => {
        if (rsp.success === false) {
          setPayComment('결제하기');
          Toast({
            position: 'top-right',
            title: t('error.imp_problem'),
            description: `${rsp.error_msg}`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        } else {
          if (rsp.success && !valid) {
            Toast({
              position: 'top-right',
              title: t('error.payment_fail_login_expired_title'),
              description: t('error.payment_fail_login_expired_description'),
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }

          if (rsp.success && valid) {
            const plan_uid = planUid;
            createPayment('inicis', token, rsp, plan_uid);
          }
        }
      },
    );
  };

  async function onSubmit(values) {
    const valid = await CheckedToken(token);

    if (!valid) {
      Toast({
        position: 'top-right',
        title: t('error.logged_out_title'),
        description: `${t('error.retry_login_description')}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (valid) {
      setPayComment('결제창을 불러오고 있습니다.');

      const name = values.buyerName;
      const email = values.buyerEmail;
      const tel = values.buyerTel;
      const addLineTel = tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

      PaymentFunc[paymentMap](valid, name, email, addLineTel);
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb="12px" isInvalid={errors.buyerName}>
          <FormLabel htmlFor="buyerName">
            {t('membership.payment_card_user_name')}
          </FormLabel>
          <Input
            id="buyerName"
            name="buyerName"
            type="text"
            placeholder={t('membership.payment_card_user_name_placeholder')}
            {...register('buyerName', {
              required: `${t(
                'membership.payment_card_user_name_placeholder',
              )}!`,
            })}
          />
          <FormErrorMessage>
            {errors.buyerName && errors.buyerName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb="12px" isInvalid={errors.buyerEmail}>
          <FormLabel htmlFor="buyerEmail">E-mail</FormLabel>
          <Input
            name="buyerEmail"
            type="email"
            placeholder={t('membership.payment_card_email_placeholder')}
            {...register('buyerEmail', {
              required: `${t('membership.payment_card_email_placeholder')}!`,
            })}
          />
          <FormErrorMessage>
            {errors.buyerEmail && errors.buyerEmail.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb="12px" isInvalid={errors.buyerTel}>
          <FormLabel htmlFor="buyerTel">
            {t('membership.payment_card_phone')}
          </FormLabel>
          <Input
            placeholder={t('membership.payment_card_phone_placeholder')}
            type="tel"
            name="buyerTel"
            {...register('buyerTel', {
              required: t('membership.payment_card_phone_required'),
              minLength: {
                value: 9,
                message: t('membership.payment_card_phone_min_length'),
              },
              maxLength: {
                value: 11,
                message: t('membership.payment_card_phone_max_length'),
              },
              pattern: {
                value: /^[0-9]*$/,
                message: t('membership.payment_card_phone_placeholder'),
              },
            })}
          />
          <FormErrorMessage>
            {errors.buyerTel && errors.buyerTel.message}
          </FormErrorMessage>
        </FormControl>
        <Box pt="25px" w="100%">
          <PayInfo align="center" justify="space-between">
            <h4>{t('membership.membership')} </h4>
            <p>{MembershipName}</p>
          </PayInfo>
          <PayInfo align="center" justify="space-between">
            <h4>{t('membership.payment')} </h4>
            <p>{Price}</p>
          </PayInfo>
          {isLogin ? (
            <CreditCardButton isLoading={isSubmitting} type={'submit'}>
              {payComment}
            </CreditCardButton>
          ) : (
            <CreditCardButton onClick={onOpen} type={'button'}>
              {t('member.payment')}
            </CreditCardButton>
          )}
          <LoginCheckModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </form>
    </>
  );
}
