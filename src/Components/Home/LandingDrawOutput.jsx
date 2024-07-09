import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Button,
  Skeleton,
} from '@chakra-ui/react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

const imgObj = [
  {
    id: 1,
    imgUrl: 'images/draw_image1.png',
  },
  {
    id: 2,
    imgUrl: 'images/draw_image3.png',
  },
  {
    id: 3,
    imgUrl: 'images/draw_image4.png',
  },
  {
    id: 4,
    imgUrl: 'images/draw_image5.png',
  },
];
const LandingDrawOutput = ({ isLogin }) => {
  return (
    <Box
      p={{ base: '2em', md: '5em 3em' }}
      maxW="1200px"
      m="0 auto"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Flex
        justify={'center'}
        gap="30px"
        direction={{ base: 'column', xl: 'row-reverse' }}
      >
        <Box wordBreak="keep-all">
          <Box>
            <Heading as="h4" size="lg" mb="10px" wordBreak="keep-all">
              {t('home.section4_title')}🎨
            </Heading>
            <Text fontWeight={600} fontSize="lg">
              {t('home.section4_description')}
            </Text>
          </Box>
          <Text mt="30px">{t('home.section4_p1')}</Text>
          <Text mt="8px">{t('home.section4_p2')}</Text>
          <Box mt="30px">
            <Link to={isLogin ? '/service/drawing_gel' : '/sign/login'}>
              <Button colorScheme={'green'} fontSize="lg">
                {t('home.section4_go_to_drawingel')}
              </Button>
            </Link>
          </Box>
        </Box>
        <Box>
          <Image
            fallback={<Skeleton height="500px" />}
            maxW={{ xl: '600px' }}
            src={'images/draw_image2.png'}
            alt={`img_draw`}
          />
        </Box>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={6} mt="50px">
        {imgObj.map((item) => (
          <Image
            fallback={<Skeleton height="200px" />}
            key={item.id}
            src={`${item.imgUrl}`}
            alt={`img_draw_${item.id}`}
          />
        ))}
      </SimpleGrid>
      <Text fontSize={'sm'} mt="10px">
        {t('home.section4_annotation')}
      </Text>
    </Box>
  );
};

export default LandingDrawOutput;
