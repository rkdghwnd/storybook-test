import React, { useState, lazy, Suspense } from 'react';
import {
  Box,
  Flex,
  Heading,
  Avatar,
  Text,
  Button,
  Stack,
  Skeleton,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { t } from 'i18next';
import { ProfileMembership, ProfileUser } from '../../../Config/recoil';
import { InfoBox } from '../../../Styles/CommonStyled';
import UseSerialCoupon from './UseSerialCoupon';
import { SERVER_URL } from '../../../Config/server';
import { CheckedToken } from '../../../Hook/CheckedToken';
import { SignOut } from '../../../Hook/SingOut';

const PaymentContent = lazy(() => import('./PaymentContent'));

const Mypage = () => {
  const User = JSON.parse(localStorage.getItem('User'));

  const toast = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = useRecoilValue(ProfileUser);
  const membership = useRecoilValue(ProfileMembership);
  const [coupon, setCoupon] = useState('');

  const UseCoupon = async () => {
    if (!coupon) {
      toast({
        position: 'top-right',
        title: t('error.incomplete_empty_form'),
        description: t('error.incomplete_coupon'),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    if (coupon) {
      const valid = await CheckedToken(token);

      if (!valid) {
        toast({
          position: 'top-right',
          title: t('error.logged_out_title'),
          description: `${t('error.retry_login_description')}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }

      if (valid) {
        const config = {
          method: 'post',
          url: `${SERVER_URL}/user/pay/coupon?coupon_uid=${coupon}`,
          headers: { Authorization: 'Bearer ' + token },
        };
        axios(config)
          .then((response) => {
            navigate(0);

            setTimeout(
              toast({
                position: 'top-right',
                title: 'success',
                description: `쿠폰이 등록되었습니다!`,
                status: 'success',
                duration: 3000,
                isClosable: true,
              }),
              10000,
            );
          })
          .catch((error) => {
            console.log(error.response);
            const errorStatus = error.response.status;
            const errorResMessage = error.response.data.message;
            if (error.response.status === 403) {
              toast({
                position: 'top-right',
                title: 'Fail',
                description: `[${errorStatus}] ${errorResMessage}`,
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
            }
          });
      }
    }
  };

  return (
    <Box
      h="100%"
      bg="#F7FAFC"
      p={{ base: '5em 2em', md: '6em 4em' }}
      overflowY="auto"
    >
      <Box w="100%" maxW="1024px" m="0 auto">
        <Heading as="h4" size={{ base: 'md', md: 'lg' }} mb="30px">
          💡 {t('mypage.title')}
        </Heading>
        <Stack spacing={8} w="100%">
          <Box>
            <Box textAlign={'right'} mb="10px">
              <Button colorScheme={'red'} onClick={SignOut} size="sm">
                {t('common.logout')}
              </Button>
            </Box>

            <Flex
              bg="#fff"
              border="1px solid #eee"
              borderRadius={'10px'}
              p={6}
              gap={6}
              align={'center'}
            >
              <Avatar
                bg="#fff"
                w="60px"
                h="60px"
                border="1px solid #444"
                name="username"
                src={
                  User && (!User?.userImage || User?.userImage === 'default')
                    ? '/images/profileImage.png'
                    : User?.userImage
                }
                alt="avatar"
              />
              <Box>
                <Text fontWeight={'600'} fontSize="1.1rem" mt="10px">
                  {User && User?.userName}
                </Text>
                <Text>{t('mypage.identity')}</Text>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Box
              bg="#fff"
              border="1px solid #eee"
              borderRadius={'10px'}
              mb="30px"
            >
              <InfoBox>
                <h4>{t('mypage.nickname_label')}</h4>
                <p>{user.name}</p>
              </InfoBox>
              <InfoBox>
                <h4>{t('mypage.id_label')}</h4>
                <p>{user.email}</p>
              </InfoBox>
              <InfoBox>
                <h4>{t('mypage.created_at_label')}</h4>
                <p>{user && `${dayjs(user.create_at).format('YYYY-MM-DD')}`}</p>
              </InfoBox>
            </Box>

            <Box
              bg="#fff"
              border="1px solid #eee"
              borderRadius={'10px'}
              mb="30px"
            >
              <InfoBox>
                <h4>{t('mypage.writingel_label')}</h4>
                <p>
                  {' '}
                  {/* 구독 x */}
                  {membership.bill_service === 'none' &&
                    membership.current === 0 &&
                    t('mypage.writingel_no_membership')}
                  {/* 구독 X, 시리얼 넘버 등록  */}
                  {membership.bill_service === 'none' &&
                    membership.current > 0 &&
                    `${t('mypage.writingel_use_coupon_chunk1')} ${
                      membership.current
                    }${t('mypage.writingel_use_coupon_chunk2')}`}
                  {/* 구독 중 */}
                  {membership.bill_service !== 'none' &&
                    membership.current > 0 &&
                    `${membership.current}${t('mypage.month')}`}
                  {/* 구독 후 해지 */}
                  {membership.bill_service !== 'none' &&
                    membership.current === 0 &&
                    membership.before > 0 &&
                    `${membership.before}${t('mypage.month')}`}
                </p>
              </InfoBox>
              <InfoBox>
                <h4>{t('mypage.drawingel_label')}</h4>
                <p>
                  {' '}
                  {user.draw_count > 0
                    ? `${user.draw_count} Token`
                    : t('mypage.none')}
                </p>
              </InfoBox>
              <InfoBox>
                <h4>{t('mypage.chattingel_label')}</h4>
                <p>
                  {' '}
                  {user.chat_token > 0
                    ? `${user.chat_token} Token`
                    : t('mypage.none')}
                </p>
              </InfoBox>
            </Box>

            {membership.bill_service === 'none' && membership.current === 0 ? (
              <Box mb="20px">
                <Link to="/membership">
                  <Button w="100%" colorScheme="blue">
                    {t('mypage.membership_subscribe')}
                  </Button>
                </Link>
              </Box>
            ) : (
              <Suspense
                fallback={
                  <Flex direction={'column'} gap="10px" mb="20px">
                    <Skeleton height="200px" borderRadius={'10px'} />
                    <Skeleton height="200px" borderRadius={'10px'} />
                  </Flex>
                }
              >
                <PaymentContent />
              </Suspense>
            )}

            <Box
              bg="#fff"
              border="1px solid #eee"
              borderRadius={'10px'}
              mb="30px"
            >
              <InfoBox>
                <h4>{t('mypage.coupon_label')}</h4>
                <UseSerialCoupon
                  coupon={coupon}
                  setCoupon={setCoupon}
                  UseCoupon={UseCoupon}
                />
              </InfoBox>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Mypage;
