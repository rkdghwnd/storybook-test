import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Flex,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { changeLanguage, t } from 'i18next';
import { MdLanguage } from 'react-icons/md';
import useToogle from '../../Hook/useToggle';
import { Logout } from '../../Styles/CommonStyled';
import { signOut } from '@firebase/auth';

const SiderUl = styled.ul`
  list-style: none;

  > li,
  > a > li {
    cursor: pointer;
    padding: 12px 10px;
    border-radius: 10px;

    &:hover,
    &:active {
      font-weight: 600;
      background-color: #ededed;
    }
  }

  > ul {
    list-style: none;
    cursor: pointer;

    > a > li {
      padding: 5px 0 5px 22px;
    }
  }
`;

const LanguageIcon = styled(MdLanguage)`
  padding-right: 5px;
  font-size: 20px;
`;

const MainDrawer = ({ onClose, isLogin, User }) => {
  const [toggle1, setToggle1] = useToogle();
  const [toggle2, setToggle2] = useToogle();
  const [toggle3, setToggle3] = useToogle();

  const [language, setLanguage] = useState(
    localStorage.getItem('tinytingel_language'),
  );

  const animation = {
    hidden: { left: '-300px' },
    show: { left: '0px' },
  };

  return (
    <Box
      as={motion.div}
      boxShadow="none"
      bg="#fff"
      border="1px solid #e3e3e3"
      borderLeft="0"
      p="1rem 1rem 2rem 1rem"
      zIndex={15}
      position="absolute"
      left={0}
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
        gap="15px"
        p="15px 5px"
        mb="15px"
      >
        {isLogin ? (
          <>
            <Flex align={'center'} gap="10px">
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
            <Logout main onClick={signOut}>
              {t('common.logout')}
            </Logout>
          </>
        ) : (
          <>
            <Box>{t('common.need_login')}</Box>
            <Link to="/sign/login">
              <Button w="100%">{t('common.login')}</Button>
            </Link>
          </>
        )}
      </Flex>

      <Box>
        <SiderUl>
          <Link to="/" onClick={onClose}>
            <li>{t('header.writingel_home')} </li>
          </Link>
        </SiderUl>

        <SiderUl>
          <Link to="/about_us" onClick={onClose}>
            <li>{t('header.about_us')}</li>
          </Link>
        </SiderUl>

        <SiderUl>
          <li onClick={setToggle1}>
            {t('header.service_drawer_title')} <ChevronDownIcon />
          </li>
          {toggle1 && (
            <ul>
              <Link to={isLogin ? '/service' : '/sign/login'} onClick={onClose}>
                <li>{t('header.service_drawer_ai_writing')}</li>
              </Link>
              <Link
                to={isLogin ? '/service/drawing_gel' : '/sign/login'}
                onClick={onClose}
              >
                <li>{t('header.service_drawer_ai_drawing')}</li>
              </Link>
              <Link
                to={isLogin ? '/service/chatting_gel' : '/sign/login'}
                onClick={onClose}
              >
                <li>{t('header.service_drawer_ai_chatting')}</li>
              </Link>
              <Link to="/ebook" onClick={onClose}>
                <li>{t('header.service_drawer_bookstore')}</li>
              </Link>
            </ul>
          )}
        </SiderUl>
        <SiderUl>
          <Link to="/membership" onClick={onClose}>
            <li>{t('header.membership')}</li>
          </Link>
        </SiderUl>
        {/* <SiderUl>
          <Link to="/newsletter" onClick={onClose}>
            <li>{t('header.newsletter')}</li>
          </Link>
        </SiderUl> */}
        <SiderUl>
          <li onClick={setToggle2}>
            {t('header.support_drawer_title')} <ChevronDownIcon />
          </li>
          {toggle2 && (
            <ul>
              <Link to="/notice" onClick={onClose}>
                <li>{t('header.support_drawer_notice')}</li>
              </Link>
              <Link to="/faq" onClick={onClose}>
                <li>{t('header.support_drawer_faq')}</li>
              </Link>
              <Link to="/contact" onClick={onClose}>
                <li>{t('header.support_drawer_contact')}</li>
              </Link>
            </ul>
          )}
        </SiderUl>
        <SiderUl>
          <li onClick={setToggle3}>
            <span>{language === 'ko' ? '한국어' : 'English'}</span>
            <ChevronDownIcon />
          </li>
        </SiderUl>
        {toggle3 && (
          <SiderUl>
            <ul>
              <Link
                onClick={() => {
                  changeLanguage('ko');
                  setLanguage('ko');
                }}
              >
                <li>한국어</li>
              </Link>
              <Link
                onClick={() => {
                  changeLanguage('en');
                  setLanguage('en');
                }}
              >
                <li>English</li>
              </Link>
            </ul>
          </SiderUl>
        )}
      </Box>
    </Box>
  );
};

export default MainDrawer;
