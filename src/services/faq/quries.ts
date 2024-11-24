import { useSuspenseQuery } from '@tanstack/react-query';
import { KEY } from 'constants/common/contant';
import { getFaqList } from './api';

export const useFaqListQuery = () => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.FAQ_LIST] as const,
    queryFn: getFaqList,
  });

  return { data: data.dataList, ...restQuery };
};
