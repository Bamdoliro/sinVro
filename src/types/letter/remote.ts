import { Letter, LetterDetail } from './client';

export interface GetLetterListRes {
  dataList: Letter[];
}

export interface GetLetterDetailRes {
  data: LetterDetail;
}
