import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';
import { GetNotificationListRes, PostNotificationReq } from 'types/notification/remote';

export const postNotification = async (notificationData: PostNotificationReq) => {
  const authConfig = await authorization();

  const { data } = await sinabro.post('/notifications', notificationData, authConfig);

  return data;
};

export const getNotificationList = async () => {
  const authConfig = await authorization();

  const { data } = await sinabro.get<GetNotificationListRes>(
    '/notifications',
    authConfig
  );

  return data;
};
