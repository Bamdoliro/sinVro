import React from 'react';
import { color } from '@sinabro/design-token';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { flex } from '@sinabro/util';
import { IconNote } from '@sinabro/icon';
import { Calender, Column } from '@sinabro/ui';

const DiaryPage = () => {
  return (
    <StyledDiaryPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
      <ContentContainer>
        <Column alignItems="center" gap={22}>
          <IconContainer>
            <IconNote width={140} height={135} />
          </IconContainer>
          <Calender />
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
