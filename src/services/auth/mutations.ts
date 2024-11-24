import { useMutation } from '@tanstack/react-query';
import { useApiError } from 'hooks';
import { deleteLogout, postAppAuthCode, postRefreshToken } from './api';
import { AxiosResponse } from 'axios';
import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const useLoginMutation = () => {
  const { handleError } = useApiError();
  const navigation = useNavigation();

  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: (token: string | undefined | null) => postAppAuthCode(token),
    onSuccess: (res: AxiosResponse) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Test' as never }],
      });
    },
    onError: handleError,
  });

  return { loginMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
  const navigation = useNavigation();

  const { mutate: logoutUserMutate, ...restMutation } = useMutation({
    mutationFn: deleteLogout,
    onSuccess: () => {
      Storage.clear();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    },
    onError: () => {
      Storage.clear();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    },
  });

  return { logoutUserMutate, ...restMutation };
};

export const useRefreshTokenMutation = () => {
  const navigation = useNavigation();

  const { mutate: refreshToeknMutate, ...restMutation } = useMutation({
    mutationFn: postRefreshToken,
    onSuccess: (res: AxiosResponse) => {
      const { accessToken } = res.data;
      Storage.setItem(TOKEN.ACCESS, accessToken);
    },
    onError: () => {
      Alert.alert('토큰 만료', '다시 로그인해주세요.');
      Storage.removeItem(TOKEN.ACCESS);
      Storage.removeItem(TOKEN.REFRESH);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    },
  });

  return { refreshToeknMutate, ...restMutation };
};
