export interface Diary {
  id: string | null;
  writtenAt: string;
}

export interface DiaryDetail {
  id: number | null;
  content: string;
  emotionList: string[];
  writtenAt: string;
  createdAt: string | null;
  updatedAt: string | null;
}
