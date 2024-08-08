import styled from 'styled-components';
import { Box, Flex } from '@chakra-ui/react';

export const Logo = styled.h1`
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #3b2478;
  color: white;
  font-weight: 900;
  text-shadow: 5px 5px 0px #3b2478;
  font-size: 50px;
`;

export const HeaderDrawerAvatar = styled(Flex)`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid #333;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const Logout = styled.button`
  background-color: #f45752;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 13px;
  color: #fff;
  transition: all 300ms ease;

  &:hover {
    background-color: #dc3545;
  }

  @media screen and (max-width: 768px) {
    // width: ${(props) => (props.main ? '100%' : 'initial')};
    width: 100%;
  }
`;

export const EbookPara = styled.p`
  max-width: 650px;
  width: 100%;
  word-break: keep-all;
  margin-bottom: 15px;
  font-size: 17px;
  line-height: 32px;

  > span {
    font-weight: 600;
  }
`;

export const GoShopBtn = styled.button`
  width: 120px;
  background-color: ${(props) => props.color};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 15px;
  word-break: keep-all;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.hover};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BookInfo = styled(Flex)`
  margin-bottom: 20px;
  word-break: keep-all;
  line-height: 30px;

  > div:first-child {
    max-width: 300px;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    border-right: 1px solid #e3e3e3;
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    > div:first-child {
      max-width: none;
      border-right: 0;
      margin-right: 0;
      border-bottom: 1px solid #e3e3e3;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }
  }
`;

export const ServicePicture = styled.picture`
  > source,
  img {
    max-width: 200px;

    @media screen and (max-width: 480px) {
      max-width: 130px;
    }
  }
`;

export const QuoteBox = styled(Box)`
  word-break: keep-all;

  > h4,
  p {
    font-size: 1rem;
  }

  > p:last-child {
    text-align: right;
  }
`;

export const MakeContentBtn = styled.button`
  padding: 20px;
  font-weight: 600;
  color: #3b2478;
  border: 2px solid #3b2478;
  border-radius: 10px;
  background-color: #fff;
  word-break: keep-all;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #372874;
    color: #fff;
  }
`;
export const SiderUl = styled.ul`
  list-style: none;

  h3 {
    padding: 5px 0 5px 22px;
  }
`;

export const KakaoPayContainer = styled(Box)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  > button {
    width: 100%;
    background-color: #30009c;
    font-size: 1rem;
    color: #fff;
    border-radius: 8px;
    padding: 10px 30px;
    cursor: pointer;
    border: 0;
    outline: 0;
    margin-top: 15px;

    &:hover {
      background-color: #805ad5;
    }

    &:hover {
      background-color: #805ad5;
    }
  }
`;

export const PayInfo = styled(Flex)`
  background-color: #fff;
  border: 1px solid #372874;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  > h4 {
    font-weight: 600;
  }
`;

export const WarningInfo = styled.p`
  > span {
    font-weight: 600;
  }
`;

export const InfoBox = styled(Flex)`
  align-items: center;
  padding: 15px 20px;
  gap: 20px;

  > h4 {
    font-weight: 600;
    width: 125px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    padding: 15px;
    width: 100%;

    > p {
      width: 100%;
    }
  }
`;
