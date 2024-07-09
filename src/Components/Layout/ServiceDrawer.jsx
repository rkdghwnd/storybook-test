import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Button, Avatar, Badge } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
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
import { Logout, SiderUl } from '../../Styles/CommonStyled';
import { TutorialModal } from '../Common/Tutorial/TutorialModal';
import { ServiceSiderLink } from '../Common/ServiceSiderLink';
import useToogle from '../../Hook/useToggle';

const ButtonBox = styled.div`
  margin: 15px 0;

  button,
  > a > button {
    width: 100%;
  }
`;

const ServiceDrawer = ({ onClose, User }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [toggle1, setToggle1] = useToogle();
  const [toggle2, setToggle2] = useToogle();
  const [toggle3, setToggle3] = useToogle();
  const [toggle4, setToggle4] = useToogle();
  const [toggle5, setToggle5] = useToogle();
  const [toggle6, setToggle6] = useToogle();
  const [toggle7, setToggle7] = useToogle();
  const [toggle8, setToggle8] = useToogle();

  const animation = {
    hidden: { right: '-300px' },
    show: { right: '0px' },
  };

  return (
    <Box
      as={motion.div}
      boxShadow="none"
      bg="#fff"
      border="1px solid #e3e3e3"
      borderRight="0"
      p="1rem 1rem 2rem 1rem"
      zIndex={15}
      position="absolute"
      right={0}
      top={0}
      w={{ base: 'calc(100% - 50px)', sm: '320px' }}
      minH="100vh"
      variants={animation}
      initial="hidden"
      animate="show"
      transition="200ms linear"
      // not work: transition={{ transition: "0.5", ease: "linear" }}
    >
      <Flex justify={'flex-end'}>
        <CloseButton onClick={onClose} />
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        borderBottom="1px solid #ededed"
        p="15px 0"
        gap="15px"
      >
        <Flex align="center" gap="10px">
          <Link to="/service/mypage">
            <Avatar
              bg="#fff"
              w="50px"
              h="50px"
              border="1px solid #444"
              name="username"
              src={
                User && User?.userImage !== 'default'
                  ? User?.userImage
                  : '/images/profileImage.png'
              }
              alt="avatar"
            />
          </Link>
          <p>{User && User.userName}</p>
        </Flex>
        <Logout onClick={SignOut}>{t('common.logout')}</Logout>
      </Flex>

      <Box>
        <ButtonBox>
          <Link to="/service/tingelbox" onClick={onClose}>
            <Button bg="#3b2478" color="#fff" mb="15px">
              {t('sidebar.tingelbox_button')}
            </Button>
          </Link>
          <Button onClick={() => setModalOpen(!modalOpen)} mb="15px">
            {t('sidebar.guide_button')}
          </Button>
          {modalOpen && (
            <TutorialModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(!modalOpen)}
              onOpen={() => setModalOpen(!modalOpen)}
            />
          )}
        </ButtonBox>
        <SiderUl>
          <Link to="/service/chatting_gel" onClick={onClose}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={Chat_solid}
                alt="Chat Icon"
                style={{ marginRight: '10px', width: '23px', height: '23px' }}
              />
              {t('sidebar.chattingel')}{' '}
            </li>
          </Link>

          <Link to="/service/drawing_gel" onClick={onClose}>
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
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/lyrics'}
                linkName={t('sidebar.writing_lyrics')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/MeetingSummary'}
                linkName={t('sidebar.office_meeting_summary')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/EmailSummary'}
                linkName={t('sidebar.business_email_summary')}
                isNew={false}
                onClose={onClose}
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
                  onClose={onClose}
                />
              </h3>
              <ul>
                <ServiceSiderLink
                  link={'/service/storybook/topic'}
                  linkName={t('sidebar.storybook_topic')}
                  isNew={false}
                  onClose={onClose}
                />

                <ServiceSiderLink
                  link={'/service/storybook/chapter'}
                  linkName={t('sidebar.storybook_chapter')}
                  isNew={false}
                  onClose={onClose}
                />

                <ServiceSiderLink
                  link={'/service/storybook/story'}
                  linkName={t('sidebar.storybook_story')}
                  isNew={false}
                  onClose={onClose}
                />

                {/* <ServiceSiderLink link={'/service/storybook/proofread'} linkName={' - 스토리 교정하기'} isNew={false} onClose={onClose}/> */}

                <ServiceSiderLink
                  link={'/service/storybook/title'}
                  linkName={t('sidebar.storybook_title')}
                  isNew={false}
                  onClose={onClose}
                />

                <ServiceSiderLink
                  link={'/service/storybook/publication'}
                  linkName={t('sidebar.storybook_publish')}
                  isNew={false}
                  onClose={onClose}
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
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/firstsentence'}
                linkName={t('sidebar.writing_first_sentence')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/material'}
                linkName={t('sidebar.writing_material')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/storysrc'}
                linkName={t('sidebar.writing_story_source')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/fantasy'}
                linkName={t('sidebar.writing_fantasy_worldview')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/lyrics'}
                linkName={t('sidebar.writing_lyrics')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/diary'}
                linkName={t('sidebar.writing_diary')}
                isNew={false}
                onClose={onClose}
              />
              <h3>{t('sidebar.writing_novel')}</h3>

              <ServiceSiderLink
                link={'/service/novel/intro'}
                linkName={t('sidebar.writing_novel_intro')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/novel/follow'}
                linkName={t('sidebar.writing_novel_continue')}
                isNew={false}
                onClose={onClose}
              />

              <h3>동화 쓰기</h3>

              <ServiceSiderLink
                link={'/service/fairy/intro'}
                linkName={t('sidebar.writing_fairytail_intro')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/fairy/follow'}
                linkName={t('sidebar.writing_fairytail_continue')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/nextsentence'}
                linkName={t('sidebar.writing_next_sentence')}
                isNew={false}
                onClose={onClose}
              />
              <ServiceSiderLink
                link={'/service/coverletter'}
                linkName={t('sidebar.writing_coverletter')}
                isNew={false}
                onClose={onClose}
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
                // linkName={'뉴스레터 에디터'}
                linkName={t('sidebar.marketing_newletter_editor')}
                isNew={false}
                onClose={onClose}
              />

              <h3>{t('sidebar.marketing_blog_writing')}</h3>

              <ServiceSiderLink
                link={'/service/blog/idea'}
                linkName={t('sidebar.marketing_blog_idea')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/blog/outline'}
                linkName={t('sidebar.marketing_blog_outline')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/blog/intro'}
                linkName={t('sidebar.marketing_blog_intro')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/blog/follow'}
                linkName={t('sidebar.marketing_blog_continue')}
                isNew={false}
                onClose={onClose}
              />

              <h3>{t('sidebar.marketing_product_introduce')}</h3>

              <ServiceSiderLink
                link={'/service/product_intro'}
                linkName={t('sidebar.marketing_product_intro')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/product_review'}
                linkName={t('sidebar.marketing_product_review')}
                isNew={false}
                onClose={onClose}
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
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/email'}
                linkName={t('sidebar.business_email_writing')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/EmailSummary'}
                linkName={t('sidebar.business_email_summary')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/business'}
                linkName={t('sidebar.business_idea')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/resume'}
                linkName={t('sidebar.business_resume')}
                isNew={false}
                onClose={onClose}
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
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/MeetingSummary'}
                linkName={t('sidebar.office_meeting_summary')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/holidayAnnouncements'}
                linkName={t('sidebar.office_holiday_announcements')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/formalDocumentation'}
                linkName={t('sidebar.office_formal_documentation')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/proposalCreation'}
                linkName={t('sidebar.office_proposal_creation')}
                isNew={false}
                onClose={onClose}
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
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/spellChecker'}
                linkName={t('sidebar.writing_assistant_spell_checker')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/vocabularCorrection'}
                linkName={t('sidebar.writing_assistant_vocabular_correction')}
                isNew={false}
                onClose={onClose}
              />

              <ServiceSiderLink
                link={'/service/dialectConversion'}
                linkName={t('sidebar.writing_assitant_dialect_conversion')}
                isNew={false}
                onClose={onClose}
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
            {t('sidebar.foreign_language')} <ChevronDownIcon />
          </li>
          {toggle8 && (
            <ul>
              <ServiceSiderLink
                link={'/service/writingSkill'}
                linkName={t('sidebar.foreign_language_word_master')}
                isNew={false}
              />
            </ul>
          )}
        </SiderUl>
      </Box>
    </Box>
  );
};

export default ServiceDrawer;
