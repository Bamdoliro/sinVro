import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';
import { GetUserRes } from 'types/user/remote';

export const getUser = async () => {
  const authConfig = await authorization();

  const { data } = await sinabro.get<GetUserRes>('/users', authConfig);

  return data;
};
