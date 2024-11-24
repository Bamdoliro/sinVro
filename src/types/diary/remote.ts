import { Diary, DiaryDetail } from './client';

export interface PostDiaryReq {
  content: string;
  emotionList: string[];
  writtenAt: string;
}

export interface GetDiaryListRes {
  dataList: Diary[];
}

export interface PutDiaryReq {
  title: string;
  content: string;
  category: string;
}

export interface GetDiaryDetailRes {
  data: DiaryDetail;
}
