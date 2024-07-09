import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Button, Tooltip, Badge } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import like_solid from '../../image/like_solid.png';
import Chat_solid from '../../image/Chat_solid.png';
import Palette_solid from '../../image/Palette_solid.png';
import Pen_solid from '../../image/Pen_solid.png';
import Folders_solid from '../../image/Folders_solid.png';
import Bulb_solid from '../../image/Bulb_solid.png';
import Business_solid from '../../image/Business_solid.png';
import pen from '../../image/pen_.png';
import Children_solid from '../../image/Children_solid.png';
import language from '../../image/language.png';
import { t } from 'i18next';
import { SiderUl } from '../../Styles/CommonStyled';
import useToogle from '../../Hook/useToggle';
import { ServiceSiderLink } from '../Common/ServiceSiderLink';
import { TutorialModal } from '../Common/Tutorial/TutorialModal';

const ServiceSider = () => {
  // const { onOpen, isOpen, onClose } = useDisclosure();

  const [ModalOpen, setModalOpen] = useState(false);
  // const [cookies, setCookie] = useCookies();
  // const [hasCookie, setHasCookie] = useState(true);

  // const getExpiredDayDate = (days) => {
  //   //days = 만료 시기 설정시 필요한 날짜 수
  //   const date = new Date();
  //   date.setDate(date.getDate() + days);
  //   return date;
  // };

  // const getExpiredYearDate = (year) => {
  //   //days = 만료 시기 설정시 필요한 날짜 수
  //   const date = new Date();
  //   date.setDate(date.getFullYear() + year);
  //   return date;
  // };

  // const closeTutorialModal = (e) => {
  //   if (!cookies) return;

  //   const expiry = e.target.name === 'cookie_day' ? getExpiredDayDate(1) : getExpiredYearDate(10);

  //   const options = {
  //     path: '/',
  //     expires: expiry,
  //   };
  //   setCookie('Modal_Expiry', true, options);
  //   onClose();
  // };

  const HandleModalOpen = () => {
    setModalOpen(!ModalOpen);
  };

  const [toggle1, setToggle1] = useToogle();
  const [toggle2, setToggle2] = useToogle();
  const [toggle3, setToggle3] = useToogle();
  const [toggle4, setToggle4] = useToogle();
  const [toggle5, setToggle5] = useToogle();
  const [toggle6, setToggle6] = useToogle();
  const [toggle7, setToggle7] = useToogle();
  const [toggle8, setToggle8] = useToogle();

  // useEffect(() => {
  //   if (cookies['Modal_Expiry']) return;
  //   setHasCookie(false);
  //   onOpen();
  // }, []);

  return (
    <Sider>
      {/* 들어가자마자 바로 뜨는 모달 */}
      {/* {isOpen && !hasCookie && (
        <TutorialCookieModal
          isOpen={isOpen}
          closeTutorialModal={closeTutorialModal}
          onClose={onClose}
          onOpen={onOpen}
        />
      )} */}
      <Link to="/service">
        <picture>
          <source
            srcSet="/images/logo.webp"
            type="image/webp"
            className="logo-service-headerr"
          />
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo-service-header"
          />
        </picture>
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
          <Link to="/service/chatting_gel">
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={Chat_solid}
                alt="Chat Icon"
                style={{ marginRight: '10px', width: '23px', height: '23px' }}
              />
              {t('sidebar.chattingel')}
            </li>
          </Link>

          <Link to="/service/drawing_gel">
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={Palette_solid}
                alt="Brush Icon"
                style={{ marginRight: '10px', width: '24px', height: '24px' }}
              />
              {t('sidebar.drawingel')}
            </li>
          </Link>
        </SiderUl>
        <SiderUl>
          <li
            onClick={setToggle1}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={like_solid}
              alt="like Icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.popular')} <ChevronDownIcon />
          </li>
          {toggle1 && (
            <ul>
              <ServiceSiderLink
                link={'/service/holidayAnnouncements'}
                linkName={t('sidebar.office_holiday_announcements')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/lyrics'}
                linkName={t('sidebar.writing_lyrics')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/MeetingSummary'}
                linkName={t('sidebar.office_meeting_summary')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/EmailSummary'}
                linkName={t('sidebar.business_email_summary')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>

        <SiderUl>
          <li
            onClick={setToggle7}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={Children_solid}
              alt="Children icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.storybook')} <ChevronDownIcon />{' '}
            <Badge ml="3px" bg="#ffc34e">
              new<span className="Twinkle-ani">❗️</span>
            </Badge>
          </li>
          {toggle7 && (
            <>
              <h3>
                <ServiceSiderLink
                  link={'/service/storybook'}
                  linkName={t('sidebar.storybook_intro')}
                  isNew={false}
                />
              </h3>
              <ul>
                <ServiceSiderLink
                  link={'/service/storybook/topic'}
                  linkName={t('sidebar.storybook_topic')}
                  isNew={false}
                />

                <ServiceSiderLink
                  link={'/service/storybook/chapter'}
                  linkName={t('sidebar.storybook_chapter')}
                  isNew={false}
                />

                <ServiceSiderLink
                  link={'/service/storybook/story'}
                  linkName={t('sidebar.storybook_story')}
                  isNew={false}
                />

                {/* <ServiceSiderLink link={'/service/storybook/proofread'} linkName={'- 스토리 교정하기'} isNew={false} /> */}

                <ServiceSiderLink
                  link={'/service/storybook/title'}
                  linkName={t('sidebar.storybook_title')}
                  isNew={false}
                />

                <ServiceSiderLink
                  link={'/service/storybook/publication'}
                  linkName={t('sidebar.storybook_publish')}
                  isNew={false}
                />
              </ul>
            </>
          )}
        </SiderUl>

        <SiderUl>
          <li
            onClick={setToggle2}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={Pen_solid}
              alt="Pen Icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.writing')} <ChevronDownIcon />
          </li>
          {toggle2 && (
            <ul>
              <ServiceSiderLink
                link={'/service/mbti_loveletter'}
                linkName={t('sidebar.writing_mbti_loveletter')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/firstsentence'}
                linkName={t('sidebar.writing_first_sentence')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/material'}
                linkName={t('sidebar.writing_material')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/storysrc'}
                linkName={t('sidebar.writing_story_source')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/fantasy'}
                linkName={t('sidebar.writing_fantasy_worldview')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/lyrics'}
                linkName={t('sidebar.writing_lyrics')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/diary'}
                linkName={t('sidebar.writing_diary')}
                isNew={false}
              />

              <h3>{t('sidebar.writing_novel')}</h3>

              <ServiceSiderLink
                link={'/service/novel/intro'}
                linkName={t('sidebar.writing_novel_intro')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/novel/follow'}
                linkName={t('sidebar.writing_novel_continue')}
                isNew={false}
              />

              <h3>동화 쓰기</h3>

              <ServiceSiderLink
                link={'/service/fairy/intro'}
                linkName={t('sidebar.writing_fairytail_intro')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/fairy/follow'}
                linkName={t('sidebar.writing_fairytail_continue')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/nextsentence'}
                linkName={t('sidebar.writing_next_sentence')}
                isNew={false}
              />
              <ServiceSiderLink
                link={'/service/coverletter'}
                linkName={t('sidebar.writing_coverletter')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>

        <SiderUl>
          <li
            onClick={setToggle3}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={Bulb_solid}
              alt="Pen Icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.marketing')} <ChevronDownIcon />
          </li>
          {toggle3 && (
            <ul>
              <ServiceSiderLink
                link={'/service/letter_edit'}
                linkName={t('sidebar.marketing_newletter_editor')}
                isNew={false}
              />

              <h3>{t('sidebar.marketing_blog_writing')}</h3>

              <ServiceSiderLink
                link={'/service/blog/idea'}
                linkName={t('sidebar.marketing_blog_idea')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/blog/outline'}
                linkName={t('sidebar.marketing_blog_outline')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/blog/intro'}
                linkName={t('sidebar.marketing_blog_intro')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/blog/follow'}
                linkName={t('sidebar.marketing_blog_continue')}
                isNew={false}
              />

              <h3>{t('sidebar.marketing_product_introduce')}</h3>

              <ServiceSiderLink
                link={'/service/product_intro'}
                linkName={t('sidebar.marketing_product_intro')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/product_review'}
                linkName={t('sidebar.marketing_product_review')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>

        <SiderUl>
          <li
            onClick={setToggle4}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={Business_solid}
              alt="Business Icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.business')} <ChevronDownIcon />
          </li>
          {toggle4 && (
            <ul>
              <ServiceSiderLink
                link={'/service/discussion'}
                linkName={t('sidebar.business_discussion')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/email'}
                linkName={t('sidebar.business_email_writing')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/EmailSummary'}
                linkName={t('sidebar.business_email_summary')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/business'}
                linkName={t('sidebar.business_idea')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/resume'}
                linkName={t('sidebar.business_resume')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>
        <SiderUl>
          <li
            onClick={setToggle5}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={Folders_solid}
              alt="Office icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.office')} <ChevronDownIcon />
          </li>
          {toggle5 && (
            <ul>
              <ServiceSiderLink
                link={'/service/monthlyReport'}
                linkName={t('sidebar.office_monthly_report')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/MeetingSummary'}
                linkName={t('sidebar.office_meeting_summary')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/holidayAnnouncements'}
                linkName={t('sidebar.office_holiday_announcements')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/formalDocumentation'}
                linkName={t('sidebar.office_formal_documentation')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/proposalCreation'}
                linkName={t('sidebar.office_proposal_creation')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>
        <SiderUl>
          <li
            onClick={setToggle6}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={pen}
              alt="Pen Icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.writing_assistant')} <ChevronDownIcon />
          </li>
          {toggle6 && (
            <ul>
              <ServiceSiderLink
                link={'/service/writingSkill'}
                linkName={t('sidebar.writing_assistant_writing_skill')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/spellChecker'}
                linkName={t('sidebar.writing_assistant_spell_checker')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/vocabularCorrection'}
                linkName={t('sidebar.writing_assistant_vocabular_correction')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/dialectConversion'}
                linkName={t('sidebar.writing_assitant_dialect_conversion')}
                isNew={false}
              />

              <ServiceSiderLink
                link={'/service/objectiveSubjective'}
                linkName={t('sidebar.writing_assistant_objective_subjective')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>
        <SiderUl>
          <li
            onClick={setToggle8}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={language}
              alt="language Icon"
              style={{ marginRight: '10px', width: '24px', height: '24px' }}
            />
            {t('sidebar.foreign_language')}외국어 <ChevronDownIcon />
          </li>
          {toggle8 && (
            <ul>
              <ServiceSiderLink
                link={'/service/wordMaster'}
                linkName={t('sidebar.foreign_language_word_master')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>
      </Box>
    </Sider>
  );
};

export default ServiceSider;

const Sider = styled(Box)`
  height: 100vh;
  //overflow: auto;

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
