import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { ProfileMembership } from '../Config/recoil';

export default function useCheckMembership() {
  const membership = useRecoilValue(ProfileMembership);

  const today = new Date();
  const todayFormat = dayjs(today).format('YYYY-MM-DD');
  const nextFormat = dayjs(membership.next_date).format('YYYY-MM-DD');

  if (
    (membership.count === 0 && membership.current === 0) ||
    (membership.stop_date === true && todayFormat > nextFormat)
  ) {
    return false;
  } else {
    return true;
  }
}
