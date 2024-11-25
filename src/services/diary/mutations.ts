import { useApiError } from 'hooks';
import { deleteDiary, postDiary, putDiary } from './api';
import { useMutation } from '@tanstack/react-query';
import { PostDiaryReq, PutDiaryReq } from 'types/diary/remote';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDiaryStore } from 'stores/diary/diary';
import { AxiosResponse } from 'axios';
import { ID } from 'constants/common/contant';
import { Storage } from 'apis/storage/storage';

export const usePostDiaryMutate = () => {
  const { handleError } = useApiError();
  const navigation = useNavigation();
  const { setContent, setEmotionList, setWrittenAt } = useDiaryStore();

  const { mutate: postDiaryMutate, ...restMutation } = useMutation({
    mutationFn: (diaryData: PostDiaryReq) => postDiary(diaryData),
    onSuccess: (res: AxiosResponse) => {
      const { id } = res.data;
      Storage.setItem(ID.DIARY, id);
      Alert.alert('편지 작성이 완료되었습니다!');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Diary' as never }],
      });

      setContent('');
      setEmotionList([]);
      setWrittenAt('');
    },
    onError: handleError,
  });

  return { postDiaryMutate, ...restMutation };
};

export const useDiaryEditMutation = (diaryId: number) => {
  const { handleError } = useApiError();
  const navigation = useNavigation();
  const { setContent, setEmotionList, setWrittenAt } = useDiaryStore();

  const { mutate: editDiaryMutate, ...restMutation } = useMutation({
    mutationFn: (diaryData: PutDiaryReq) => putDiary(diaryId, diaryData),
    onSuccess: () => {
      Alert.alert('게시물이 수정되었습니다.');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Diary' as never }],
      });
      setContent('');
      setEmotionList([]);
      setWrittenAt('');
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
