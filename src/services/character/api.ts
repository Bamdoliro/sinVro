import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';
import { GetCharacterRes, SelectCharacter } from 'types/Character/remote';

export const postSelectCharacter = async ({ type }: SelectCharacter) => {
  const authConfig = await authorization();

  const { data } = await sinabro.post('/characters', { type }, authConfig);

  return data;
};

export const getCharacter = async () => {
  const authConfig = await authorization();

  const { data } = await sinabro.get<GetCharacterRes>('/characters', authConfig);

  return data;
};
