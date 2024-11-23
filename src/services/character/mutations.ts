import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { postSelectCharacter } from './api';
import { SelectCharacter } from 'types/Character/remote';
import { useApiError } from 'hooks';

export const useSelctCharacterMutation = (type: SelectCharacter) => {
  const { handleError } = useApiError();
  const navigation = useNavigation();

  const { mutate: postSelectCharacterMutate, ...restMutation } = useMutation({
    mutationFn: () => postSelectCharacter(type),
    onSuccess: () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Story' as never }],
      });
    },
    onError: handleError,
  });

  return { postSelectCharacterMutate, ...restMutation };
};
