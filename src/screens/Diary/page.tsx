import React from 'react';
import { color } from '@sinabro/design-token';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { flex } from '@sinabro/util';
import { IconNote } from '@sinabro/icon';
import { Calender, Column } from '@sinabro/ui';
import { Header } from 'components/common';
import { useNavigation } from '@react-navigation/native';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryListQuery } from 'services/diary/quries';
import { StackNavigationProp } from '@react-navigation/stack';

// 네비게이션 타입 정의
type RootStackParamList = {
  Diary: undefined;
  CheckDiary: { diaryId: number };
  WriteDiary: undefined;
};

type DiaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Diary'>;

const DiaryPage = () => {
  const { data } = useCharacterQuery();
  const { data: diaryData } = useDiaryListQuery('2024-01-01', '2024-12-31');

  const datesWithDiarys = diaryData ? diaryData.map((diary) => diary.writtenAt) : [];

  const navigation = useNavigation<DiaryScreenNavigationProp>();

  const handleDiaryClick = (id: number | null) => {
    if (id === null) {
      return;
    }
    navigation.navigate('CheckDiary', { diaryId: id });
  };

  return (
    <StyledDiaryPage
      colors={
        data?.data.type === 'HEON'
          ? [color.sinabroBlue, color.sinabroSkyBlue]
          : [color.sinabroPink, color.sinabroCream]
      }
    >
      <Header title="하루일기" />
      <ContentContainer>
        <Column alignItems="center" gap={22}>
          <IconContainer onPress={() => navigation.navigate('WriteDiary')}>
            <IconNote width={140} height={135} />
          </IconContainer>
          <Calender
            datesWithDiary={datesWithDiarys}
            onPressDiary={(date: string) => {
              const selectedDiary = diaryData?.find((diary) => diary.writtenAt === date);
              if (selectedDiary) {
                const id =
                  typeof selectedDiary.id === 'string'
                    ? parseInt(selectedDiary.id, 10)
                    : selectedDiary.id;
                handleDiaryClick(id);
              } else {
              }
            }}
          />
        </Column>
      </ContentContainer>
    </StyledDiaryPage>
  );
};

export default DiaryPage;

const StyledDiaryPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 144px;
  bottom: 66px;
`;

const IconContainer = styled.TouchableOpacity`
  margin-left: 134px;
  margin-right: 101px;
`;
