import React from "react";
import { Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter, ModalBody, ModalCloseButton, Heading } from "@chakra-ui/react";
import DrawPdf from "Components/App/Drawinggel/DrawPdf";
import { PDFViewer } from "@react-pdf/renderer";

const DownloadModal = ({onClose, isOpen, SavePdf, MakeImgFile}) => {
    return(
        <Modal onClose={onClose} size={"sm"} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Download</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <PDFViewer>
                        <DrawPdf/>
                        </PDFViewer>
                        <Heading
                          as='h6'
                          fontSize={"md"}
                          p='30px 15px'
                          textAlign={"center"}
                        >
                          선택한 결과물을 저장하시겠습니까?
                        </Heading>
                      </ModalBody>
                      <ModalFooter 
                      justifyContent={"center"}
                      gap='10px'
                       >
                        <Button colorScheme={"purple"} onClick={MakeImgFile}>
                          이미지 저장
                        </Button>
                        <Button onClick={SavePdf} colorScheme={"yellow"}>
                          글+그림 모두 저장(PDF)
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
    )
}

export default DownloadModal;