import styled from 'styled-components/native';
import React from 'react';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { color } from '@sinabro/design-token';
import { Column, CustomText, Row } from '@sinabro/ui';
import { IconGoogle, IconSinabroLogo } from '@sinabro/icon';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Column gap={calculateHeight(88)}>
        <IconSinabroLogo width={224} height={140} />
        <Column alignItems="center">
          <CustomText fontType="B6" color={color.white100}>
            당신을 위한 작은 쉼터
          </CustomText>
          <CustomText fontType="H1" color={color.white100}>
            시나브로
          </CustomText>
        </Column>
      </Column>
      <KakaoButton
        onPress={async () => {
          try {
            GoogleSignin.configure({
              webClientId:
                '784498296988-jvkntl96srooopu1i2viald3291prgso.apps.googleusercontent.com',
              iosClientId:
                '784498296988-h4ef35eq8et4ej56shumm3pae3cddcu2.apps.googleusercontent.com',
            });

            const hasPlayService = await GoogleSignin.hasPlayServices();
            if (hasPlayService) {
              const userInfo = await GoogleSignin.signIn();
              console.log('User Info:', JSON.stringify(userInfo));
            } else {
              console.log('Google Play Service is not available.');
            }
          } catch (e) {
            console.log('Error during Google Sign-In:', JSON.stringify(e));
          }
        }}
      >
        <Row alignItems="center" gap={calculateWidth(12)}>
          <IconGoogle width={28} height={28} />
          <CustomText fontType="kakao" color={color.gray900}>
            구글로 시작하기
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
  background-color: #EFEFEF;
  width: ${calculateWidth(335)}px;
  height: 56px;
  border-radius: 6px;
  margin-top: ${calculateHeight(112)}px;
`;
