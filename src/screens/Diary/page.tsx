import React from 'react';
import { color } from '@sinabro/design-token';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconNote, IconWhiteArrow } from '@sinabro/icon';
import { Calender, Column, CustomText, Row } from '@sinabro/ui';
import { useNavigation } from '@react-navigation/native';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryListQuery } from 'services/diary/quries';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/navigationType';
import dayjs from 'dayjs';

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
      <StyledHeader>
        <RowContainer>
          <IconWhiteContainer
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Main' as never }],
              });
            }}
          >
            <IconWhiteArrow width={23} height={17} />
          </IconWhiteContainer>
          <TitleContainer>
            <CustomText fontType="H3" color={color.white100}>
              하루 일기
            </CustomText>
          </TitleContainer>
        </RowContainer>
      </StyledHeader>
      <ContentContainer>
        <Column alignItems="center" gap={22}>
          <IconContainer
            onPress={() => {
              const today = dayjs().format('YYYY-MM-DD');
              navigation.navigate('WriteDiary', { selectedDate: today });
            }}
          >
            <IconNote width={140} height={135} />
          </IconContainer>
          <Calender
            showNotDiary={true}
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
                navigation.navigate('WriteDiary', { selectedDate: date });
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

const StyledHeader = styled.View`
  position: absolute;
  top: ${calculateHeight(67)}px;
  left: 0;
  width: 100%;
  height: ${calculateHeight(50)}px;
  z-index: 10;
  background-color: transparent;
`;

const RowContainer = styled(Row)`
  width: 100%;
  height: 100%;
  position: relative;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
`;

const IconWhiteContainer = styled.TouchableOpacity`
  position: absolute;
  left: ${calculateWidth(20)}px;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
`;

const TitleContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
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
