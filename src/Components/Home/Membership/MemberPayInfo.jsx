import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import styled from 'styled-components';
import { WarningIcon } from '@chakra-ui/icons';

const ExplainSignContent = styled(Box)`
  > h4 {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 15px 0;
    color: #000;
  }

  > p {
    color: #000;
    word-break: keep-all;
    font-size: 15px;
    line-height: 25px;

    &::before {
      content: ' ∙ ';
    }
  }
`;

const MemberPayInfo = () => {
  return (
    <Flex bg="#fff" p={'36px'} gap="30px" direction="column">
      <ExplainSignContent>
        <Heading as="h4" size="md">
          <WarningIcon w={6} h={6} mr="5px" color={'#6200ee'} />
          멤버십 안내
        </Heading>
        <p>
          멤버십 가입을 위한 결제가 완료되면, 곧바로 서비스를 이용하실 수
          있습니다.
        </p>
        <p>
          멤버십 이용 기간은 상품에 해당되는 월(1개월 뒤, 3개월 뒤, 6개월 뒤)에
          동일한 날짜까지 입니다.
        </p>
        <p>
          기간 완료 전에 멤버십 이용을 취소하셔도, 해당 기간까지 서비스를 이용할
          수 있습니다.
        </p>
      </ExplainSignContent>
      <ExplainSignContent>
        <Heading as="h4" size="md">
          <WarningIcon w={6} h={6} mr="5px" color={'#6200ee'} />
          환불 안내
        </Heading>
        <p>
          결제일로부터 7일이 지나지 않았고 서비스 이력이 없는 경우, 콘텐츠 이용
          취소 및 전액 환불이 가능합니다.
        </p>
        <p>결제 취소 및 환불은 환불 신청 접수 후 7영업일 이내에 처리합니다.</p>
        <p>환불 신청 절차는 FAQ에서 확인하실 수 있습니다.</p>
      </ExplainSignContent>
    </Flex>
  );
};
export default MemberPayInfo;
