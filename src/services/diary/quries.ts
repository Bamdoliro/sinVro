import { useQuery } from '@tanstack/react-query';
import { KEY } from 'constants/common/contant';
import { getAllDiary, getDiaryDetail } from './api';

export const useDiaryListQuery = (startDate: string, endDate: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.DIARYLIST],
    queryFn: () => getAllDiary(startDate, endDate),
  });

  return { data: data?.dataList, ...restQuery };
};

export const useDiaryDetailQuery = (dairyId: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.DIARYDETAIL, dairyId] as const,
    queryFn: () => getDiaryDetail(dairyId),
  });

  return { data: data?.data, ...restQuery };
};
