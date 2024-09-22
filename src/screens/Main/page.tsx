import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '@sinabro/design-token';
import { CategoryList, Character, Header, TabBar, Title } from 'components/Main';
import { flex } from '@sinabro/util';
import { Column } from '@sinabro/ui';

const MainPage = () => (
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
          <TabBar />
        </Column>
      </Column>
    </ContentContainer>
  </StyledMainPage>
);

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
