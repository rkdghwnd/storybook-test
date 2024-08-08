import {
  Box,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { DownloadIcon, CheckCircleIcon, RepeatIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { outputForDrawing, ProfileState } from '../../Config/recoil';
import { DrawLoading } from './DrawLoding';
import { t } from 'i18next';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { SERVER_URL } from '../../Config/server';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

const DrawModalBody = styled(ModalBody)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  text-align: center;
`;

export const DrawModal = ({ isOpen, onClose, prompt, outputKr, outputEng }) => {
  const [isLoading, setLoading] = useState();
  const [drawOutput, setDrawOutput] = useState('');
  const [chooseImg, setChooseImg] = useState('');

  const navigate = useNavigate();
  const profile = useRecoilValue(ProfileState);
  const token = localStorage.getItem('token');
  const Toast = useToast();

  const setRecoilForDrawing = useSetRecoilState(outputForDrawing);
  const RecoilForDrawing = useRecoilValue(outputForDrawing);

  const HandleDrawing = useCallback(async () => {
    if (!profile.user.draw_count || profile.user.draw_count === 0) {
      Toast({
        position: 'top-right',
        title: t('error.not_enough_token_title'),
        description: t('error.not_ebough_token_description'),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    if (profile.user.draw_count > 0) {
      setLoading(true);
      const config = {
        method: 'post',
        url: `${SERVER_URL}/user/prompt/drawingel`,
        headers: { Authorization: 'Bearer ' + token },
        data: {
          prompt: prompt,
          size: '1024x1024',
          n: 1,
          response_format: 'b64_json',
        },
      };
      await axios(config)
        .then(async (response) => {
          const pictures = response.data.data.data;
          setDrawOutput(pictures);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
          let errorDataMessage = `${error}`.includes('undefined');
          if (errorDataMessage) {
            Toast({
              position: 'top-right',
              title: 'Fail',
              description: t('error.not_draw_description'),
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
          const errorStatus = error.response.status;
          const errorResMessage = error.response.data.message;

          Toast({
            position: 'top-right',
            title: 'Fail',
            description: `[${errorStatus}] ${errorResMessage}`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [prompt, token]);

  const HandleChooseImg = (item) => {
    setChooseImg((prev) => {
      return item;
    });
  };

  const MakeImageFile = (imageUrl) => {
    const url = `data:image/png;base64,${imageUrl}`;
    saveAs(url, 'draw_image.png');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {drawOutput && (
            <Text fontSize={'lg'} fontWeight={600} mb="20px">
              {t('service.draw_modal_purpose_download')}
            </Text>
          )}
          <ModalCloseButton />
        </ModalHeader>
        {isLoading ? (
          <DrawLoading />
        ) : (
          <Box>
            <DrawModalBody>
              {drawOutput ? (
                <Box>
                  <Box>
                    <Grid templateColumns={'repeat(1, 1fr)'} gap={6}>
                      {drawOutput &&
                        drawOutput.map((item) => (
                          <GridItem
                            key={item.b64_json}
                            onClick={() => HandleChooseImg(item.b64_json)}
                          >
                            <img
                              src={`data:image/png;base64,${item.b64_json}`}
                              alt="drawing"
                              onLoad={() => setLoading(false)}
                              className={
                                chooseImg === item.b64_json
                                  ? 'modal-draw active'
                                  : 'modal-draw'
                              }
                            />
                            <Flex
                              w="100%"
                              mt="5px"
                              bg="#fff"
                              color="#000"
                              align="center"
                              justify={'space-between'}
                              gap="5px"
                            >
                              <CheckCircleIcon
                                color={
                                  chooseImg === item.b64_json
                                    ? '#63d959'
                                    : 'gray'
                                }
                                w={6}
                                h={6}
                              />
                              <Box>
                                <RepeatIcon
                                  w={6}
                                  h={6}
                                  cursor={'pointer'}
                                  _hover={{ color: '#63d959' }}
                                  mr="10px"
                                  onClick={HandleDrawing}
                                />
                                <DownloadIcon
                                  w={6}
                                  h={6}
                                  cursor={'pointer'}
                                  _hover={{ color: '#63d959' }}
                                  onClick={() => MakeImageFile(item.b64_json)}
                                />
                              </Box>
                            </Flex>
                          </GridItem>
                        ))}
                    </Grid>
                  </Box>
                </Box>
              ) : (
                <Text fontSize={'2xl'} p="20px 0">
                  {t('service.draw_modal_purpose_paint_chunk1')} <br />{' '}
                  {t('service.draw_modal_purpose_paint_chunk2')}
                </Text>
              )}
            </DrawModalBody>

            <ModalFooter p={'1.5rem 1rem'}>
              <Flex
                direciton={{ base: 'column', md: 'row' }}
                w="100%"
                justify={'center'}
                align={'center'}
                gap="5px"
                mt="10px"
              >
                {
                  <Button colorScheme="purple" onClick={HandleDrawing}>
                    {t('service.draw_modal_paint')}
                  </Button>
                }
                <Button
                  colorScheme="yellow"
                  ml={3}
                  onClick={() => navigate('/membership')}
                >
                  {t('service.draw_modal_membership_subscribe')} 👉
                </Button>
              </Flex>
            </ModalFooter>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
};
