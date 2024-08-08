import { motion } from 'framer-motion';
import { Box, Flex, Button, Avatar, Image } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { t } from 'i18next';
import { Logout, SiderUl } from '../../Styles/CommonStyled';
import { TutorialModal } from '../Common/Tutorial/TutorialModal';
import { ServiceSiderLink } from '../Common/ServiceSiderLink';
import { SignOut } from '../../Hook/SingOut';

const ButtonBox = styled.div`
  margin: 15px 0;

  button,
  > a > button {
    width: 100%;
  }
`;

const ServiceDrawer = ({ onClose, User }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const animation = {
    hidden: { right: '-300px' },
    show: { right: '0px' },
  };

  return (
    <Box
      as={motion.div}
      boxShadow="none"
      bg="#fff"
      border="1px solid #e3e3e3"
      borderRight="0"
      p="1rem 1rem 2rem 1rem"
      zIndex={15}
      position="absolute"
      right={0}
      top={0}
      w={{ base: 'calc(100% - 50px)', sm: '320px' }}
      minH="100vh"
      variants={animation}
      initial="hidden"
      animate="show"
      transition="200ms linear"
      // not work: transition={{ transition: "0.5", ease: "linear" }}
    >
      <Flex justify={'flex-end'}>
        <CloseButton onClick={onClose} />
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        borderBottom="1px solid #ededed"
        p="15px 0"
        gap="15px"
      >
        <Flex align="center" gap="10px">
          <Link to="/mypage">
            <Avatar
              bg="#fff"
              w="50px"
              h="50px"
              border="1px solid #444"
              name="username"
              src={
                User && User?.userImage !== 'default'
                  ? User?.userImage
                  : '/images/profileImage.png'
              }
              alt="avatar"
            />
          </Link>
          <p>{User && User.userName}</p>
        </Flex>
        <Logout onClick={SignOut}>{t('common.logout')}</Logout>
      </Flex>

      <Box>
        <ButtonBox>
          <Link to="/service/tingelbox" onClick={onClose}>
            <Button bg="#3b2478" color="#fff" mb="15px">
              {t('sidebar.tingelbox_button')}
            </Button>
          </Link>
          <Button onClick={() => setModalOpen(!modalOpen)} mb="15px">
            {t('sidebar.guide_button')}
          </Button>
          {modalOpen && (
            <TutorialModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(!modalOpen)}
              onOpen={() => setModalOpen(!modalOpen)}
            />
          )}
        </ButtonBox>

        <SiderUl>
          {
            <>
              <h3>
                <Flex>
                  <Image
                    src={'/images/storybook.png'}
                    h="20px"
                    marginRight="5px"
                  />
                  <ServiceSiderLink
                    link={'/intro'}
                    linkName={t('sidebar.storybook_intro')}
                    isNew={false}
                    onClose={onClose}
                  />
                </Flex>
              </h3>
              <h3>
                <Flex>
                  <Image
                    src={'/images/topic2.png'}
                    h="20px"
                    marginRight="5px"
                  />
                  <ServiceSiderLink
                    link={'/'}
                    linkName={t('sidebar.storybook_topic')}
                    isNew={false}
                  />
                </Flex>
              </h3>

              <h3>
                <Flex>
                  <Image src={'/images/topic.png'} h="20px" marginRight="5px" />
                  <ServiceSiderLink
                    link={'/chapter'}
                    linkName={t('sidebar.storybook_chapter')}
                    isNew={false}
                  />
                </Flex>
              </h3>

              <h3>
                <Flex>
                  <Image src={'/images/story.png'} h="20px" marginRight="5px" />
                  <ServiceSiderLink
                    link={'/story'}
                    linkName={t('sidebar.storybook_story')}
                    isNew={false}
                  />
                </Flex>
              </h3>

              <h3>
                <Flex>
                  <Image src={'/images/title.png'} h="20px" marginRight="5px" />
                  <ServiceSiderLink
                    link={'/title'}
                    linkName={t('sidebar.storybook_title')}
                    isNew={false}
                  />
                </Flex>
              </h3>

              <h3>
                <Flex>
                  <Image
                    src={'/images/publish.png'}
                    h="20px"
                    marginRight="5px"
                  />
                  <ServiceSiderLink
                    link={'/publication'}
                    linkName={t('sidebar.storybook_publish')}
                    isNew={false}
                  />
                </Flex>
              </h3>
            </>
          }
        </SiderUl>
      </Box>
    </Box>
  );
};

export default ServiceDrawer;
