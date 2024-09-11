import styled from 'styled-components/native';
import React from 'react';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { color } from '@sinabro/design-token';
import { Column, CustomText, Row } from '@sinabro/ui';
import { IconKakao, IconSinabroLogo } from '@sinabro/icon';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Column gap={calculateHeight(88)}>
        <IconSinabroLogo width={224} height={140} />
        <Column alignItems="center" gap={10}>
          <CustomText fontType="B6" color={color.white100}>
            당신을 위한 작은 쉼터
          </CustomText>
          <CustomText fontType="H1" color={color.white100}>
            시나브로
          </CustomText>
        </Column>
      </Column>
      <KakaoButton>
        <Row alignItems="center" gap={calculateWidth(5)}>
          <IconKakao width={20} height={18.75} />
          <CustomText fontType="kakao" color="#3C1D1E">
            카카오로 시작하기
          </CustomText>
        </Row>
      </KakaoButton>
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledLoginPage = styled.View`
  ${flex({ alignItems: 'center' })}
  background-color: ${color.gray900};
  padding-top: ${calculateHeight(244)}px;
  width: auto;
  height: 100%;
`;

const KakaoButton = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  background-color: #fae100;
  width: ${calculateWidth(335)}px;
  height: 56px;
  border-radius: 6px;
  margin-top: ${calculateHeight(112)}px;
`;
