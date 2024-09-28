import React from 'react';
import { Column, CustomText, Row } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { useNavigation } from '@react-navigation/native';
import { FAQButton, Name, QuestionButton, SettingButton } from 'components/MyPage';
import LogOutButton from 'components/MyPage/LogOutButton/LogOutButton';
import { Header } from 'components/common';
import { calculateHeight } from '@sinabro/util';

const MyPage = () => {
  const navigation = useNavigation();

  return (
    <StyledMyPage>
      <Header />
      <Column gap={209} alignItems="center">
        <Column gap={32}>
          <Name />
          <Column gap={16}>
            <Row alignItems="center" gap={16}>
              <SettingButton onPress={() => navigation.navigate('Setting' as never)} />
              <QuestionButton onPress={() => navigation.navigate('Inquiry' as never)} />
            </Row>
            <FAQButton onPress={() => navigation.navigate('FAQ' as never)} />
          </Column>
        </Column>
        <Column gap={16} alignItems="center">
          <LogOutButton />
          <CustomText fontType="caption" color={color.white100}>
            1.0.0 (최신 버전)
          </CustomText>
        </Column>
      </Column>
    </StyledMyPage>
  );
};

export default MyPage;

const StyledMyPage = styled.View`
  height: 100%;
  width: 100%;
  padding-top: ${calculateHeight(137)}px;
  background-color: ${color.gray900};
`;
