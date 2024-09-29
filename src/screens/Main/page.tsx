import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '@sinabro/design-token';
import {
  CategoryList,
  Character,
  DiaryTab,
  MailBoxTab,
  RadioTab,
  Title,
  Header,
} from 'components/Main';
import { flex } from '@sinabro/util';
import { Column, Row } from '@sinabro/ui';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <StyledMainPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
      <ContentContainer>
        <Column alignItems="center">
          <Header
            onPress1={() => navigation.navigate('MyPage' as never)}
            onPress2={() => navigation.navigate('Alarm' as never)}
          />
          <Column alignItems="center">
            <Title />
            <CategoryListContainer>
              <CategoryList />
            </CategoryListContainer>
            <Character />
            <StyledTab>
              <Row alignItems="center" gap={40}>
                <DiaryTab onPress={() => navigation.navigate('Diary' as never)} />
                <MailBoxTab onPress={() => navigation.navigate('MailBox' as never)} />
                <RadioTab
                  onPress={() =>
                    Alert.alert('안내', '아직 준비 중입니다.', [{ text: '확인' }])
                  }
                />
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
  z-index: 1;
`;
