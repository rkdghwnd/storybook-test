import React, { useState } from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody } from 'Components/Common/Card';
import { t } from 'i18next';

const plan_product = {
  1: '라이팅젤 1개월 이용권',
  2: '라이팅젤 3개월 이용권',
  3: '라이팅젤 6개월 이용권',
};

const WritingProduct = ({
  data,
  setPaymentMap,
  setMembershipName,
  setPlanUid,
  SetPrice,
}) => {
  const [selected, setSelected] = useState([]);

  const HandleSelected = (e) => {
    let uid = e.target.name.split(' ')[0];
    let price = e.target.name.split(' ')[1];

    setPaymentMap('WRITING_PAYMENT');
    setSelected(uid);
    setPlanUid(uid);
    SetPrice(price);
    setMembershipName(plan_product[uid]);
  };

  return (
    <SimpleGrid
      w={'100%'}
      maxW="1024px"
      m="0 auto"
      minChildWidth={'180px'}
      templateColumns={{
        base: '1fr',
        md: 'repeat(3, 1fr)',
      }}
      spacing="40px"
    >
      {data &&
        data?.map((item) => (
          <Card key={item.uid} selected={selected.includes(item.uid)}>
            <CardHeader>
              <Heading
                as="h3"
                size="sm"
                pb="15px"
                borderBottom={'1px solid #ededed'}
              >
                {t('membership.category_writingel')} {item.writingelMonth}
                {t('membership.product_title_chunk')}
              </Heading>
              <Text fontSize={'2xl'} fontWeight="600" pt="15px">
                {Number(item.price).toLocaleString()}
                {t('membership.currency')}
              </Text>
            </CardHeader>
            <CardBody>
              <Box lineHeight={'30px'}>
                <Flex align="center" gap="5px">
                  <CheckCircleIcon color="#7f5ad5" />
                  {t('membership.writingel_benefit1')}
                </Flex>
                <Flex align="center" gap="5px">
                  <CheckCircleIcon color="#7f5ad5" /> {item.writingelMonth}
                  {t('membership.writingel_benefit2')}
                </Flex>
              </Box>
              <Button
                w="100%"
                colorScheme="purple"
                name={`${item.uid} ${item.price}`}
                onClick={HandleSelected}
              >
                {t('membership.select_button')}
              </Button>
            </CardBody>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default WritingProduct;
