import React from "react";
import { Modal,  ModalOverlay, ModalContent, ModalHeader, ModalFooter,ModalBody, ModalCloseButton,Button} from "@chakra-ui/react";

import styled from "styled-components";
import TutorialModalBody from "./TutorialModalBody";


const GuideModal = styled(Modal)`
  align-items: center;
`

export const TutorialModal = ({  isOpen, onClose }) => {


  return (
    <GuideModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='#edf2f7' minW={{ base: '100%', md: '60vh' }}>
        <ModalHeader p='30px 20px 20px'>🔮 라이팅젤 사용방법</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TutorialModalBody/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='purple' onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </GuideModal>
  );
};
