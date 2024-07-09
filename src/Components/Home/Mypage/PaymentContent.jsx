import React, { useState, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { t } from 'i18next';
import { ProfileMembership, ProfileUser } from '../../../Config/recoil';
import { SERVER_URL } from '../../../Config/server';
import { InfoBox } from '../../../Styles/CommonStyled';

const PaymentContent = () => {
  const toast = useToast();
  const token = localStorage.getItem('token');
  const user = useRecoilValue(ProfileUser);
  const membership = useRecoilValue(ProfileMembership);
  const [recent, setRecent] = useState('');

  const GetRecentPay = async () => {
    const config = {
      method: 'get',
      url: `${SERVER_URL}/user/pay`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    try {
      const result = await axios(config);
      setRecent(result.data.data);
    } catch (e) {
      console.log(e);
      toast({
        position: 'top-right',
        title: `Error`,
        description: t('error.cant_get_payment_log'),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    GetRecentPay();
  }, []);

  return (
    <Box bg="#fff" border="1px solid #eee" borderRadius={'10px'} mb="30px">
      <InfoBox>
        <h4>{t('mypage.period_of_use_label')}</h4>
        <p>
          {/* 구독 X */}
          {membership.bill_service === 'none' &&
            membership.current === 0 &&
            t('mypage.membership_not_subscribe')}

          {/* 구독 X , 시리얼 쿠폰 */}
          {membership.bill_service === 'none' &&
            membership.current > 0 &&
            `${dayjs(user.membership_recent_date).format(
              'YYYY-MM-DD',
            )} ~ ${dayjs(membership.next_date).format('YYYY-MM-DD')}`}

          {membership.bill_service !== 'none' &&
            membership.start_date === null &&
            `${dayjs(user.membership_recent_date).format(
              'YYYY-MM-DD',
            )} ~ ${dayjs(membership.next_date).format('YYYY-MM-DD')}`}

          {membership.bill_service !== 'none' &&
            membership.start_date !== null &&
            `${dayjs(membership.start_date).format('YYYY-MM-DD')} ~ ${dayjs(
              membership.next_date,
            ).format('YYYY-MM-DD')}`}
        </p>
      </InfoBox>
      <InfoBox>
        <h4>{t('mypage.recently_payment_label')}</h4>
        <p>
          {!recent && t('mypage.not_recently_payment')}
          {recent && dayjs(recent.create_at).format('YYYY-MM-DD')}
        </p>
      </InfoBox>

      <InfoBox>
        <h4>{t('mypage.payment_method_label')}</h4>
        <p>
          {/* {membership.bill_service === "none" &&
              membership.current === 0 &&
              "최근 결제 날짜가 없는 회원입니다."}
            {membership.bill_service === "none" &&
              membership.current > 0 &&
              "라이팅젤 시리얼 넘버 쿠폰"}
            {membership.bill_service === "iamport" && "카카오페이"}
            {membership.bill_service === "kakao" && "카카오페이"}
            {membership.bill_service === "inicis" && "신용/체크카드 결제"}
            {membership.bill_service === "innopay" && "신용카드/체크카드"}
            {membership.bill_service === "nopassbook" && "무통장"} */}
          {!recent && t('mypage.not_recently_payment')}
          {recent &&
            recent.service === 'none' &&
            t('mypage.not_recently_payment')}
          {recent &&
            recent.service === 'coupon' &&
            t('mypage.serial_number_coupon')}
          {recent && recent.service === 'iamport' && t('mypage.kakao_pay')}
          {recent && recent.service === 'kakao' && t('mypage.kakao_pay')}
          {recent && recent.service === 'inicis' && t('mypage.inicis')}
          {recent && recent.service === 'innopay' && t('mypage.innopay')}
          {recent &&
            recent.service.includes('nopassbook') &&
            t('mypage.nopassbook')}
        </p>
      </InfoBox>
    </Box>
  );
};

export default PaymentContent;
