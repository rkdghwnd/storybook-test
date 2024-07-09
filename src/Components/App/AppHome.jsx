import React from 'react';
import { Badge, Box, Flex, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ServiceThumb } from 'Components/Common/ServiceThumb';
import { t } from 'i18next';

const Card = styled(Flex)`
  border-radius: 10px;
  cursor: pointer;
  > picture > img,
  source {
    height: 100%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:hover {
    font-weight: 600;
  }
`;

const AppHome = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');
  const HandleDetailNavi = (link, detail) => {
    if (!isLogin) {
      navigate(`${detail}`);
    }
    if (isLogin) {
      navigate(`${link}`);
    }
  };
  return (
    <>
      <Box
        direction="column"
        align="center"
        justify="center"
        gap="50px"
        p="30px"
        textAlign={'center'}
        className="thumbGrid"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Box maxWidth="1200px" margin="0 auto">
          <SimpleGrid
            w={'100%'}
            minChildWidth="220px"
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            spacing="40px"
            p={{ base: '5em 3em', sm: '8em 5em' }}
            // ref={el}
          >
            {ServiceThumb.map((item) => (
              <Card
                key={item.title}
                w="full"
                alignItems="center"
                justifyContent="center"
                direction="column"
                boxShadow="6px 6px 4px 0px #ddd"
                border="1px solid #444"
                onClick={() => {
                  HandleDetailNavi(item.link, item.detail);
                }}
              >
                <picture>
                  <source srcSet={item.imageWebp} type="image/webp" />
                  <img src={item.imagePng} alt={item.title} />
                </picture>
                <Box
                  bg="#fff"
                  w="100%"
                  p="8px"
                  fontSize={'sm'}
                  textAlign="center"
                  borderRadius="10px"
                >
                  <Badge colorScheme="white" color="gray.500">
                    {/* {item.discription} */}
                    {/*  */}
                    {t(`service.${item.keyName}_slogan`)}
                  </Badge>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default AppHome;
