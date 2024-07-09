import { authService } from '../Config/Firebase';

export const SignOut = async () => {
  const { Kakao } = window;
  const User = JSON.parse(localStorage.getItem('User'));

  if (User && User.provider === 'kakao') {
    Kakao.Auth.logout(() => {
      localStorage.clear();
      window.location.replace('/service/storybook/topic');
    });
  }
  if (User && User.provicder !== 'kakao') {
    await authService.signOut();
    localStorage.clear();
    window.location.replace('/service/storybook/topic');
  }
};
