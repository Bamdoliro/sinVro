import { PostNotificationReq } from 'types/notification/remote';
import { postNotification } from './api';
import { useMutation } from '@tanstack/react-query';
import { useApiError } from 'hooks';

export const usePostNotificationMutate = (notificationData: PostNotificationReq) => {
  const { handleError } = useApiError();

  const { mutate: postNotificationMutate, ...restMutation } = useMutation({
    mutationFn: () => postNotification(notificationData),
    onSuccess: () => {},
    onError: handleError,
  });

  return { postNotificationMutate, ...restMutation };
};
