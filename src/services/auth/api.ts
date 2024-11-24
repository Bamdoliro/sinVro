import { sinabro } from 'apis/instance/instance';
import refreshAuthorization from 'apis/token/refresh';
import authorization from 'apis/token/token';

export const postAppAuthCode = async (token: string | undefined | null) => {
  const authConfig = await authorization();

  const { data } = await sinabro.post('/auth/google/app', { token }, authConfig);

  return data;
};

export const deleteLogout = async () => {
  const authConfig = await authorization();

  await sinabro.delete('/auth', authConfig);
};

export const postRefreshToken = async () => {
  const authConfig = await refreshAuthorization();

  const { data } = await sinabro.post('/auth/refresh', {}, authConfig);

  return data;
};
