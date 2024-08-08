import { Box, GridItem, Text } from '@chakra-ui/react';
import { t } from 'i18next';
import React from 'react';

const BookExample = ({ imageSrc, title, description, altText }) => (
  <GridItem>
    <Box textAlign="center">
      <img
        src={imageSrc}
        style={{
          width: '100%',
          maxWidth: '270px',
          height: 'auto',
          margin: '0 auto',
        }}
        alt={altText}
      />
      <Text fontWeight="bold" mt={4}>
        {title}
      </Text>
      <Text>{t(`service.storybook_${description}_description`)}</Text>
    </Box>
  </GridItem>
);

export default BookExample;
