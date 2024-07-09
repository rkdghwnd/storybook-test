//recoil state 관련

import { atom, selector } from 'recoil';

export const ProfileState = atom({
  key: 'profileState',
  default: {
    user: '',
    membership: '',
  },
});

export const ProfileUser = selector({
  key: 'ProfileUser',
  get: ({ get }) => {
    const profile = get(ProfileState);
    const user = profile.user;
    return user;
  },
});

export const ProfileMembership = selector({
  key: 'ProfileMembership',
  get: ({ get }) => {
    const profile = get(ProfileState);
    const membership = profile.membership;
    return membership;
  },
});

//블로그 아이디어 -> 개요/도입부

export const BlogIdeaState = atom({
  key: 'BlogIdeaState',
  default: '',
});

//블로그 도입부 -> 이어쓰기
export const BlogIntroState = atom({
  key: 'BlogIntroState',
  default: '',
});

//소설 도입부 -> 이어쓰기
export const NovelIntroState = atom({
  key: 'NovelIntroState',
  default: '',
});

//동화 도입부 -> 이어쓰기

export const FairyIntroState = atom({
  key: 'FairyIntroState',
  default: '',
});

//첫문장 -> 뒷문장

export const FirstSentenceState = atom({
  key: 'firstSentenceState',
  default: '',
});

//소설 패키지 + 1:1 릴레이

export const outputFollowState = atom({
  key: 'outputFollowState',
  default: {
    outputKr: '',
    outputEng: '',
  },
});

export const FollowSettingState = atom({
  key: 'FollowSettingState',
  default: {
    Main_character: '',
    Place: '',
    Time: '',
    Main_Events: '',
  },
});
export const FollowSelectView = atom({
  key: 'FollowSelectView',
  default: 'default',
});

export const FollowSelectStyle = atom({
  key: 'FollowSelectStyle',
  default: 'default',
});

//뉴스레터 에디터

export const NewsLetterEditHome = atom({
  key: 'NewsLetterEditHome',
  default: {
    send: '',
    recipient: '',
    letterName: '',
    letterGoal: '',
  },
});

export const NewsLetterEditIsIssue = atom({
  key: 'NewsLetterEditIsIssue',
  default: false,
});

export const NewsLetterEditIssue = atom({
  key: 'NewsLetterEditIssue',
  default: '',
});

export const NewsLetterEditIssueOutputs = atom({
  key: 'NewsLetterEditIssueOutputs',
  default: {
    issueOutputKr: '',
    issueOutputEn: '',
  },
});

export const NewsLetterEditIsTitle = atom({
  key: 'NewsLetterEditIsTitle',
  default: false,
});

export const NewsLetterEditTitleOutputs = atom({
  key: 'NewsLetterEditTitleOutputs',
  default: {
    titleOutputKr: '',
    titleOutputEn: '',
  },
});

export const NewsLetterEditIsLead = atom({
  key: 'NewsLetterEditIsLead',
  default: false,
});

export const NewsLetterEditLeadOutputs = atom({
  key: 'NewsLetterEditLeadOutputs',
  default: {
    LeadOutputKr: '',
    LeadOutputEn: '',
  },
});

//드로잉젤 관련
export const outputForDrawing = atom({
  key: 'outputForDrawing',
  default: {
    outputKr: '',
    outputEng: '',
  },
});

//채팅젤
export const IsUseTtsState = atom({
  key: 'isUseTtsState',
  default: false,
});

// 동화만들기_주제 선정하기 인트로
export const TopicIntroState = atom({
  key: 'TopicIntroState',
  default: '',
});

// 동화만들기_챕터 만들기
export const ChapterState = atom({
  key: 'ChapterState',
  default: '',
});
