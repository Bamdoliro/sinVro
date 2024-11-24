import { Notifications } from './client';

export interface PostNotificationReq {
  title: string;
  body: string;
}

export interface GetNotificationListRes {
  dataList: Notifications[];
}
