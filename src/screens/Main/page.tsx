import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '@sinabro/design-token';
import {
  CategoryList,
  Character,
  DiaryTab,
  Header,
  MailBoxTab,
  RadioTab,
  Title,
} from 'components/Main';
import { flex } from '@sinabro/util';
import { Column, Row } from '@sinabro/ui';

const MainPage = () => {
  return (
    <StyledMainPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
      <ContentContainer>
        <Column alignItems="center">
          <Header />
          <Column alignItems="center">
            <Title />
            <CategoryListContainer>
              <CategoryList />
            </CategoryListContainer>
            <Character />
            <StyledTab>
              <Row alignItems="center" gap={40}>
                <DiaryTab />
                <MailBoxTab />
                <RadioTab />
              </Row>
            </StyledTab>
          </Column>
        </Column>
      </ContentContainer>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
`;

const CategoryListContainer = styled.View`
  width: 100%;
`;

const StyledTab = styled.View`
  margin-top: 53.73px;
`;
