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

const DiaryPage = () => {
  const { data } = useCharacterQuery();
  const datesWithDiarys = ['2024-11-02'];
  const navigation = useNavigation();

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
          <IconContainer onPress={() => navigation.navigate('WriteDiary' as never)}>
            <IconNote width={140} height={135} />
          </IconContainer>
          <Calender
            datesWithDiary={datesWithDiarys}
            onPressDiary={() => navigation.navigate('CheckDiary' as never)}
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
