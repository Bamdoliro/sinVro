import { sinabro } from 'apis/instance/instance';
import refreshAuthorization from 'apis/token/refresh';
import { PatchVerificationReq, PostAuthReq, PostJoinAuthReq } from 'types/auth/remote';

export const postVerifyCode = async (email: string) => {
  const { data } = await sinabro.post('/users/verify', email);

  return data;
};

export const patchVerify = async ({ email, code }: PatchVerificationReq) => {
  const { data } = await sinabro.patch('/users/verify', { email, code });

  return data;
};

export const postSignUp = async ({ email, name, password }: PostJoinAuthReq) => {
  const { data } = await sinabro.post('/users', { email, name, password });

  return data;
};

export const postLogin = async ({ email, password }: PostAuthReq) => {
  const { data } = await sinabro.post('/auth', { email, password });

  return data;
};

export const postRefreshToken = async () => {
  const authConfig = await refreshAuthorization();

  const { data } = await sinabro.post('/auth/refresh', {}, authConfig);

  return data;
};

export const deleteLogoutUser = async () => {
  const authConfig = await refreshAuthorization();

  await sinabro.delete('/auth', authConfig);
};
