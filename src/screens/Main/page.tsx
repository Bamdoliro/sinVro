import React, { useEffect, useRef } from 'react';
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
import { useCharacterQuery } from 'services/character/quries';
import { usePostLetterMutate } from 'services/letter/mutations';
import dayjs from 'dayjs';

const MainPage = () => {
  const { data } = useCharacterQuery();
  const { postLetterMutate } = usePostLetterMutate();
  const navigation = useNavigation();
  const hasPostedLetter = useRef(false);

  useEffect(() => {
    if (!hasPostedLetter.current && data?.data.createdAt) {
      const createdDate = dayjs(data.data.createdAt);
      const currentDate = dayjs();
      const differenceInDays = currentDate.diff(createdDate, 'day');

      if (differenceInDays % 7 === 0) {
        postLetterMutate();
        hasPostedLetter.current = true;
      }
    }
  }, [data, postLetterMutate]);

  return (
    <StyledMainPage
      colors={
        data?.data.type === 'HEON'
          ? [color.sinabroBlue, color.sinabroSkyBlue]
          : [color.sinabroPink, color.sinabroCream]
      }
    >
      <ContentContainer>
        <Column alignItems="center">
          <Header
            onPress1={() => navigation.navigate('MyPage' as never)}
            onPress2={() => navigation.navigate('Alarm' as never)}
          />
          <Column alignItems="center">
            <Title type={data?.data.type} createdDate={data?.data.createdAt} />
            <CategoryListContainer>
              <CategoryList freiendship={data?.data.friendShip} type={data?.data.type} />
            </CategoryListContainer>
            <Character type={data?.data.type} />
            {data?.data.type === 'HEON' ? (
              <StyledHeonTab>
                <Row alignItems="center" gap={40}>
                  <DiaryTab onPress={() => navigation.navigate('Diary' as never)} />
                  <MailBoxTab onPress={() => navigation.navigate('MailBox' as never)} />
                  <RadioTab
                    onPress={() =>
                      Alert.alert('안내', '아직 준비 중입니다.', [{ text: '확인' }])
                    }
                  />
                </Row>
              </StyledHeonTab>
            ) : (
              <StyledSolTab>
                <Row alignItems="center" gap={40}>
                  <DiaryTab onPress={() => navigation.navigate('Diary' as never)} />
                  <MailBoxTab onPress={() => navigation.navigate('MailBox' as never)} />
                  <RadioTab
                    onPress={() =>
                      Alert.alert('안내', '아직 준비 중입니다.', [{ text: '확인' }])
                    }
                  />
                </Row>
              </StyledSolTab>
            )}
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

const StyledHeonTab = styled.View`
  margin-top: 53.73px;
  z-index: 1;
`;

const StyledSolTab = styled.View`
  margin-top: 27.8px;
  z-index: 1;
`;
