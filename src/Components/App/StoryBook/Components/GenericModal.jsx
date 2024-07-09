import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export const GenericModal = ({ isOpen, onClose, children, footerButtons }) => (
  <Modal onClose={onClose} size={"sm"} isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        {" "}
        {footerButtons.map((button, index) => (
          <Button key={index} {...button.props}>
            {button.label}
          </Button>
        ))}
      </ModalFooter>
    </ModalContent>
  </Modal>
);
