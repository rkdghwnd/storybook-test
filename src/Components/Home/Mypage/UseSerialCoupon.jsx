import React from 'react';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { t } from 'i18next';

const CouponCotainer = styled(Flex)`
  width: 100%;
  max-width: 500px;
  gap: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 3px 3px 3px 5px;

  &:focus-within {
    outline: 1px solid #4046b7;
  }

  @media screen and (max-width: 480px) {
    padding: 8px 5px 3px 5px;
  }
`;

const SubmitBtn = styled.button`
  background-color: #4046b7;
  color: #fff;
  padding: 5px 15px;
  width: 100%;
  max-width: 100px;
  border-radius: 5px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #372874;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 100%;
  }
`;
const CouponInput = styled.input`
  width: 100%;
  max-width: 400px;
  outline: none;

  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const UseSerialCoupon = ({ coupon, setCoupon, UseCoupon }) => {
  return (
    <CouponCotainer direction={{ base: 'column', sm: 'row' }}>
      <CouponInput
        value={coupon}
        placeholder={t('mypage.coupon_input_placeholder')}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <SubmitBtn onClick={UseCoupon}>{t('mypage.coupon_button')}</SubmitBtn>
    </CouponCotainer>
  );
};

export default UseSerialCoupon;
