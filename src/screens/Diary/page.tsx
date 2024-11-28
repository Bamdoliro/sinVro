import React from 'react';
import { color } from '@sinabro/design-token';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { calculateHeight, flex } from '@sinabro/util';
import { IconNote, IconWhiteArrow } from '@sinabro/icon';
import { Calender, Column, CustomText } from '@sinabro/ui';
import { useNavigation } from '@react-navigation/native';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryListQuery } from 'services/diary/quries';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/navigationType';

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
        <IconContainer
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Main' as never }],
            });
          }}
        >
          <IconWhiteArrow width={23} height={17} />
        </IconContainer>
        <TitleContainer>
          <CustomText fontType="H3" color={color.white100}>
            하루 일기
          </CustomText>
        </TitleContainer>
      </StyledHeader>
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

const StyledHeader = styled.View`
  position: absolute;
  top: ${calculateHeight(67)}px;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
`;

const TitleContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  flex: 1;
`;
