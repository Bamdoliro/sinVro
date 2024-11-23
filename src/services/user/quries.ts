import { useQuery } from '@tanstack/react-query';
import { getUser } from './api';
import { Storage } from 'apis/storage/storage';
import { KEY, TOKEN } from 'constants/common/contant';

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER] as const,
    queryFn: getUser,
    enabled: !!Storage.getItem(TOKEN.ACCESS),
  });

  return { data: data?.data, ...restQuery };
};
