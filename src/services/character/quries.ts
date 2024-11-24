import { useQuery } from '@tanstack/react-query';
import { KEY } from 'constants/common/contant';
import { getCharacter } from './api';

export const useCharacterQuery = () => {
  return useQuery({
    queryKey: [KEY.CHARACTER],
    queryFn: getCharacter,
  });
};
