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
import { RootStackParamList } from 'navigation/Navigation';

type DiaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MailBox'>;

const MailBoxPage = () => {
  const { data } = useCharacterQuery();
  const { data: letterData } = useLetterListQuery();
  const navigation = useNavigation<DiaryScreenNavigationProp>();

  const datesWithLetters = letterData
    ? letterData.map((letter) => letter.createdAt).filter((date) => date !== null)
    : [];

  const handleDiaryClick = (id: number | null) => {
    if (id === null) {
      return;
    }
    navigation.navigate('CheckLetter', { letterId: id });
  };

  return (
    <StyledMailBoxPage
      colors={
        data?.data.type === 'HEON'
          ? [color.sinabroBlue, color.sinabroSkyBlue]
          : [color.sinabroPink, color.sinabroCream]
      }
    >
      <Header title="우편함" option="MAIL" />
      <ContentContainer>
        <Column alignItems="center" gap={15}>
          <IconMailBox width={144} height={135} />
          <Calender
            datesWithLetter={datesWithLetters as string[]}
            onPressLetter={(date: string) => {
              const selectedDiary = letterData?.find((diary) => diary.createdAt === date);
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
