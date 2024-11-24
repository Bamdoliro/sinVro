import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';
import {
  GetDiaryDetailRes,
  GetDiaryListRes,
  PostDiaryReq,
  PutDiaryReq,
} from 'types/diary/remote';

export const postDiary = async (diaryData: PostDiaryReq) => {
  const authConfig = await authorization();

  const { data } = await sinabro.post('/diaries', diaryData, authConfig);

  return data;
};

export const getAllDiary = async (startDate: string, endDate: string) => {
  const authConfig = await authorization();

  const { data } = await sinabro.get<GetDiaryListRes>(
    `/diaries?startDate=${startDate}&endDate=${endDate}`,
    authConfig
  );

  return data;
};

export const getDiaryDetail = async (diaryId: number) => {
  const authConfig = await authorization();

  const { data } = await sinabro.get<GetDiaryDetailRes>(
    `/diaries/${diaryId}`,
    authConfig
  );

  return data;
};

export const putDiary = async (diaryId: number, diaryData: PutDiaryReq) => {
  const authConfig = await authorization();

  const { data } = await sinabro.put(`/diaries/${diaryId}`, diaryData, authConfig);

  return data;
};

export const deleteDiary = async (diaryId: number) => {
  const authConfig = await authorization();

  const { data } = await sinabro.delete(`/diaries/${diaryId}`, authConfig);

  return data;
};
