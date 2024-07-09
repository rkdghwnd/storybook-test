import { Box, Flex, Text, Heading, Button, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChatStepper } from './ChatStepper';
import { t } from 'i18next';

const LandingChat = ({ isLogin }) => {
  return (
    <Flex
      p={{ base: '3em 2em', md: '5em 3em' }}
      gap="100px"
      w="100%"
      maxW="1200px"
      m="0 auto"
      data-aos="fade-up"
      data-aos-duration="3000"
      direction={{ base: 'column', lg: 'row' }}
    >
      <Box>
        <Box wordBreak="keep-all">
          <Box>
            <Heading as="h4" size="lg" mb="10px" wordBreak="keep-all">
              {t('home.section5_title')} 👀
            </Heading>
            <Text fontWeight={600} fontSize="lg">
              {t('home.section5_description')}
            </Text>
          </Box>
          <Box mt="30px" mb="40px">
            <Link to={isLogin ? '/service/chatting_gel' : '/sign/login'}>
              <Button colorScheme={'purple'} fontSize="lg">
                {t('home.section5_go_to_chattingel')}
              </Button>
            </Link>
          </Box>
        </Box>
        <Box bg="#F7FAFC" p="2em" borderRadius={'15px'}>
          <Box
            w="100%"
            bg="#fff"
            border={'2px solid #444'}
            mb="40px"
            p="5px"
            textAlign={'center'}
            borderRadius="10px"
            fontWeight={600}
          >
            {t('home.section5_example_system')} 💬
          </Box>
          <Flex gap="20px" direction={{ base: 'column', md: 'row' }} mb="20px">
            <Avatar
              size="lg"
              alt="chat_avatar"
              src={'/images/chatAvatar.png'}
            />
            <Box
              bg="#fff"
              borderRadius={'15px'}
              p="20px"
              gap="10px"
              boxShadow={'7px 10px 9px -5px #ededed'}
              fontWeight={500}
              w="100%"
            >
              <Text>{t('home.section5_example_bot1')}</Text>
            </Box>
          </Flex>
          <Flex gap="20px" direction={{ base: 'column', md: 'row' }} mb="20px">
            <Avatar
              size="lg"
              alt="chat_avatar"
              src={'/images/chatAvatar.png'}
            />
            <Box
              bg="#fff"
              borderRadius={'15px'}
              p="20px"
              gap="10px"
              boxShadow={'7px 10px 9px -5px #ededed'}
              fontWeight={500}
              w="100%"
            >
              <Text>{t('home.section5_example_bot2')}</Text>
            </Box>
          </Flex>
          <Flex
            gap="20px"
            direction={{ base: 'column', md: 'row' }}
            justify={'flex-end'}
          >
            <Box
              bg="#fff"
              borderRadius={'15px'}
              p="20px"
              gap="10px"
              boxShadow={'7px 10px 9px -5px #ededed'}
              fontWeight={500}
              w="100%"
            >
              <Text>{t('home.section5_example_user')}</Text>
            </Box>
            <Avatar size="lg" src={'/images/UserAvatar.png'} />
          </Flex>
        </Box>
      </Box>
      <Flex
        direction={'column'}
        mt="30px"
        align={'center'}
        justify={'center'}
        textAlign={'center'}
        fontWeight={500}
      >
        <ChatStepper
          statusNumber={'1'}
          stepDescription={t('home.section5_sequence_fisrt')}
        />
        <Box h="50px" border="1.3px solid #ddd" m="15px 0"></Box>
        <ChatStepper
          statusNumber={'2'}
          stepDescription={t('home.section5_sequence_second')}
        />
        <Box h="50px" border="1.3px solid #ddd" m="15px 0"></Box>
        <ChatStepper
          statusNumber={'3'}
          stepDescription={t('home.section5_sequence_thrid')}
        />
      </Flex>
    </Flex>
  );
};

export default LandingChat;
