import { useApiError } from 'hooks';
import { deleteDiary, postDiary, putDiary } from './api';
import { useMutation } from '@tanstack/react-query';
import { PostDiaryReq, PutDiaryReq } from 'types/diary/remote';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const usePostDiaryMutate = (diaryData: PostDiaryReq) => {
  const { handleError } = useApiError();
  const navigation = useNavigation();

  const { mutate: postDiaryMutate, ...restMutation } = useMutation({
    mutationFn: () => postDiary(diaryData),
    onSuccess: () => {
      Alert.alert('편지 작성이 완료되었습니다!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Diary' as never }],
      });
    },
    onError: handleError,
  });

  return { postDiaryMutate, ...restMutation };
};

export const useDiaryEditMutation = (diaryId: number, faqData: PutDiaryReq) => {
  const { handleError } = useApiError();
  const navigation = useNavigation();

  const { mutate: editDiaryMutate, ...restMutation } = useMutation({
    mutationFn: () => putDiary(diaryId, faqData),
    onSuccess: () => {
      Alert.alert('게시물이 수정되었습니다.');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Diary' as never }],
      });
    },
    onError: handleError,
  });

  return { editDiaryMutate, ...restMutation };
};

export const useDeleteDiaryMutation = (diaryId: number) => {
  const { handleError } = useApiError();
  const navigation = useNavigation();

  const { mutate: deleteDiaryMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteDiary(diaryId),
    onSuccess: () => {
      Alert.alert('게시물이 삭제되었습니다.');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Diary' as never }],
      });
    },
    onError: handleError,
  });

  return { deleteDiaryMutate, ...restMutation };
};
