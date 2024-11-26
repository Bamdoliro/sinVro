import { useMutation } from '@tanstack/react-query';
import { deleteFcmToken, postFcmToken } from './api';
import { useApiError } from 'hooks';

export const usePostFcmTokenMutation = () => {
  const { handleError } = useApiError();

  const { mutate: postFacmTokenMutate, ...restMutation } = useMutation({
    mutationFn: (token: string | null) => postFcmToken(token),
    onSuccess: () => {},
    onError: handleError,
  });

  return { postFacmTokenMutate, ...restMutation };
};

export const useDeleteFcmTokenMutation = () => {
  const { handleError } = useApiError();

  const { mutate: deleteFcmTokenMutate, ...restMutation } = useMutation({
    mutationFn: (token: string | null) => deleteFcmToken(token),
    onSuccess: () => {},
    onError: handleError,
  });

  return { deleteFcmTokenMutate, ...restMutation };
};
