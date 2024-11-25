import { RouteProp } from '@react-navigation/native';
import { color } from '@sinabro/design-token';
import { Column, CompleteButton, CustomText } from '@sinabro/ui';
import { flex } from '@sinabro/util';
import { DiaryInput, Header } from 'components/WriteDiary';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDiaryStore } from 'stores/diary/diary';
import styled from 'styled-components/native';
import React from 'react';
import dayjs from 'dayjs';
import { useDiaryDetailQuery } from 'services/diary/quries';
import { RootStackParamList } from 'navigation/Navigation';

type CheckDiaryPageRouteProp = RouteProp<RootStackParamList, 'EditDiary'>;

const EditWritePage = ({ route }: { route: CheckDiaryPageRouteProp }) => {
  const diaryId = route?.params?.diaryId;
  const { data } = useDiaryDetailQuery(diaryId);
  const [textValue, setTextValue] = useState<string>('');
  const formatDate = dayjs().format('YYYY.MM.DD');
  const formatTime = dayjs().format('YYYY-MM-DD');
  const { setContent, setWrittenAt } = useDiaryStore();

  const handleComplete = () => {
    if (textValue.trim() === '') {
      Alert.alert('일기를 작성해주세요');
      return;
    }

    setContent(textValue);
    setWrittenAt(formatTime);
  };

  return (
    <StyledWriteDiaryPage>
      <Header />
      <ContentContainer>
        <Column gap={27} alignItems="center">
          <CustomText fontType="H3" color={color.gray900}>
            {formatDate}
          </CustomText>
          <DiaryInput textValue={data?.content} setTextValue={setTextValue} />
        </Column>
        <CompleteButton onPress={handleComplete}>작성 완료</CompleteButton>
      </ContentContainer>
    </StyledWriteDiaryPage>
  );
};

export default EditWritePage;

const StyledWriteDiaryPage = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  background-color: ${color.paleYellow};
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 97px;
  bottom: 34px;
`;
