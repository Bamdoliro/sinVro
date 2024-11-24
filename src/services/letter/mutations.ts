import { useMutation } from '@tanstack/react-query';
import { postLetters } from './api';
import { useApiError } from 'hooks';

export const usePostLetterMutate = () => {
  const { handleError } = useApiError();

  const { mutate: postLetterMutate, ...restMutation } = useMutation({
    mutationFn: () => postLetters(),
    onSuccess: () => {},
    onError: handleError,
  });

  return { postLetterMutate, ...restMutation };
};
