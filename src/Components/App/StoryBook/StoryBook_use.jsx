import { Box, Heading, Grid, Text } from '@chakra-ui/react';
import storybook_use from '/images/storybook_use.png';
import bookEX1 from '/images/bookEX1.webp';
import bookEX2 from '/images/bookEX2.webp';
import bookEX3 from '/images/bookEX3.webp';
import storybookClick from '/images/storybookClick.png';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import BookExample from '../../Common/BookExample';
import OutletContentLayout from '../../Layout/OutletContentLayout';

export default function StoryBook_use() {
  const bookExamples = [
    {
      imageSrc: bookEX1,
      title: "The Little Wizard's Journey",
      description: 'example1',
      altText: 'bookEX1',
    },
    {
      imageSrc: bookEX2,
      title: 'The Enchanted Forest',
      description: 'example2',
      altText: 'bookEX2',
    },
    {
      imageSrc: bookEX3,
      title: 'The Secret Garden of Dragons',
      description: 'example3',
      altText: 'bookEX3',
    },
  ];

  return (
    <OutletContentLayout>
      <Box w="100%">
        <Box w="100%" p={{ base: '60px 30px', sm: '60px' }} m="0 auto">
          <Box maxW="1200px" m="0 auto" p="60px 20px" overflow="hidden">
            <img src={storybook_use} alt="storybook" />
            <Box>
              <Heading
                as="h1"
                size={'lg'}
                textAlign="left"
                m="50px 0"
                color="#666"
              >
                📙 {t('service.storybook_example_title')}
              </Heading>
              <Grid
                templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                gap={10}
              >
                {bookExamples.map((example, index) => (
                  <BookExample key={index} {...example} />
                ))}
              </Grid>
              <Box textAlign="center" mt="40px">
                <Link
                  to="/topic"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    maxHeight: '500px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={storybookClick}
                    alt="Go to Storybook Maker"
                    style={{
                      width: '45%',
                      height: 'auto',
                      maxHeight: 'initial',
                      marginTop: '-10%',
                      marginBottom: '-15%',
                    }}
                  />
                </Link>
                <Text mt="2" fontWeight="600">
                  {t('service.storybook_start')} {'>>'}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </OutletContentLayout>
  );
}
