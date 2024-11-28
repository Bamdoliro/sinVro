import React from 'react';
import { color } from '@sinabro/design-token';
import { IconMailBox } from '@sinabro/icon';
import { Calender, Column } from '@sinabro/ui';
import { flex } from '@sinabro/util';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Header } from 'components/common';
import { useNavigation } from '@react-navigation/native';
import { useCharacterQuery } from 'services/character/quries';
import { useLetterListQuery } from 'services/letter/quries';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/navigationType';
import dayjs from 'dayjs';

type DiaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MailBox'>;

const MailBoxPage = () => {
  const { data: characterData } = useCharacterQuery();
  const { data: letterData } = useLetterListQuery();
  const navigation = useNavigation<DiaryScreenNavigationProp>();

  console.log('Letter Data:', letterData);

  const datesWithLetters = letterData
    ? letterData
        .map((letter) => dayjs(letter.createdAt).format('YYYY-MM-DD'))
        .filter((date) => dayjs(date).isValid()) // 유효한 날짜만 필터링
    : [];

  const handleDiaryClick = (id: number) => {
    console.log(`Navigating to letter with ID: ${id}`);
    navigation.navigate('CheckLetter', { letterId: id });
  };

  const handleDateClick = (date: string) => {
    console.log('Clicked date:', date);

    const selectedDiary = letterData?.find(
      (diary) => dayjs(diary.createdAt).format('YYYY-MM-DD') === date
    );

    if (selectedDiary) {
      const id = selectedDiary.id;
      if (id !== null) {
        handleDiaryClick(id);
      } else {
        console.error('Diary ID is null for date:', date);
      }
    } else {
      console.error('No diary found for date:', date);
    }
  };

  return (
    <StyledMailBoxPage
      colors={
        characterData?.data.type === 'HEON'
          ? [color.sinabroBlue, color.sinabroSkyBlue]
          : [color.sinabroPink, color.sinabroCream]
      }
    >
      <Header title="우편함" option="MAIL" />
      <ContentContainer>
        <Column alignItems="center" gap={15}>
          <IconMailBox width={144} height={135} />
          <Calender
            datesWithLetter={datesWithLetters}
            onPressLetter={(date: string | number | null) => {
              if (!date) {
                console.error('Invalid date:', date);
                return;
              }

              const formattedDate =
                typeof date === 'string'
                  ? date
                  : typeof date === 'number'
                  ? dayjs(date).format('YYYY-MM-DD')
                  : null;

              if (!formattedDate || !dayjs(formattedDate).isValid()) {
                console.error('Invalid formatted date:', formattedDate);
                return;
              }

              handleDateClick(formattedDate);
            }}
          />
        </Column>
      </ContentContainer>
    </StyledMailBoxPage>
  );
};

export default MailBoxPage;

const StyledMailBoxPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 147px;
  bottom: 66px;
`;
