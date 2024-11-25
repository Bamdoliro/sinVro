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
  content: string;
  emotionList: string[];
  writtenAt: string;
}

export interface GetDiaryDetailRes {
  data: DiaryDetail;
}
