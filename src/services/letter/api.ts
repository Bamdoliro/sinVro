import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';
import { GetLetterDetailRes, GetLetterListRes } from 'types/letter/remote';

export const postLetters = async () => {
  const authConfig = await authorization();
  const { data } = await sinabro.post('/letters', {}, authConfig);

  return data;
};

export const getAllLetters = async () => {
  const authConfig = await authorization();
  const { data } = await sinabro.get<GetLetterListRes>('/letters', authConfig);

  return data;
};

export const getLeeterDetail = async (letterId: number) => {
  const authConfig = await authorization();
  const { data } = await sinabro.get<GetLetterDetailRes>(
    `/letters/${letterId}`,
    authConfig
  );

  return data;
};
