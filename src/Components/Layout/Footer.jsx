import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { t } from 'i18next';

const FooterContainer = styled.footer`
  padding: 60px 30px 30px;
  color: #666;

  max-width: 1200px;
  margin: 0 auto;
  font-family: NanumSquare;
  line-height: 25px;

  .footer-link {
    transition: all 200ms ease-in;

    &:hover {
      color: #000;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SimpleGrid columns={{ base: '1', sm: '2', md: '4' }} spacing="20px">
        <Box>
          <Heading
            as={'h4'}
            size="md"
            mb="15px"
            color="#aaa"
            fontWeight={'semibold'}
          >
            Company
          </Heading>
          <Box>
            <Text fontSize={'xs'}>{t('footer.company_name')}</Text>
            <Text fontSize={'xs'}>{t('footer.company_ceo')}</Text>
            <Text fontSize={'xs'}>
              {t('footer.company_ecommerce_license_number')}
            </Text>
            <Text fontSize={'xs'}>{t('footer.company_address')}</Text>
            <Text fontSize={'xs'}>
              536, Eonju-ro, Gangnam-gu, Seoul, Republic of Korea
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading
            as={'h4'}
            size="md"
            mb="15px"
            color="#aaa"
            fontWeight={'semibold'}
          >
            Contact
          </Heading>
          <Box>
            <Text fontSize={'xs'}>02-6959-4330</Text>
            <Text fontSize={'xs'}>
              <a href="mailto:support@appplatform.co.kr">
                support@appplatform.co.kr
              </a>
            </Text>
            <Text fontSize={'xs'}>{t('footer.contact_time')}</Text>
          </Box>
        </Box>
        <Box>
          <Heading
            as={'h4'}
            size="md"
            mb="15px"
            color="#aaa"
            fontWeight={'semibold'}
          >
            Social Media
          </Heading>
          <Box>
            <Text fontSize={'xs'}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://facebook.com/ai.tinytingel/"
              >
                Facebook
              </a>
            </Text>
            <Text fontSize={'xs'}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/tinytingel/"
              >
                Instagram
              </a>
            </Text>
            <Text fontSize={'xs'}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/tinytingel"
              >
                Twitter
              </a>
            </Text>
            <Text fontSize={'xs'}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCZA1B4QdPgG0WI3OigXWmdw"
              >
                Youtube
              </a>
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading
            as={'h4'}
            size="md"
            mb="15px"
            color="#aaa"
            fontWeight={'semibold'}
          >
            Terms
          </Heading>
          <Box>
            <Text fontSize={'xs'}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://appplatform.notion.site/8be8232fff0341799cf8c13728610b6b"
              >
                {t('footer.terms_of_service')}
              </a>
            </Text>
            <Text fontSize={'xs'}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.notion.so/appplatform/d99f247a66d141bbbdf227739861a0a2"
              >
                {t('footer.privacy_policy')}
              </a>
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Text mt="20px" fontSize={'sm'} textAlign="right">
        ©Appplatform, Inc All Rights Reserved
      </Text>
    </FooterContainer>
  );
};

export default Footer;
