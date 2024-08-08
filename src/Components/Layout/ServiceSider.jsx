import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Tooltip,
  Badge,
  Image,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Children_solid from '../../image/Children_solid.png';
import { t } from 'i18next';
import Pen_solid from '../../image/Pen_solid.png';
import Pen from '../../image/pen.png';

import { Logo, SiderUl } from '../../Styles/CommonStyled';
import useToogle from '../../Hook/useToggle';
import { ServiceSiderLink } from '../Common/ServiceSiderLink';
import { TutorialModal } from '../Common/Tutorial/TutorialModal';

const Sider = styled(Box)`
  /* height: 100vh; */
  /* overflow: auto; */
  padding: 20px 15px;
  width: 100%;
  max-width: 280px;
  border-right: 1px solid #dedede;
  background-color: #fafbfd;
`;

const ButtonBox = styled.div`
  border-bottom: 1px solid #dedede;

  button,
  > a > button {
    width: 100%;
  }
`;

const ServiceSider = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const HandleModalOpen = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <>
      <Sider>
        <Link to="/">
          <Logo>STORYO</Logo>
        </Link>

        <ButtonBox>
          <Link to="/service/tingelbox">
            <Tooltip
              label={t(
                'sidebar.tingelbox_tooltip_label',
              )} /*label="저장한 결과물을 여기에서 확인할 수 있습니다."*/
            >
              <Button
                bg="#3b2478"
                color="#fff"
                m="45px 0 15px"
                colorScheme={'purple'}
              >
                {t('sidebar.tingelbox_button')}
              </Button>
            </Tooltip>
          </Link>
          {/* 버튼 누르면 뜨는 모달 */}
          <Button onClick={HandleModalOpen} mb="15px">
            {t('sidebar.guide_button')}
          </Button>
          {ModalOpen && (
            <TutorialModal isOpen={ModalOpen} onClose={HandleModalOpen} />
          )}
        </ButtonBox>
        <Box p="20px 0" overflowY={'auto'} h={'calc(100vh - 17rem)'}>
          <SiderUl>
            {
              <>
                <h3>
                  <Flex>
                    <Image
                      src={'/images/storybook.png'}
                      h="20px"
                      marginRight="5px"
                    />
                    <ServiceSiderLink
                      link={'/intro'}
                      linkName={t('sidebar.storybook_intro')}
                      isNew={false}
                    />
                  </Flex>
                </h3>

                <h3>
                  <Flex>
                    <Image
                      src={'/images/topic2.png'}
                      h="20px"
                      marginRight="5px"
                    />
                    <ServiceSiderLink
                      link={'/'}
                      linkName={t('sidebar.storybook_topic')}
                      isNew={false}
                    />
                  </Flex>
                </h3>

                <h3>
                  <Flex>
                    <Image
                      src={'/images/topic.png'}
                      h="20px"
                      marginRight="5px"
                    />
                    <ServiceSiderLink
                      link={'/chapter'}
                      linkName={t('sidebar.storybook_chapter')}
                      isNew={false}
                    />
                  </Flex>
                </h3>

                <h3>
                  <Flex>
                    <Image
                      src={'/images/story.png'}
                      h="20px"
                      marginRight="5px"
                    />
                    <ServiceSiderLink
                      link={'/story'}
                      linkName={t('sidebar.storybook_story')}
                      isNew={false}
                    />
                  </Flex>
                </h3>

                <h3>
                  <Flex>
                    <Image
                      src={'/images/title.png'}
                      h="20px"
                      marginRight="5px"
                    />
                    <ServiceSiderLink
                      link={'/title'}
                      linkName={t('sidebar.storybook_title')}
                      isNew={false}
                    />
                  </Flex>
                </h3>

                <h3>
                  <Flex>
                    <Image
                      src={'/images/publish.png'}
                      h="20px"
                      marginRight="5px"
                    />
                    <ServiceSiderLink
                      link={'/publication'}
                      linkName={t('sidebar.storybook_publish')}
                      isNew={false}
                    />
                  </Flex>
                </h3>
              </>
            }
          </SiderUl>
        </Box>
      </Sider>
    </>
  );
};

export default ServiceSider;
