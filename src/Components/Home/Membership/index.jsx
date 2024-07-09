import React, { Suspense, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  useDisclosure,
  useToast,
  Button,
  Heading,
  Skeleton,
} from '@chakra-ui/react';
import MemberPayInfo from './MemberPayInfo';
import * as server from 'Config/server';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsCreditCard2Back } from 'react-icons/bs';
import MembershipHookForm from './MembershipHookForm';
import LoginCheckModal from 'Components/Common/LoginCheckModal';
import Loading from 'Components/Common/Loading';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { ProfileUser } from 'Config/recoil';
import { CheckedToken } from 'Hook/CheckedToken';
import { KakaoPayContainer, PayInfo, WarningInfo } from 'Styles/CommonStyled';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AllProductMembership from './AllProductMembership';
import WritingProduct from './WritingProuductMembership';
import DrawingProductMembership from './DrawingProductMembership';
import ChattingelMembership from './ChattingelMembership';
import { jwtDecode } from 'jwt-decode';
import { t } from 'i18next';

const Membership = () => {
  const { IMP } = window;
  const RecoilUser = useRecoilValue(ProfileUser);

  const navigate = useNavigate();
  const Toast = useToast();
  const isLogin = localStorage.getItem('isLogin');
  const User = JSON.parse(localStorage.getItem('User'));
  const token = localStorage.getItem('token');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const [planUid, setPlanUid] = useState('');

  const [allProduct, setAllproduct] = useState('');
  const [writeOnlyProduct, setWriteOnlyProduct] = useState('');

  const [payMethod, setPayMehtod] = useState('');
  const [MembershipName, setMembershipName] = useState('');
  const [Price, SetPrice] = useState('');
  const [serviceToken, setServiceToken] = useState('');
  const [payComment, setPayComment] = useState('결제하기');
  const [paymentMap, setPaymentMap] = useState('');

  const requestSecureGet = async (url, token) => {
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return {
        data: response.data,
        config: { isSuccessful: response.status === 200 },
      };
    } catch (error) {
      return { config: { isSuccessful: false } };
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        navigate('/sign/login', { replace: true });
        return;
      }

      try {
        // 토큰 유효성 검증
        const myProfileResponse = await requestSecureGet(
          `${SERVER_URL}/user/profile`,
          token,
        );
        if (!myProfileResponse.config.isSuccessful) {
          localStorage.clear();
          navigate('/sign/login', { replace: true });
          return;
        }
        // 토큰 만료 검증
        const decodedToken = jwtDecode(token);
        const tokenExp = decodedToken.exp;
        const currentTime = Math.floor(Date.now() / 1000);
        if (tokenExp < currentTime) {
          navigate('/sign/login', { replace: true });
        }
      } catch (error) {
        console.error('토큰 인증 중 오류가 발생했습니다:', error);
        navigate('/sign/login', { replace: true });
      }
    };

    verifyToken();
  }, [navigate, token]);

  const PaymentFunc = {
    All_PAYMENT(valid) {
      console.log('writing');
      WritingPay(valid);
    },
    WRITING_PAYMENT(valid) {
      console.log('writing');
      WritingPay(valid);
    },
    DRAWING_PAYMENT(valid) {
      console.log('drawing');
      TokenPay(valid);
    },
    CHAT_PAYMENT(valid) {
      console.log('chatting');
      TokenPay(valid);
    },
  };

  const paymentUrl = {
    드로잉젤: 'drawingel',
    채팅젤: 'chatingel',
  };

  const MembershipKakaoPay = async () => {
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
      console.log('결제 시작');
      PaymentFunc[paymentMap](valid);
    }
  };

  //라이팅젤, 드로잉젤 서버에 결제정보 전송
  const createPayment = async (service, token, rsp, plan_uid) => {
    if (service !== 'kakao' && service !== 'inicis') {
      throw new Error('Invalid service value');
    }

    const config = {
      method: 'post',
      url: `${SERVER_URL}/user/pay/writingel/new`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        service: service, //"kakao" || "inicis"
        imp_uid: rsp.imp_uid,
        merchant_uid: rsp.merchant_uid,
        plan_uid: parseInt(plan_uid),
        planName: MembershipName,
      },
    };

    const token_config = {
      method: 'post',
      url: `${SERVER_URL}/user/pay/${paymentUrl[MembershipName]}`,
      headers: { Authorization: 'Bearer ' + token },
      data: {
        service: service, //"kakao" || "inicis"
        imp_uid: rsp.imp_uid,
        merchant_uid: rsp.merchant_uid,
        plan: parseInt(serviceToken),
        planName: MembershipName,
      },
    };

    //결제시 구분 가능하도록(라이팅젤 통합 쪽 결제인지 토큰 충전 결제인지. 토큰 충전결제만 url 따로)
    const final_config =
      paymentUrl[MembershipName] !== undefined ? token_config : config;

    try {
      await axios(final_config);
      navigate('/paydone'); // 결제 완료 페이지로 이동
    } catch (error) {
      setLoading(false); // 로딩 상태 해제

      // 오류가 발생한 경우 사용자에게 알림
      if (error.response && error.response.status === 412) {
        // 412 오류 처리
        Toast({
          position: 'top-right',
          title: t('error.payment_fail_title'),
          description: t('error.payment_info_invalid'),
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        // 기타 오류 처리
        Toast({
          position: 'top-right',
          title: t('error.payment_fail_title'),
          description:
            error.response?.data.message || t('error.payment_processing_fail'),
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        // 결제 실패 페이지로 이동
        navigate('/failpay', {
          state: {
            errorStatus: error.response?.status,
            errorResMessage: error.response?.data.message,
          },
        });
      }
    }
  };

  //드로잉젤, 채팅젤 등 토큰 충전용 API
  const TokenPay = async (valid) => {
    const now = new Date();
    const moidNum = dayjs(now).unix();
    const uid = RecoilUser.user_uid;

    IMP.init('imp33624147');
    IMP.request_pay(
      {
        pg: 'kakaopay',
        merchant_uid: `${uid}_${
          serviceToken >= 100000 ? 'c' : serviceToken
        }_${moidNum}`,
        name: `${MembershipName}`,
        amount: Price,
        buyer_email: User.email,
        buyer_name: User.userName,
        m_redirect_url: 'https://tinytingel.ai/pay_redirect',
      },
      async (rsp) => {
        if (rsp.success === false) {
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
        }

        if (rsp.success && valid) {
          setLoading(true);

          const plan_uid = serviceToken;
          createPayment('kakao', token, rsp, plan_uid);
        }
      },
    );
  };

  //라이팅젤 통합 / 라이팅젤만 결제 가능한 통합 API
  const WritingPay = async (valid) => {
    const now = new Date();
    const moidNum = dayjs(now).unix();
    const uid = RecoilUser.user_uid;

    IMP.init('imp33624147');
    IMP.request_pay(
      {
        pg: 'kakaopay',
        merchant_uid: `${uid}_${planUid}_${moidNum}`, // 상점에서 관리하는 주문 번호
        name: `${MembershipName}`,
        amount: Price,
        buyer_email: User.email,
        buyer_name: User.userName,
        m_redirect_url: 'https://tinytingel.ai/pay_redirect',
      },
      async (rsp) => {
        if (rsp.success === false) {
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
        }

        if (rsp.success && valid) {
          setLoading(true);
          createPayment('kakao', token, rsp, planUid);
        }
      },
    );
  };

  const FetchWritingelNewData = async () => {
    const result = await axios({
      method: 'get',
      url: `${SERVER_URL}/user/pay/writingel/new`,
    });
    try {
      const data = result.data.data;
      const filteredAll = data.filter((item) => item.type === 'withDrowingel');
      const filteredOnly = data.filter((item) => item.type === 'writeOnly');
      setAllproduct(filteredAll);
      setWriteOnlyProduct(filteredOnly);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchWritingelNewData();
  }, []);

  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        {t('membership.title')}
      </Heading>

      {/* 멤버 결제 */}
      <Box>
        {isLoading && <Loading />}
        <Box
          w="100%"
          p={{ base: '4em 1em', sm: '4em' }}
          maxW={'1200px'}
          m="0 auto"
        >
          <Suspense fallback={<Skeleton height={'600px'} />}>
            <Tabs
              size={{ base: 'md', md: 'lg' }}
              colorScheme="purple"
              variant={'soft-rounded'}
            >
              <TabList overflowX={'auto'}>
                <Tab minW={'100px'}>{t('membership.category_all')}</Tab>
                <Tab minW={'100px'}>{t('membership.category_writingel')}</Tab>
                <Tab minW={'100px'}>{t('membership.category_drawingel')}</Tab>
                <Tab minW={'100px'}>{t('membership.category_chattingel')}</Tab>
              </TabList>
              <TabPanels p="2rem 0">
                <TabPanel>
                  <AllProductMembership
                    data={allProduct}
                    setPaymentMap={setPaymentMap}
                    setPlanUid={setPlanUid}
                    setMembershipName={setMembershipName}
                    SetPrice={SetPrice}
                  />
                </TabPanel>
                <TabPanel>
                  <WritingProduct
                    data={writeOnlyProduct}
                    setPaymentMap={setPaymentMap}
                    setPlanUid={setPlanUid}
                    setMembershipName={setMembershipName}
                    SetPrice={SetPrice}
                  />
                </TabPanel>
                <TabPanel>
                  <DrawingProductMembership
                    setPaymentMap={setPaymentMap}
                    setMembershipName={setMembershipName}
                    setServiceToken={setServiceToken}
                    SetPrice={SetPrice}
                  />
                </TabPanel>
                <TabPanel>
                  <ChattingelMembership
                    setPaymentMap={setPaymentMap}
                    setMembershipName={setMembershipName}
                    setServiceToken={setServiceToken}
                    SetPrice={SetPrice}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Suspense>
        </Box>

        <Box w="100%" p={{ base: '3em 1em', sm: '3em' }}>
          <Flex
            w="100%"
            p="48px 0"
            gap="20px"
            justify="center"
            align="center"
            transition="all 300ms ease-in-out"
          >
            <button
              align="center"
              className="kakaoPayBtn"
              onClick={() => setPayMehtod('kakao')}
            >
              <picture>
                {/* <source srcSet="/images/payment_icon_yellow_small.webp" type="image/webp" /> */}
                <img
                  src="/images/kakao_pay.png"
                  alt="payment_icon_yellow_small"
                />
              </picture>
              <span>{t('membership.kakao_pay')}</span>
            </button>
            <button
              align="center"
              className="creditNormal"
              onClick={() => setPayMehtod('card')}
            >
              <BsCreditCard2Back />
              <span>{t('membership.payment_card')}</span>
            </button>
          </Flex>
          {payMethod === 'kakao' && (
            <KakaoPayContainer>
              <div>
                <PayInfo align="center" justify="space-between">
                  <h4>{t('membership.membership')} </h4>
                  <p>{MembershipName}</p>
                </PayInfo>
                <PayInfo align="center" justify="space-between">
                  <h4>{t('membership.payment')} </h4>
                  <p>{Price}</p>
                </PayInfo>
              </div>
              <Button onClick={isLogin ? MembershipKakaoPay : onOpen}>
                {t('membership.payment_button')}
              </Button>
              <LoginCheckModal isOpen={isOpen} onClose={onClose} />
            </KakaoPayContainer>
          )}

          {payMethod === 'card' && (
            <Box
              w="100%"
              maxW={'550px'}
              m="0 auto"
              bg="#fff"
              border="1px solid #372874"
              borderRadius="10px"
              p={{ base: '30px 18px', md: '25px' }}
            >
              <Box mb="20px" fontSize="0.95rem" lineHeight="27px">
                <WarningInfo>
                  {t('membership.payment_card_notice1_chunk1')}
                  <span>{t('membership.payment_card_notice1_chunk2')}</span>
                  {t('membership.payment_card_notice1_chunk3')}
                </WarningInfo>
                <WarningInfo>
                  * <span>{t('membership.payment_card_notice2_chunk1')}</span>
                  {t('membership.payment_card_notice2_chunk2')}
                </WarningInfo>
                <WarningInfo>
                  * <span>{t('membership.payment_card_notice3_chunk1')}</span>
                  {t('membership.payment_card_notice3_chunk2')}
                </WarningInfo>
              </Box>
              <MembershipHookForm
                MembershipName={MembershipName}
                paymentMap={paymentMap}
                Price={Price}
                planUid={planUid}
                payComment={payComment}
                setPayComment={setPayComment}
                createPayment={createPayment}
                isLoading={isLoading}
                serviceToken={serviceToken}
              />
            </Box>
          )}
        </Box>
      </Box>
      {/* 멤버십 결제 설명(환불 등) */}
      <MemberPayInfo />
    </Box>
  );
};

export default Membership;
