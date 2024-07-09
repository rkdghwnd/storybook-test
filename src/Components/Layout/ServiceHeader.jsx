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
import { changeLanguage, t } from 'i18next';
import styled from 'styled-components';
import { MdLanguage } from 'react-icons/md';

const LanguageIcon = styled(MdLanguage)`
  padding-right: 5px;
  font-size: 20px;
`;

const ServiceHeader = ({ User }) => {
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const [isOpen, setOpen] = useState(false);

  const [language, setLanguage] = useState(
    localStorage.getItem('tinytingel_language'),
  );

  const HandleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Flex
      align="center"
      justify={{ base: 'space-between', lg: 'flex-end' }}
      p="10px 20px"
      borderBottom={'1px solid #eee'}
    >
      {isLargerThan960 ? null : (
        <Box>
          <HamburgerIcon w={6} h={6} cursor="pointer" onClick={HandleMenu} />
          {isOpen && <ServiceDrawer onClose={HandleMenu} User={User} />}
        </Box>
      )}
      <Flex align="center" gap="20px">
        <Link to="/service/storybook/topic">
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

        <Link to="/service/mypage">
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
export default ServiceHeader;
