import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Flex,
} from '@chakra-ui/react';
import styled from 'styled-components';
import TutorialModalBody from './TutorialModalBody';
import { t } from 'i18next';

const ExpiredButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 2px 8px;
  margin-left: 10px;
  cursor: pointer;
`;

export const TutorialCookieModal = ({
  isOpen,
  onClose,
  closeTutorialModal,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isForeverChecked, setIsForeverChecked] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#edf2f7" minW={{ base: '100%', md: '80vh' }}>
        <ModalHeader p="30px 20px 20px">{t('tutorial.title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TutorialModalBody />
        </ModalBody>

        <ModalFooter
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="flex-end"
          gap="15px"
        >
          <Flex>
            <Checkbox
              borderColor={'#000'}
              value={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            >
              {t('tutorial.dont_see_day')}
            </Checkbox>
            <ExpiredButton
              name="cookie_day"
              disabled={isChecked ? false : true}
              onClick={closeTutorialModal}
            >
              {t('common.close')}
            </ExpiredButton>
          </Flex>
          <Flex>
            <Checkbox
              borderColor={'#000'}
              value={isForeverChecked}
              onChange={() => setIsForeverChecked(!isForeverChecked)}
            >
              {t('tutorial.dont_see_forever')}
            </Checkbox>
            <ExpiredButton
              name="cookie_year"
              disabled={isForeverChecked ? false : true}
              onClick={closeTutorialModal}
            >
              {t('common.close')}
            </ExpiredButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
