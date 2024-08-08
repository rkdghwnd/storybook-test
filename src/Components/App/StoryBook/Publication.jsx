import { Box, Flex, Text } from '@chakra-ui/react';

import { t } from 'i18next';
import OutletContentLayout from '../../Layout/OutletContentLayout';
import ServiceContentHeader from '../../Common/ServiceContentHeader';

const Publication = () => {
  return (
    <OutletContentLayout>
      <Box w="100%">
        <ServiceContentHeader
          title={t('service.storybook_publication_title')}
          label={t('service.storybook_publication_tooltip')}
        />
        <Box
          w="100%"
          maxW="1100px"
          p={{ base: '60px 30px', sm: '60px' }}
          m="0 auto"
        >
          <Flex
            w="100%"
            minH="50vh"
            direction="column"
            justify={'space-between'}
          >
            <Box
              bg="gray.100"
              border="1px"
              borderColor="gray.200"
              p={6}
              borderRadius="md"
              mb={4}
              textAlign="center"
            >
              <Text fontWeight="600" mb="20px">
                {t('service.storybook_publication_text1')}
              </Text>
              <Text fontWeight="bold" mb="5px">
                {t('service.storybook_publication_text2')}
              </Text>
              <Text mb="15px">{t('service.storybook_publicatoin_text3')}</Text>
              <Text mb="5px">
                ✔️{t('service.storybook_publication_text4')} ✔️
              </Text>
              <Text>{t('service.storybook_publication_text5')}</Text>
              <Text>{t('service.storybook_puclication_text6')}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </OutletContentLayout>
  );
};

export default Publication;
