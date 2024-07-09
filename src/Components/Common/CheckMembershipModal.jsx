import React from 'react';
import { Link } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { t } from 'i18next';

const CheckMembershipModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
          <p>{t('service.check_membership_modal_text1')}</p>
          <p>{t('service.check_membership_modal_text2')}</p>
        </ModalBody>

        <ModalFooter>
          <Link to="/membership">
            <Button colorScheme={'purple'}>
              {t('service.check_membership_modal_go_to_membership')}
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CheckMembershipModal;
