import { sinabro } from 'apis/instance/instance';
import authorization from 'apis/token/token';
import { SelectCharacter } from 'types/Character/remote';

export const postSelectCharacter = async ({ type }: SelectCharacter) => {
  const { data } = await sinabro.post('/characters', { type }, authorization());

  return data;
};
