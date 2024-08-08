import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, useMediaQuery, Avatar } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import MainHeaderMenu from './MainHeaderMenu';
import MainDrawer from './MainDrawer';
import { t } from 'i18next';

const MainHeader = ({ isLogin }) => {
  const User = JSON.parse(localStorage.getItem('User'));
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const HandleMenu = () => {
    setOpen(!isOpen);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  });

  return (
    <Flex
      align="center"
      justify={'space-between'}
      p="15px 20px"
      backgroundColor={'#fff'}
      borderBottom={scrollPosition > 20 ? '1px solid #eee' : 'none'}
      position="sticky"
      top="0"
      zIndex={'10'}
    >
      <Link to="/">
        <picture>
          <source
            srcSet="/images/logo.webp"
            type="image/webp"
            className="logo-header"
          />
          <img src="/images/logo.png" alt="logo" className="logo-header" />
        </picture>
      </Link>
      {isLargerThan768 ? (
        <Flex gap="35px">
          {/* <MainHeaderMenu isLogin={isLogin} /> */}
          {isLogin ? (
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
          ) : (
            <Link to="sign/login">
              <Button>{t('common.login')}</Button>
            </Link>
          )}
        </Flex>
      ) : (
        <Box>
          <HamburgerIcon w={6} h={6} cursor="pointer" onClick={HandleMenu} />
          {isOpen && (
            <MainDrawer isLogin={isLogin} onClose={HandleMenu} User={User} />
          )}
        </Box>
      )}
    </Flex>
  );
};

export default MainHeader;
