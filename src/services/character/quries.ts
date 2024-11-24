import { useQuery } from '@tanstack/react-query';
import { KEY } from 'constants/common/contant';
import { getCharacter } from './api';

export const useCharacterQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.CHARACTER],
    queryFn: () => getCharacter(),
  });

  return { data: data, ...restQuery };
};
