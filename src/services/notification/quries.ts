import { useQuery } from '@tanstack/react-query';
import { getNotificationList } from './api';
import { KEY } from 'constants/common/contant';

export const useNotificationListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.DIARYLIST],
    queryFn: () => getNotificationList(),
  });

  return { data: data?.dataList, ...restQuery };
};
