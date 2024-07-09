import { Button, useToast } from '@chakra-ui/react';
import { t } from 'i18next';
import { throttle } from '../../../../utill/throttle';

const NextChapterButton = ({ isBlank, create }) => {
  const Toast = useToast();

  const handleChapterCreation = throttle(() => {
    if (isBlank) {
      Toast({
        position: 'top-right',
        title: t('error.empty_title'),
        description: t('error.empty_description'),
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } else {
      create();
    }
  }, 3000);

  return (
    <Button isDisabled={isBlank} onClick={handleChapterCreation}>
      {t('common.next_chapter_creation')}
    </Button>
  );
};

export default NextChapterButton;
