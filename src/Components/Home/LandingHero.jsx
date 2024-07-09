import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  Badge,
  SimpleGrid,
  useToast,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { throttle } from '../../utill/throttle';
import drawing from '../../image/drawing.png';
import chatting from '../../image/chatting.png';
import vs from '../../image/vs.png';
import pen from '../../image/pen.png';
import { t } from 'i18next';

export const LandingHero = ({ isLogin }) => {
  const Toast = useToast();
  const AlertToast = throttle(() => {
    Toast({
      position: 'top-center',
      title: '준비 중입니다.',
      description: `곧 오픈될 서비스입니다!🥰`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  }, 3000);

  // 모바일 화면과 데스크탑 화면을 위한 이미지 크기 설정
  // const imageSize = useBreakpointValue({ base: "70px", sm: "95px" });
  const imageSize = useBreakpointValue({
    base: '40px',
    sm: '50px',
    md: '60px',
  });
  // 모바일 화면과 데스크탑 화면을 위한 텍스트 크기 설정
  const textSize = useBreakpointValue({ base: '15px', sm: '19px' });

  return (
    <Container maxW={'7xl'} data-aos="fade-up" data-aos-duration="3000">
      <Box
        p={'3rem 2rem 5rem'}
        maxW={'1024px'}
        borderBottom="1px solid #ededed"
        m="0 auto"
      >
        <SimpleGrid
          spacing={{ base: 8, xl: 10 }}
          columns={{ base: 2, sm: 2, lg: 4 }}
        >
          <Link to={isLogin ? '/service' : '/sign/login'}>
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              className="landing-grid-card"
              minW={{ base: '130px', sm: '190px' }}
              minH={{ base: '0px', sm: '270px' }}
              boxShadow={'2px 2px 2px 2px #d5d5d5'}
              borderRadius={'10px'}
              _hover={{
                boxShadow: '3px 3px 3px 3px #ededed',
                transform: 'translateY(-20px)',
              }}
              transition="transform 0.4s ease-in-out"
            >
              <Flex justify={'center'} fontSize={'4xl'}>
                <img
                  src={pen}
                  alt="pen Icon"
                  style={{
                    width: imageSize,
                    height: imageSize,
                  }}
                />
              </Flex>
              <Box
                fontWeight={600}
                fontSize={textSize}
                textAlign={'center'}
                color={'gray'}
              >
                <Text>
                  {t('home.contents_writing')} {'>'}{' '}
                </Text>
              </Box>
            </Flex>
          </Link>

          <Link to={isLogin ? '/service/drawing_gel' : '/sign/login'}>
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              className="landing-grid-card"
              bg={'white'}
              minW={{ base: '130px', sm: '190px' }}
              minH={{ base: '0', sm: '270px' }}
              borderRadius={'10px'}
              _hover={{
                boxShadow: '3px 3px 3px 3px #ededed',
                transform: 'translateY(-20px)',
              }}
              boxShadow={'2px 2px 2px 2px #d5d5d5'}
              transition="transform 0.4s ease-in-out"
            >
              <Flex justify={'center'} fontSize={'4xl'}>
                <img
                  src={drawing}
                  alt="drawing Icon"
                  style={{
                    width: imageSize,
                    height: imageSize,
                  }}
                />
              </Flex>
              <Box
                fontWeight={600}
                fontSize={textSize}
                textAlign={'center'}
                color={'gray'}
              >
                <Text>
                  {t('home.contents_drawing')} {'>'}{' '}
                </Text>
              </Box>
            </Flex>
          </Link>

          <Link to={isLogin ? '/service/chatting_gel' : '/sign/login'}>
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              minW={{ base: '130px', sm: '190px' }}
              minH={{ base: '0px', sm: '270px' }}
              bg="#f3f4ff"
              className="landing-grid-card"
              borderRadius={'10px'}
              cursor={'pointer'}
              _hover={{
                boxShadow: '3px 3px 3px 3px #ededed',
                transform: 'translateY(-20px)',
              }}
              boxShadow={'2px 2px 2px 2px #d5d5d5'}
              transition="transform 0.4s ease-in-out"
            >
              <Flex justify={'center'} fontSize={'4xl'}>
                <img
                  src={chatting}
                  alt="chatting Icon"
                  style={{
                    width: imageSize,
                    height: imageSize,
                  }}
                />
              </Flex>
              <Box
                fontWeight={600}
                fontSize={textSize}
                textAlign={'center'}
                color={'gray'}
              >
                <Text>
                  {t('home.contents_chatting')} {'>'}{' '}
                </Text>
                {/* <Text>서비스</Text> */}
              </Box>
            </Flex>
          </Link>
          <a
            href="https://www.aivs.zip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              className="landing-grid-card"
              bg={'white'}
              minW={{ base: '130px', sm: '190px' }}
              minH={{ base: '0px', sm: '270px' }}
              borderRadius={'10px'}
              cursor={'pointer'}
              _hover={{
                boxShadow: '3px 3px 3px 3px #ededed',
                transform: 'translateY(-20px)',
              }}
              boxShadow={'2px 2px 2px 2px #d5d5d5'}
              transition="transform 0.4s ease-in-out"
            >
              <Flex justify={'center'} fontSize={'4xl'}>
                <img
                  src={vs}
                  alt="vs Icon"
                  style={{
                    width: imageSize,
                    height: imageSize,
                  }}
                />
              </Flex>
              <Box
                fontWeight={600}
                fontSize={textSize}
                textAlign={'center'}
                color={'gray'}
              >
                <Text>
                  {t('home.contents_versus')}
                  {' >'}
                </Text>
              </Box>
            </Flex>
          </a>
        </SimpleGrid>
      </Box>
      <Stack
        align={'center'}
        spacing={{ base: 20, xl: 8 }}
        py={{ base: 20, md: 28 }}
        px={{ base: 5, md: 20 }}
        direction={{ base: 'column', xl: 'row' }}
      >
        <Stack spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.3}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
            wordBreak="keep-all"
          >
            <Text as={'span'}>{t('home.section1_title1')}</Text>
            <br />
            <Text as={'span'} color={'#3b2478'}>
              {t('home.section1_title2')} 🔮
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            {t('home.section1_description1')}

            <br />
            {t('home.section1_description2')}
          </Text>
          <Link to={isLogin ? '/service' : '/sign/login'}>
            <Button
              colorScheme={'purple'}
              fontSize="lg"
              // colorScheme={"yellow"}
              // fontSize="lg"
              _hover={{ bg: '#ccccee', color: 'white' }}
            >
              {t('home.section1_go_to_writingel')}
            </Button>
          </Link>
        </Stack>
        <Flex flex={1} justify={'center'} align={'center'} w={'full'}>
          <Flex
            w="100%"
            direction="column"
            align="center"
            justify="center"
            gap="50px"
          >
            <Flex
              w="100%"
              maxW="760px"
              m="0 auto"
              gap="20px"
              direction={{ base: 'column', sm: 'row' }}
              className="fadeIn"
            >
              <Avatar
                size="md"
                alt="chat_avatar"
                src="/images/chatAvatar.png"
              />
              <Box
                p="15px"
                bg={'#edf2f7'}
                w="100%"
                borderRadius="10px"
                boxShadow={'7px 10px 9px -5px #ededed'}
              >
                <Text fontSize={'lg'} fontWeight={600}>
                  We Lighten up your Writing! 💫
                </Text>
              </Box>
            </Flex>
            <Flex
              w="100%"
              maxW="760px"
              m="0 auto"
              gap="20px"
              direction={{ base: 'column', sm: 'row' }}
              className="fadeIn"
            >
              <Avatar
                size={'md'}
                alt="chat_avatar"
                src="/images/chatAvatar.png"
              />
              <Box
                p="15px"
                bg={'#edf2f7'}
                w="100%"
                borderRadius="10px"
                boxShadow={'8px 9px 6px -5px #ededed'}
              >
                <Text fontSize={'lg'} fontWeight={600}>
                  📢 {t('home.section1_notice_second')} 🥳
                </Text>
              </Box>
            </Flex>
            <Flex
              w="100%"
              maxW="760px"
              m="0 auto"
              gap="20px"
              direction={{ base: 'column', sm: 'row' }}
              className="fadeIn"
            >
              <Avatar
                size={'md'}
                alt="chat_avatar"
                src="/images/chatAvatar.png"
              />
              <Box
                p="15px"
                bg={'#edf2f7'}
                w="100%"
                borderRadius="10px"
                boxShadow={'8px 9px 6px -5px #ededed'}
              >
                <Text fontSize={'lg'} fontWeight={600}>
                  📢 {t('home.section1_notice_third_chunk1')}{' '}
                  <Badge variant="solid" colorScheme="green">
                    {' '}
                    Update
                  </Badge>{' '}
                  {t('home.section1_notice_third_chunk2')}{' '}
                  <Link to={isLogin ? '/service/chatting_gel' : '/sign/login'}>
                    <br />
                    <Button size="xs" colorScheme="purple" mr="5px">
                      {t('home.section1_notice_third_go_to_chattingel')}
                    </Button>
                  </Link>
                  {t('home.section1_notice_third_chunk3')} 😊
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
};
