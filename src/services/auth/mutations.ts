import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { PatchVerificationReq, PostAuthReq, PostJoinAuthReq } from 'types/auth/remote';
import {
  deleteLogoutUser,
  patchVerify,
  postLogin,
  postRefreshToken,
  postSignUp,
  postVerifyCode,
} from './api';
import { AxiosResponse } from 'axios';
import { Storage } from 'apis/storage/storage';
import { useApiError } from 'hooks';
import { Alert } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import { TOKEN } from 'constants/common/contant';

export const useLoginMutation = () => {
  const navigation = useNavigation();
  const { handleError } = useApiError();

  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: ({ email, password }: PostAuthReq) => postLogin({ email, password }),
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

export const useJoinUserMutation = () => {
  const navigation = useNavigation();
  const { handleError } = useApiError();

  const { mutate: joinUserMutate, ...restMutation } = useMutation({
    mutationFn: (data: PostJoinAuthReq) => postSignUp(data),
    onSuccess: () => {
      Alert.alert('회원가입 성공!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    },
    onError: handleError,
  });

  return { joinUserMutate, ...restMutation };
};

export const useRequestVerificationCodeMutation = (email: string) => {
  const { handleError } = useApiError();

  const { mutate: requestVerificationCodeMutate, ...restMutation } = useMutation({
    mutationFn: () => postVerifyCode(email),
    onSuccess: () => Alert.alert('인증 코드가 발송되었습니다.'),
    onError: handleError,
  });

  return { requestVerificationCodeMutate, ...restMutation };
};

export const useVerificationMutation = (
  setIsSuccessVerification: Dispatch<SetStateAction<boolean>>
) => {
  const { handleError } = useApiError();

  const { mutate: verificationMutate, ...restMutation } = useMutation({
    mutationFn: ({ email, code }: PatchVerificationReq) => patchVerify({ code, email }),
    onSuccess: () => {
      Alert.alert('인증 성공');
      setIsSuccessVerification(true);
    },
    onError: handleError,
  });

  return { verificationMutate, ...restMutation };
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

export const useLogoutUserMutation = () => {
  const navigation = useNavigation();

  const { mutate: logoutUserMutate, ...restMutation } = useMutation({
    mutationFn: deleteLogoutUser,
    onSuccess: () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
      Storage.clear();
    },
    onError: () => {
      navigation.navigate('Main' as never);
    },
  });

  return { logoutUserMutate, ...restMutation };
};
