import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';

export const postFcmToken = async (token: string) => {
  const authConfig = await authorization();

  const { data } = await sinabro.post('/fcm-token', token, authConfig);

  return data;
};

export const deleteFcmToken = async (token: string) => {
  const authConfig = await authorization();

  const { data } = await sinabro.delete('/fcm-token', {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
      ...authConfig.headers,
    },
    data: { token },
  });

  return data;
};
