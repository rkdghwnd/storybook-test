import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

const LoginCheckModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Heading as="h3" fontSize={'lg'}>
            ✏️ {t('common.login_check_modal_heading')}
          </Heading>
          <Box mt="20px">
            <Text>{t('common.login_check_modal_description1')}</Text>
            <Text>{t('common.login_check_modal_description2')}</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Link to="/sign/singup">
            <Button colorScheme="blue" mr={3}>
              {t('common.signup')}
            </Button>
          </Link>
          <Link to="/sign/login">
            <Button colorScheme="purple" mr={3}>
              {t('common.login')}
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginCheckModal;
