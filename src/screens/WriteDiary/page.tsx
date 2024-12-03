import React, { useState } from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import { DiaryInput, Header } from 'components/WriteDiary';
import { Column, CompleteButton, CustomText } from '@sinabro/ui';
import { calculateHeight, flex } from '@sinabro/util';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';
import { useDiaryStore } from 'stores/diary/diary';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

const WriteDiaryPage = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const selectedDate = route?.params?.selectedDate || dayjs().format('YYYY-MM-DD');
  const [textValue, setTextValue] = useState<string>('');
  const { setContent, setWrittenAt } = useDiaryStore();

  const handleComplete = () => {
    if (textValue.trim() === '') {
      Alert.alert('일기를 작성해주세요');
      return;
    }

    setContent(textValue);
    setWrittenAt(selectedDate);

    navigation.navigate('SelectEmotion' as never);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StyledWriteDiaryPage>
        <Header />
        <ContentContainer>
          <Column gap={calculateHeight(27)} alignItems="center">
            <CustomText fontType="H3" color={color.gray900}>
              {dayjs(selectedDate).format('YYYY.MM.DD')}
            </CustomText>
            <DiaryInput textValue={textValue} setTextValue={setTextValue} />
          </Column>
          <CompleteButton onPress={handleComplete}>작성 완료</CompleteButton>
        </ContentContainer>
      </StyledWriteDiaryPage>
    </TouchableWithoutFeedback>
  );
};

export default WriteDiaryPage;

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
  top: ${calculateHeight(97)}px;
  bottom: 34px;
`;
