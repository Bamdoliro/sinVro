import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllLetters, getLeeterDetail } from './api';
import { KEY } from 'constants/common/contant';

export const useLetterListQuery = () => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.LETTER_LIST] as const,
    queryFn: getAllLetters,
  });

  return { data: data.dataList, ...restQuery };
};

export const useLetterDetailQuery = (letterId: number) => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.LETTER_DETAIL, letterId] as const,
    queryFn: () => getLeeterDetail(letterId),
  });

  return { data: data.data, ...restQuery };
};
