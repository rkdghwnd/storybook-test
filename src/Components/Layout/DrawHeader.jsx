import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  useMediaQuery,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ServiceDrawer from './ServiceDrawer';
import { useNavigate } from 'react-router-dom';
import { changeLanguage, t } from 'i18next';
import styled from 'styled-components';
import { MdLanguage } from 'react-icons/md';

const LanguageIcon = styled(MdLanguage)`
  padding-right: 5px;
  font-size: 20px;
`;

const DrawHeader = ({ User }) => {
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const [isOpen, setOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem('tinytingel_language'),
  );

  const HandleMenu = () => {
    setOpen(!isOpen);
  };
  const navigate = useNavigate();

  return (
    <Flex
      align="center"
      justify={'space-between'}
      p="10px 20px"
      borderBottom={'1px solid #eee'}
    >
      {isLargerThan960 ? (
        <picture>
          <source
            srcSet="/images/logo.webp"
            type="image/webp"
            className="logo-header"
            onClick={() => navigate('/service')}
          />
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo-header"
            onClick={() => navigate('/service')}
          />
        </picture>
      ) : (
        <Box>
          <HamburgerIcon w={6} h={6} cursor="pointer" onClick={HandleMenu} />
          {isOpen && <ServiceDrawer onClose={HandleMenu} User={User} />}
        </Box>
      )}
      <Flex align="center" gap="20px">
        <Link to="/">
          <Button>{t('header.main_home')}</Button>
        </Link>

        <Menu>
          <MenuButton>
            <Flex alignItems={'center'}>
              <LanguageIcon />
              <span>{language === 'ko' ? '한국어' : 'English'}</span>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList>
            <Link
              onClick={() => {
                changeLanguage('ko');
                setLanguage('ko');
              }}
            >
              <MenuItem>한국어</MenuItem>
            </Link>
            <Link
              onClick={() => {
                changeLanguage('en');
                setLanguage('en');
              }}
            >
              <MenuItem>English</MenuItem>
            </Link>
          </MenuList>
        </Menu>

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
      </Flex>
    </Flex>
  );
};

export default DrawHeader;
