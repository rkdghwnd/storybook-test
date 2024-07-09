import React, { useState } from 'react';
import { Flex, Heading, Text, Box, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody } from 'Components/Common/Card';
import { t } from 'i18next';

const ChattingelMembership = ({
  setPaymentMap,
  setMembershipName,
  setServiceToken,
  SetPrice,
}) => {
  const [selected, SetSelected] = useState(false);
  const HandleSelect = () => {
    setPaymentMap('CHAT_PAYMENT');
    SetSelected(!selected);
    setMembershipName('채팅젤');
    setServiceToken(100000);
    SetPrice('10000');
  };

  return (
    <Flex w={'100%'} justify="center" maxW="1024px" m="0 auto">
      <Card selected={selected}>
        <CardHeader>
          <Heading
            as="h3"
            size="sm"
            pb="15px"
            borderBottom={'1px solid #ededed'}
          >
            {t('membership.category_chattingel')}
          </Heading>
          <Text fontSize={'2xl'} fontWeight="600" pt="15px">
            10,000{t('membership.currency')}
          </Text>
        </CardHeader>
        <CardBody>
          <Box lineHeight={'30px'}>
            <Flex align="center" gap="5px">
              <CheckCircleIcon color="#7f5ad5" />
              {t('membership.chattingel_benefit1')}{' '}
            </Flex>
            <Flex align="center" gap="5px">
              <CheckCircleIcon color="#7f5ad5" />
              {t('membership.chattingel_benefit2')}
            </Flex>
          </Box>
          <Button
            w="100%"
            colorScheme="purple"
            name="1 10000"
            onClick={HandleSelect}
          >
            {t('membership.select_button')}
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default ChattingelMembership;
