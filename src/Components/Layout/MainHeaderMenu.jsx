import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  HStack,
  MenuItem,
  Flex,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { changeLanguage, t } from 'i18next';
import { MdLanguage } from 'react-icons/md';
const MenuHStack = styled(HStack)`
  color: #4a5568;

  > a,
  button,
  div {
    &:hover {
      font-weight: 600;
    }
  }
`;

const LanguageIcon = styled(MdLanguage)`
  padding-right: 5px;
  font-size: 20px;
`;

const MainHeaderMenu = ({ isLogin }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('tinytingel_language'),
  );
  return (
    <MenuHStack spacing={8}>
      <Menu>
        <Link to="/about_us">
          <span>{t('header.about_us')}</span>
        </Link>
      </Menu>
      <Menu isLazy>
        <MenuButton>
          {t('header.service_drawer_title')}
          <ChevronDownIcon />{' '}
        </MenuButton>
        <MenuList>
          <Link to={isLogin ? '/service' : '/sign/login'}>
            <MenuItem>{t('header.service_drawer_ai_writing')}</MenuItem>
          </Link>
          <Link to={isLogin ? '/service/drawing_gel' : '/sign/login'}>
            <MenuItem>{t('header.service_drawer_ai_drawing')}</MenuItem>
          </Link>
          <Link to={isLogin ? '/service/chatting_gel' : '/sign/login'}>
            <MenuItem>{t('header.service_drawer_ai_chatting')}</MenuItem>
          </Link>
          <Link to="/ebook">
            <MenuItem>{t('header.service_drawer_bookstore')}</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Menu>
        <Link to="/membership">
          <span>{t('header.membership')}</span>
        </Link>
      </Menu>
      {/* <Menu>
        <Link to="/newsletter">
          <span>{t('header.newsletter')}</span>
        </Link>
      </Menu> */}
      <Menu isLazy>
        <MenuButton>
          {t('header.support_drawer_title')} <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <Link to="/notice">
            <MenuItem>{t('header.support_drawer_notice')}</MenuItem>
          </Link>
          <Link to="/faq">
            <MenuItem>{t('header.support_drawer_faq')}</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem>{t('header.support_drawer_contact')}</MenuItem>
          </Link>
        </MenuList>
      </Menu>
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
    </MenuHStack>
  );
};

export default MainHeaderMenu;
